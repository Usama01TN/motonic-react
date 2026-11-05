import { useState } from "react";
import { services } from "../data/site";

const PRICING_TEXT = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered";

/**
 * Tabbed "Services Packages" (replaces Bootstrap's data-toggle="tab").
 * variant 1: icons above the card (home 1, services, pricing)
 * variant 2: icons on the left, short text (home 3)
 */
export default function PricingSection({ variant = 1 }) {
    const [active, setActive] = useState(0);
    const isTwo = variant === 2;

    return (
        <div className={isTwo ? "pricing-section-2" : "pricing-section"}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title-s2 text-center">
                        <span>Best Pricing Plan</span>
                        <h2>Services Packages</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tabs-site-button">
                            <div className="row pricing-tabs">
                                <div className={isTwo ? "col-md-4 col-sm-4 col-12" : "col-md-12 col-12"}>
                                    <ul className="nav nav-tabs">
                                        {services.map((s, i) => (
                                            <li key={s.icon} className={`pricing-content-${i + 1}${active === i ? " active" : ""}`}>
                                                <a
                                                    href={`#pricing-${i}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setActive(i);
                                                    }}
                                                >
                                                    <i className={`fi ${s.icon}`}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={isTwo ? "col-md-8 col-sm-8 col-12" : "col-md-12 col-12"}>
                                    <div className="tab-content">
                                        {services.map((s, i) => (
                                            <div key={s.icon} id={`pricing-${i}`} className={`tab-pane${active === i ? " active" : ""}`}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <div className="pricing-wrap">
                                                            <div className="pricing-single">
                                                                <div className={i === 0 ? "pricing-img" : `pricing-img-${i + 1}`}>
                                                                    <div className={i === 0 ? "pricing-text" : `pricing-text-${i}`}>
                                                                        <span><small>$</small>{s.price}</span>
                                                                        <h4>
                                                                            <a href="#">{s.pricingTitle || s.title}</a>
                                                                        </h4>
                                                                        <p>{isTwo ? "Full Services" : PRICING_TEXT}</p>
                                                                    </div>
                                                                    <img src="/assets/images/pricing/img-1.png" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
