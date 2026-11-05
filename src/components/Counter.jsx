import { useEffect, useRef, useState } from "react";

/**
 * Animated number that counts up when scrolled into view
 * (replaces jquery.appear + odometer). `value` may contain a suffix like "300+".
 */
export default function Counter({ value, duration = 2000 }) {
    const target = parseInt(String(value).replace(/[^\d]/g, ""), 10) || 0;
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        let frame;
        const run = () => {
            const start = performance.now();
            const step = (now) => {
                const p = Math.min((now - start) / duration, 1);
                setCount(Math.round(target * (1 - Math.pow(1 - p, 3))));
                if (p < 1) frame = requestAnimationFrame(step);
            };
            frame = requestAnimationFrame(step);
        };
        if (!("IntersectionObserver" in window)) {
            setCount(target);
            return undefined;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    run();
                    io.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => {
            io.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [target, duration]);

    return (
        <span className="odometer odometer-auto-theme" ref={ref}>
            {count}
        </span>
    );
}
