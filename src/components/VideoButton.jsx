import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/** Play button that opens a YouTube/iframe video in a lightbox (was fancybox). */
export default function VideoButton({ href, className = "", children }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            <a
                href={href}
                className={`video-btn ${className}`.trim()}
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                }}
            >
                {children}
            </a>
            {open &&
                createPortal(
                    <div className="video-modal" onClick={() => setOpen(false)}>
                        <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
                            <button type="button" className="video-modal-close" onClick={() => setOpen(false)} aria-label="Close">
                                <i className="ti-close"></i>
                            </button>
                            <iframe src={href} title="video" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}
