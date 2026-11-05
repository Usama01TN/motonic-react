import Slider from "react-slick";

/** Partner / client logo carousel (was owlCarousel "Gift-carousel"). */
export default function ClientCarousel({ className = "", children }) {
    const settings = {
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1080, settings: { slidesToShow: 4 } },
            { breakpoint: 760, settings: { slidesToShow: 2 } },
        ],
    };
    return (
        <Slider className={className} {...settings}>
            {children}
        </Slider>
    );
}
