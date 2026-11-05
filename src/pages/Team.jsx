import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import TeamArea from "../sections/TeamArea";

export default function Team() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Team" />
                <TeamArea />
            </div>
        </Layout>
    );
}
