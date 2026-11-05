import { useEffect, useState } from "react";

/** Floating "back to top" button, shown after scrolling 1000px. */
export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 1000);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <a href="#" className={`back-to-top${visible ? " is-visible" : ""}`} onClick={toTop}>
            <i className="ti-arrow-up"></i>
        </a>
    );
}
