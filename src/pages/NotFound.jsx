import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Error404Section from "../sections/Error404Section";

export default function NotFound() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="404" />
                <Error404Section />
            </div>
        </Layout>
    );
}
