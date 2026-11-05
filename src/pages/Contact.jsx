import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ContactAreaS2 from "../sections/ContactAreaS2";
import ContactGridArea from "../sections/ContactGridArea";

export default function Contact() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Contact" />
                <ContactAreaS2 />
                <ContactGridArea />
            </div>
        </Layout>
    );
}
