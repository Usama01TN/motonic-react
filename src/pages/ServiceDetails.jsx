import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ServiceDtArea from "../sections/ServiceDtArea";

export default function ServiceDetails() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Our Services" crumb="Services" />
                <ServiceDtArea />
            </div>
        </Layout>
    );
}
