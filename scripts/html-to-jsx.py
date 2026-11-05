"""Convert the Motonic/HelloExpert static HTML pages into React (JSX) components.

Usage: python3 -I convert.py <template_dir> <react_src_dir>
"""
import hashlib
import json
import os
import re
import sys

from bs4 import BeautifulSoup, Comment, NavigableString, Tag

SRC, OUT = sys.argv[1], sys.argv[2]

PAGES = {
    'index': ('HomeOne', '/'),
    'index-2': ('HomeTwo', '/home-2'),
    'index-3': ('HomeThree', '/home-3'),
    'about': ('About', '/about'),
    'services': ('Services', '/services'),
    'service-details': ('ServiceDetails', '/service-details'),
    'Pricing': ('Pricing', '/pricing'),
    'team': ('Team', '/team'),
    'testimonials': ('Testimonials', '/testimonials'),
    'blog': ('Blog', '/blog'),
    'blog-grid': ('BlogGrid', '/blog-grid'),
    'blog-details': ('BlogDetails', '/blog-details'),
    'contact': ('Contact', '/contact'),
    '404': ('NotFound', '/404'),
}
ROUTES = {f'{k}.html': v[1] for k, v in PAGES.items()}
WRAPPERS = {'about-page-style', 'service-page-style'}
SKIP = {'preloader', 'site-header', 'hx-site-footer-area'}

VOID = {'img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'col', 'area', 'embed', 'wbr'}
INLINE = {'a', 'span', 'img', 'i', 'button', 'input', 'select', 'label', 'small',
          'strong', 'em', 'b', 'u', 'sup', 'sub', 'textarea', 'abbr', 'cite', 'code'}
ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'colspan': 'colSpan',
    'rowspan': 'rowSpan', 'maxlength': 'maxLength', 'readonly': 'readOnly',
    'allowfullscreen': 'allowFullScreen', 'frameborder': 'frameBorder',
    'autocomplete': 'autoComplete', 'cellpadding': 'cellPadding', 'cellspacing': 'cellSpacing',
    'srcset': 'srcSet', 'crossorigin': 'crossOrigin', 'enctype': 'encType',
    'novalidate': 'noValidate', 'autoplay': 'autoPlay', 'http-equiv': 'httpEquiv',
}
BOOL_ATTRS = {'disabled', 'required', 'readOnly', 'allowFullScreen', 'multiple', 'noValidate',
              'autoPlay', 'checked', 'selected', 'hidden'}

used_imports = set()


def classes(tag):
    return tag.get('class') or []


def esc_text(t):
    return (t.replace('{', '&#123;').replace('}', '&#125;')
            .replace('<', '&lt;').replace('>', '&gt;'))


def esc_attr(v):
    return v.replace('"', '&quot;')


def style_obj(css):
    parts = []
    for decl in css.split(';'):
        if ':' not in decl:
            continue
        k, v = decl.split(':', 1)
        k, v = k.strip(), v.strip()
        if not k:
            continue
        if not k.startswith('--'):
            k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        v = v.replace('url(assets/', 'url(/assets/').replace("url('assets/", "url('/assets/")
        parts.append(f"{json.dumps(k) if '-' in k else k}: {json.dumps(v)}")
    return '{{ ' + ', '.join(parts) + ' }}'


def fix_url(v):
    if v.startswith('assets/'):
        return '/' + v
    return v


def attrs_jsx(tag, extra=None):
    out = []
    for k, v in tag.attrs.items():
        if isinstance(v, list):
            v = ' '.join(v)
        name = ATTR_MAP.get(k, k)
        if name.startswith('on'):
            continue  # never carry inline handlers over
        if name == 'style':
            if v.strip():
                out.append(f'style={style_obj(v)}')
            continue
        if name in ('src', 'href', 'poster'):
            v = fix_url(v)
        if name == 'className':
            v = re.sub(r'\s+', ' ', v).strip()
        if name in BOOL_ATTRS and (v == '' or v.lower() == name.lower()):
            out.append(name)
            continue
        out.append(f'{name}="{esc_attr(v)}"')
    if extra:
        out.extend(extra)
    return (' ' + ' '.join(out)) if out else ''


def is_ws(n):
    return isinstance(n, NavigableString) and not isinstance(n, Comment) and not n.strip()


def meaningful_children(tag):
    return [c for c in tag.children if not isinstance(c, Comment)]


def has_text(tag):
    return any(isinstance(c, NavigableString) and not isinstance(c, Comment) and c.strip()
               for c in tag.children)


