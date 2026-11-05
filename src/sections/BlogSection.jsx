import { Link } from "react-router-dom";
import { gridPosts, latestPosts } from "../data/site";

/**
 * Blog card grid.
 * Home pages: <BlogSection /> (title + 3 latest posts)
 * Blog grid page: <BlogSection posts={gridPosts} showTitle={false} showExcerpt />
 */
export default function BlogSection({ posts = latestPosts, showTitle = true, showExcerpt = false }) {
    return (
        <section className="blog-section section-padding">
            <div className="container">
                {showTitle && (
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s2 text-center">
                                <span>Our blog</span>
                                <h2>Latest News</h2>
                            </div>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids clearfix">
                            {posts.map((p, i) => (
                                <div className="grid" key={i}>
                                    <div className="entry-media">
                                        <img src={p.img} alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>
                                            <Link to={p.to}>{p.title}</Link>
                                        </h3>
                                        {showExcerpt && <p>{p.excerpt}</p>}
                                        <ul className="entry-meta">
                                            <li><img src={p.authorImg} alt="" /> By <a href="#">{p.author}</a></li>
                                            <li>{p.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
