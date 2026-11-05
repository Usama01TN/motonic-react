import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import BlogSection from "../sections/BlogSection";
import { gridPosts } from "../data/site";

export default function BlogGrid() {
    return (
        <Layout>
            <div className="service-page-style">
                <PageTitle title="Blog Grid" />
                <BlogSection posts={gridPosts} showTitle={false} showExcerpt />
            </div>
        </Layout>
    );
}
