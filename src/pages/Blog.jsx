import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import BlogPgSection from "../sections/BlogPgSection";

export default function Blog() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Latest News" crumb="Blog" />
                <BlogPgSection />
            </div>
        </Layout>
    );
}
