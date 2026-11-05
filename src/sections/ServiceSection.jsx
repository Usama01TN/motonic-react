import { services } from "../data/site";

/** "Our Services" grid. variant: "service-style-1" (default) | "service-style-3" */
export default function ServiceSection({ variant = "service-style-1" }) {
    return (
        <div className={`${variant} section-padding`}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title-s2 text-center">
                        <span>What We Do</span>
                        <h2>Our Services</h2>
                    </div>
                </div>
                <div className="row">
                    {services.map((s) => (
                        <div className="col-md-4 col-sm-6" key={s.title}>
                            <div className="service-wrap">
                                <div className={s.iconClass}>
                                    <i className={`fi ${s.icon}`}></i>
                                </div>
                                <div className="service-text">
                                    <h2>{s.title}</h2>
                                    <p>{s.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
