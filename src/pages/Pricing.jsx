import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PricingSection from "../sections/PricingSection";

export default function Pricing() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Pricing" />
                <PricingSection />
            </div>
        </Layout>
    );
}
