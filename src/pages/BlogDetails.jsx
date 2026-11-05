import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import BlogSingleSection from "../sections/BlogSingleSection";

export default function BlogDetails() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Latest News" crumb="Blog" />
                <BlogSingleSection />
            </div>
        </Layout>
    );
}
