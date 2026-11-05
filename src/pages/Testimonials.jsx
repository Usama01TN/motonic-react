import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import TestimonialArea from "../sections/TestimonialArea";

export default function Testimonials() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Testimonials" />
                <TestimonialArea variant="hx-testimonial-area-2" />
            </div>
        </Layout>
    );
}
