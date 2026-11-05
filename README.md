# Motonic (HelloExpert) — React template

The Motonic car repair HTML template, converted to a **React 18 + Vite** project
with React Router. Every original page is a route, the repeated markup is split into
reusable components, and all the jQuery behaviour has been rewritten in React
(no jQuery, Bootstrap JS, Owl Carousel or Fancybox).

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build
```

## Routes

| Original file          | Route               | Page component        |
| ---------------------- | ------------------- | --------------------- |
| index.html             | `/`                 | `pages/HomeOne`       |
| index-2.html           | `/home-2`           | `pages/HomeTwo`       |
| index-3.html           | `/home-3`           | `pages/HomeThree`     |
| about.html             | `/about`            | `pages/About`         |
| services.html          | `/services`         | `pages/Services`      |
| service-details.html   | `/service-details`  | `pages/ServiceDetails`|
| Pricing.html           | `/pricing`          | `pages/Pricing`       |
| team.html              | `/team`             | `pages/Team`          |
| testimonials.html      | `/testimonials`     | `pages/Testimonials`  |
| blog.html              | `/blog`             | `pages/Blog`          |
| blog-grid.html         | `/blog-grid`        | `pages/BlogGrid`      |
| blog-details.html      | `/blog-details`     | `pages/BlogDetails`   |
| contact.html           | `/contact`          | `pages/Contact`       |
| 404.html               | `/404` and any unknown URL | `pages/NotFound` |

## Project structure

```
public/assets/        images + icon fonts from the template (served as /assets/...)
src/
  main.jsx            entry: router + global CSS imports
  App.jsx             route table
  components/         Layout, Header, Footer, PageTitle, Preloader, BackToTop,
                      ScrollToTop, Counter, TestimonialCarousel, ClientCarousel, VideoButton
  sections/           page sections (hero, about, services, pricing, team, blog, contact…)
  pages/              one component per page, composed from sections
  data/               menu.js, footer.js, site.js — edit content here
  hooks/              useContactForm (validation + submit)
  styles/             original template CSS + react-overrides.css
scripts/html-to-jsx.py  the converter used to turn the HTML into JSX (for reference)
```

### Editing content

Most repeated content is data-driven:

- **Navigation** — `src/data/menu.js` (nested `children` become dropdowns)
- **Services, pricing, team, testimonials, blog cards, client logos** — `src/data/site.js`
- **Footer** — `src/data/footer.js`

Sections with one-off content (heroes, about blocks, service details, blog posts,
contact info) are plain JSX in `src/sections/`.

Reusable sections take a variant prop instead of being duplicated:

```jsx
<ServiceSection variant="service-style-3" />
<PricingSection variant={2} />            // icon column layout from Home 3
<TestimonialArea variant="hx-testimonial-area-2" />
<BlogSection posts={gridPosts} showTitle={false} showExcerpt />
<Layout headerStyle="header-style-2">     // transparent header used on Home 1 & 2
```

## What replaced the jQuery plugins

| Original (jQuery)                     | React version                                   |
| ------------------------------------- | ----------------------------------------------- |
| Mobile menu toggle / slide submenus   | `Header` state (drawer + per-item toggles ≤991px)|
| Cloned sticky header on scroll-up     | `Header` renders a second nav with `sticky-on`  |
| Header search overlay                 | `Header` state                                  |
| Bootstrap `data-toggle="tab"` pricing | `PricingSection` state                          |
| Owl Carousel (testimonials, logos)    | `react-slick` (same settings & dot styling)     |
| Odometer + jquery.appear counters     | `Counter` (IntersectionObserver count-up)       |
| Fancybox video popup                  | `VideoButton` lightbox                          |
| jquery.validate + AJAX to mail.php    | `useContactForm` hook                           |
| Preloader fadeOut, back-to-top        | `Preloader`, `BackToTop`                        |

### Contact form

The forms validate with the same rules and messages as the original. To actually
send messages, create a `.env` file:

```
VITE_CONTACT_ENDPOINT=https://your-backend.example.com/contact
```

The form is POSTed there as `FormData`. Without it, the form runs in demo mode and
just shows the "Thank you" message.

## Notes

- Asset paths are absolute (`/assets/...`). If you deploy under a sub-path, set
  `base` in `vite.config.js` and update the paths, or serve from the domain root.
- For deep links to work on a static host, configure a fallback to `index.html`
  (e.g. Netlify `_redirects`: `/* /index.html 200`).
- One invalid CSS declaration in the original `style.css` was commented out so the
  build passes; rendering is unchanged.
