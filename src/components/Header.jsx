import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import menu from "../data/menu";

const SMALL_NAV_MAX = 991;

function useIsSmallNav() {
    const get = () => typeof window !== "undefined" && window.innerWidth <= SMALL_NAV_MAX;
    const [small, setSmall] = useState(get);
    useEffect(() => {
        const onResize = () => setSmall(get());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return small;
}

function MenuLink({ item, onClick }) {
    if (item.to) {
        return (
            <Link to={item.to} onClick={onClick}>
                {item.label}
            </Link>
        );
    }
    return (
        <a href={item.href || "#"} onClick={onClick}>
            {item.label}
        </a>
    );
}

/** One <li>; on small screens dropdowns toggle open/closed instead of opening on hover. */
function MenuItem({ item, small }) {
    const [open, setOpen] = useState(false);
    const hasChildren = Boolean(item.children);

    useEffect(() => {
        if (!small) setOpen(false);
    }, [small]);

    if (!hasChildren) {
        return (
            <li>
                <MenuLink item={item} />
            </li>
        );
    }

    const toggle = (e) => {
        if (small) {
            e.preventDefault();
            e.stopPropagation();
            setOpen((v) => !v);
        } else if (!item.to) {
            e.preventDefault();
        }
    };

    return (
        <li className="menu-item-has-children">
            <MenuLink item={item} onClick={toggle} />
            <ul className="sub-menu" style={small ? { display: open ? "block" : "none" } : undefined}>
                {item.children.map((child, i) => (
                    <MenuItem key={`${child.label}-${i}`} item={child} small={small} />
                ))}
            </ul>
        </li>
    );
}

/** The <nav> block. Rendered twice: the in-flow header and the fixed sticky copy. */
function Navigation({ className, onOpenSearch, setOverlay }) {
    const small = useIsSmallNav();
    const [mobileOpen, setMobileOpen] = useState(false);

    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        setOverlay(mobileOpen);
    }, [mobileOpen, setOverlay]);

    return (
        <nav className={`navigation navbar navbar-default ${className}`}>
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="open-btn" onClick={() => setMobileOpen(true)}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">
                        <img src="/assets/images/logo.png" alt="" />
                    </Link>
                </div>
                <div
                    id="navbar"
                    className={`navbar-collapse collapse navigation-holder navbar-right${mobileOpen ? " slideInn" : ""}`}
                >
                    <button className="close-navbar" type="button" onClick={() => setMobileOpen(false)}>
                        <i className="ti-close"></i>
                    </button>
                    <ul className={`nav navbar-nav${small ? " small-nav" : ""}`}>
                        {menu.map((item, i) => (
                            <MenuItem key={`${item.label}-${i}`} item={item} small={small} />
                        ))}
                    </ul>
                </div>
                <div className="search-quote">
                    <div className="header-search-area">
                        <div>
                            <button className="btn open-btn" type="button" onClick={onOpenSearch}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default function Header({ headerStyle = "header-style-1" }) {
    const [sticky, setSticky] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const lastScroll = useRef(0);

    // Show the sticky copy when scrolling *up* after 1000px (same rule as the original script)
    useEffect(() => {
        const onScroll = () => {
            const st = window.scrollY;
            setSticky(st > 1000 && st < lastScroll.current);
            lastScroll.current = st;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Mobile drawer darkens the page via .body-overlay on .page-wrapper
    const setOverlay = useCallback((on) => {
        const wrapper = document.querySelector(".page-wrapper");
        if (wrapper) wrapper.classList.toggle("body-overlay", on);
    }, []);

    return (
        <>
            <header id="header" className={`site-header ${headerStyle}`}>
                <Navigation className="original" onOpenSearch={() => setSearchOpen(true)} setOverlay={setOverlay} />
                <Navigation
                    className={`sticky-header${sticky ? " sticky-on" : ""}`}
                    onOpenSearch={() => setSearchOpen(true)}
                    setOverlay={setOverlay}
                />
            </header>

            {searchOpen && (
                <div className="header-search-form is-open" onClick={() => setSearchOpen(false)}>
                    <form
                        className="form"
                        onClick={(e) => e.stopPropagation()}
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSearchOpen(false);
                        }}
                    >
                        <div>
                            <input type="text" className="form-control" placeholder="Search here" autoFocus />
                        </div>
                        <button type="submit" className="btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
