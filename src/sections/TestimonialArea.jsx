import TestimonialCarousel from "../components/TestimonialCarousel";
import { testimonials } from "../data/site";

/** variant: "hx-testimonial-area" (home 2) | "hx-testimonial-area-2" (services, testimonials) */
export default function TestimonialArea({ variant = "hx-testimonial-area" }) {
    return (
        <div className={variant}>
            <div className="container">
                <TestimonialCarousel className="hx-testimonial-active">
                    {testimonials.map((t, i) => (
                        <div className="hx-testimonial-wrap" key={i}>
                            <div className="hx-testimonial-item">
                                <div className="hx-testimonial-icon">
                                    <i className="fi flaticon-writer"></i>
                                </div>
                                <div className="hx-testimonial-content">
                                    <p>{t.text}</p>
                                </div>
                                <div className="hx-testimonial-img">
                                    <img src={t.img} alt={t.name} />
                                </div>
                                <div className="hx-testimonial-content">
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </TestimonialCarousel>
            </div>
        </div>
    );
}