def prep_select(sel):
    """Turn <option selected> into a defaultValue on the <select>."""
    chosen = None
    for opt in sel.find_all('option'):
        if opt.has_attr('selected'):
            del opt['selected']
            if not opt.has_attr('value'):
                opt['value'] = '' if opt.has_attr('disabled') else opt.get_text(strip=True)
            chosen = opt['value']
    if chosen is not None:
        sel['data-default-value'] = chosen


def render(node, ind, inline=False):
    pad = '' if inline else '    ' * ind
    if isinstance(node, Comment):
        return ''
    if isinstance(node, NavigableString):
        t = re.sub(r'\s+', ' ', str(node))
        return esc_text(t)
    tag = node
    name = tag.name
    cls = classes(tag)

    # --- component substitutions -------------------------------------------
    if name == 'span' and 'odometer' in cls:
        used_imports.add('Counter')
        return f'{pad}<Counter value="{tag.get("data-count", "0")}" />'
    if name == 'div' and 'owl-carousel' in cls:
        comp = 'TestimonialCarousel' if 'hx-testimonial-active' in cls else 'ClientCarousel'
        used_imports.add(comp)
        keep = ' '.join(c for c in cls if c not in ('owl-carousel',))
        kids = [render(c, ind + 1) for c in tag.children if isinstance(c, Tag)]
        return f'{pad}<{comp} className="{keep}">\n' + '\n'.join(k for k in kids if k) + f'\n{pad}</{comp}>'
    if name == 'a' and 'video-btn' in cls:
        used_imports.add('VideoButton')
        inner = ''.join(render(c, 0, True) for c in tag.children if not is_ws(c))
        return f'{pad}<VideoButton href="{tag["href"]}">{inner.strip()}</VideoButton>'
    if name == 'section' and 'page-title' in cls:
        used_imports.add('PageTitle')
        h2 = tag.find('h2').get_text(strip=True)
        crumbs = tag.select('ol.breadcrumb li')
        cur = crumbs[-1].get_text(strip=True) if crumbs else h2
        return f'{pad}<PageTitle title="{esc_attr(h2)}" crumb="{esc_attr(cur)}" />'

    # --- attribute prep -----------------------------------------------------
    extra = []
    if name == 'select':
        prep_select(tag)
        dv = tag.attrs.pop('data-default-value', None)
        if dv is not None:
            extra.append(f'defaultValue="{esc_attr(dv)}"')
    if name == 'input' and tag.has_attr('value') and tag.get('type') not in ('submit', 'button', 'hidden', 'checkbox', 'radio'):
        extra.append(f'defaultValue="{esc_attr(tag.attrs.pop("value"))}"')
    if name == 'input' and tag.has_attr('checked'):
        del tag['checked']
        extra.append('defaultChecked')
    if name == 'textarea':
        txt = tag.get_text()
        tag.clear()
        if txt.strip():
            extra.append(f'defaultValue="{esc_attr(txt.strip())}"')
    if name == 'form':
        extra.append('onSubmit={(e) => e.preventDefault()}')
    if name == 'img' and not tag.has_attr('alt'):
        tag['alt'] = ''
    if name == 'iframe' and not tag.has_attr('title'):
        tag['title'] = 'map'

    jsx_name = name
    if name == 'a':
        href = tag.get('href', '')
        if href in ROUTES:
            used_imports.add('Link')
            jsx_name = 'Link'
            del tag['href']
            extra.insert(0, f'to="{ROUTES[href]}"')
        elif href.startswith('http'):
            tag['target'] = tag.get('target', '_blank')
            tag['rel'] = 'noreferrer'

    a = attrs_jsx(tag, extra)
    if name in VOID:
        return f'{pad}<{jsx_name}{a} />'

    kids = meaningful_children(tag)
    if not kids or all(is_ws(k) for k in kids):
        return f'{pad}<{jsx_name}{a}></{jsx_name}>'

    if inline or has_text(tag) or all(isinstance(k, NavigableString) for k in kids):
        inner = ''.join(render(c, 0, True) for c in kids)
        if name not in INLINE:
            inner = inner.strip()
        # inline elements keep edge spaces: JSX preserves spaces within a single line
        return f'{pad}<{jsx_name}{a}>{inner}</{jsx_name}>'

    # block layout: one child per line; keep a space between adjacent inline elements
    out = []
    prev = None
    for c in kids:
        if isinstance(c, Tag):
            if prev is not None and prev.name in INLINE and c.name in INLINE:
                between = prev.next_sibling
                ws = False
                while between is not None and between is not c:
                    if is_ws(between):
                        ws = True
                    between = between.next_sibling
                if ws and not (prev.name == 'a' and c.name == 'a' and 'SocialIcons' in cls):
                    out.append('    ' * (ind + 1) + '{" "}')
            out.append(render(c, ind + 1))
            prev = c
    body = '\n'.join(x for x in out if x)
    return f'{pad}<{jsx_name}{a}>\n{body}\n{pad}</{jsx_name}>'


