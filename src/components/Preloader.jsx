import { useEffect, useState } from "react";

/** Ripple preloader that fades out once the page has mounted (was jQuery fadeOut). */
export default function Preloader() {
    const [state, setState] = useState("visible"); // visible -> fading -> hidden

    useEffect(() => {
        const t1 = setTimeout(() => setState("fading"), 100);
        const t2 = setTimeout(() => setState("hidden"), 600);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    if (state === "hidden") return null;
    return (
        <div className={`preloader${state === "fading" ? " is-fading" : ""}`}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
