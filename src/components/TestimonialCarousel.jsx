import Slider from "react-slick";

/** Single-item autoplay testimonial slider with dots (was owlCarousel). */
export default function TestimonialCarousel({ className = "", children }) {
    const settings = {
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider className={className} {...settings}>
            {children}
        </Slider>
    );
}