def pascal(s):
    return ''.join(p.capitalize() for p in re.split(r'[^a-zA-Z0-9]+', s) if p)


def block_name(tag):
    cls = [c for c in classes(tag) if c not in ('section-padding', 'hero', 'clearfix')]
    base = cls[0] if cls else tag.name
    base = re.sub(r'^hx-', '', base)
    return pascal(base)


def norm(tag):
    return re.sub(r'\s+', ' ', str(tag)).strip()


def extract_blocks(page):
    soup = BeautifulSoup(open(os.path.join(SRC, page + '.html'), encoding='utf-8').read(), 'html.parser')
    pw = soup.select_one('div.page-wrapper')
    blocks, wrapper = [], None
    for k in pw.children:
        if not isinstance(k, Tag):
            continue
        if set(classes(k)) & SKIP:
            continue
        if set(classes(k)) & WRAPPERS:
            wrapper = ' '.join(classes(k))
            for kk in k.children:
                if isinstance(kk, Tag) and not (set(classes(kk)) & SKIP):
                    blocks.append(kk)
        else:
            blocks.append(k)
    return blocks, wrapper


# ---------------------------------------------------------------------------
section_registry = {}   # hash -> component name
name_count = {}
page_specs = {}

for page, (comp, route) in PAGES.items():
    blocks, wrapper = extract_blocks(page)
    items = []
    for b in blocks:
        if 'page-title' in classes(b):
            used_imports.clear()
            items.append(('raw', render(b, 0).strip()))
            continue
        h = hashlib.md5(norm(b).encode()).hexdigest()
        if h not in section_registry:
            base = block_name(b)
            nm, i = base, 1
            while nm in name_count:
                i += 1
                nm = f'{base}V{i}' if base[-1].isdigit() else f'{base}{i}'
            name_count[nm] = 1
            section_registry[h] = (nm, b, page)
        items.append(('sec', section_registry[h][0]))
    page_specs[page] = (comp, wrapper, items)

os.makedirs(os.path.join(OUT, 'sections'), exist_ok=True)
os.makedirs(os.path.join(OUT, 'pages'), exist_ok=True)

IMPORT_PATHS = {
    'Link': ("{ Link }", 'react-router-dom'),
    'Counter': ('Counter', '../components/Counter'),
    'TestimonialCarousel': ('TestimonialCarousel', '../components/TestimonialCarousel'),
    'ClientCarousel': ('ClientCarousel', '../components/ClientCarousel'),
    'VideoButton': ('VideoButton', '../components/VideoButton'),
    'PageTitle': ('PageTitle', '../components/PageTitle'),
}

usage = {}
for h, (nm, b, page) in section_registry.items():
    used_imports.clear()
    body = render(b, 2)
    imps = '\n'.join(f'import {IMPORT_PATHS[i][0]} from "{IMPORT_PATHS[i][1]}";' for i in sorted(used_imports))
    src = (f'{imps}\n\n' if imps else '') + f'export default function {nm}() {{\n    return (\n{body}\n    );\n}}\n'
    open(os.path.join(OUT, 'sections', nm + '.jsx'), 'w').write(src)

for page, (comp, wrapper, items) in page_specs.items():
    secs = sorted({n for t, n in items if t == 'sec'})
    imps = [f'import {s} from "../sections/{s}";' for s in secs]
    if any(t == 'raw' for t, _ in items):
        imps.insert(0, 'import PageTitle from "../components/PageTitle";')
    lines = []
    for t, n in items:
        lines.append(n if t == 'raw' else f'<{n} />')
    style = 'header-style-2' if page in ('index', 'index-2') else 'header-style-1'
    if wrapper:
        inner = '\n'.join('                ' + l for l in lines)
        body = f'            <div className="{wrapper}">\n{inner}\n            </div>'
    else:
        body = '\n'.join('            ' + l for l in lines)
    src = ('import Layout from "../components/Layout";\n' + '\n'.join(imps) +
           f'\n\nexport default function {comp}() {{\n    return (\n        <Layout headerStyle="{style}">\n{body}\n        </Layout>\n    );\n}}\n')
    open(os.path.join(OUT, 'pages', comp + '.jsx'), 'w').write(src)

json.dump({p: [n for t, n in v[2] if t == 'sec'] for p, v in page_specs.items()},
          open(os.path.join(OUT, '..', 'conversion-map.json'), 'w'), indent=2)
print('sections:', len(section_registry))
for h, (nm, b, page) in section_registry.items():
    print(f'  {nm:28s} first on {page}')
