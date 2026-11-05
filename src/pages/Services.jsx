import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ServiceSection from "../sections/ServiceSection";
import PricingSection from "../sections/PricingSection";
import TestimonialArea from "../sections/TestimonialArea";

export default function Services() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Our Services" crumb="Services" />
                <ServiceSection variant="service-style-3" />
                <PricingSection />
                <TestimonialArea variant="hx-testimonial-area-2" />
            </div>
        </Layout>
    );
}
