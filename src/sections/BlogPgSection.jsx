import VideoButton from "../components/VideoButton";

export default function BlogPgSection() {
    return (
        <section className="blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-md-8">
                        <div className="blog-posts clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src="/assets/images/blog/img-7.jpg" alt="" />
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li><img src="/assets/images/blog/author.jpg" alt="" /> By <a href="#">Lily Anne</a></li>
                                        <li>Octobor 12,2018</li>
                                    </ul>
                                    <h3>
                                        <a href="#">How to get more traffic in your website</a>
                                    </h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                                    <a href="#" className="read-more">Read More..</a>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src="/assets/images/blog/img-8.jpg" alt="" />
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li><img src="/assets/images/blog/author.jpg" alt="" /> By <a href="#">Lily Anne</a></li>
                                        <li>Octobor 12,2018</li>
                                    </ul>
                                    <h3>
                                        <a href="#">25 Rules to be successful in your business.</a>
                                    </h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                                    <a href="#" className="read-more">Read More..</a>
                                </div>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src="/assets/images/blog/img-9.jpg" alt="" />
                                    {" "}
                                    <VideoButton href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1"><i className="ti-control-play"></i></VideoButton>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li><img src="/assets/images/blog/author.jpg" alt="" /> By <a href="#">Lily Anne</a></li>
                                        <li>Octobor 12,2018</li>
                                    </ul>
                                    <h3>
                                        <a href="#">SEO can be the best solution for your business problems.</a>
                                    </h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                                    <a href="#" className="read-more">Read More..</a>
                                </div>
                            </div>
                            <div className="post format-quote">
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li><img src="/assets/images/blog/author.jpg" alt="" /> By <a href="#">Lily Anne</a></li>
                                        <li>Octobor 12,2018</li>
                                    </ul>
                                    <h3>
                                        <a href="#">25 Rules to be successful in your business.</a>
                                    </h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                                    <a href="#" className="read-more">Read More..</a>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src="/assets/images/blog/img-10.jpg" alt="" />
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li><img src="/assets/images/blog/author.jpg" alt="" /> By <a href="#">Lily Anne</a></li>
                                        <li>Octobor 12,2018</li>
                                    </ul>
                                    <h3>
                                        <a href="#">How to get more traffic in your website</a>
                                    </h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                                    <a href="#" className="read-more">Read More..</a>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <a href="#" aria-label="Previous">
                                            <i className="ti-arrow-left"></i>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-label="Next">
                                            <i className="ti-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="blog-sidebar">
                            <div className="widget search-widget">
                                <h3>Search</h3>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        {" "}
                                        <button type="submit">
                                            <i className="ti-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="widget category-widget">
                                <h3>Categories</h3>
                                <ul>
                                    <li>
                                        <a href="#">Engine Repair</a>
                                    </li>
                                    <li>
                                        <a href="#">Tires Replacement</a>
                                    </li>
                                    <li>
                                        <a href="#">Transmission</a>
                                    </li>
                                    <li>
                                        <a href="#">Diagnostic</a>
                                    </li>
                                    <li>
                                        <a href="#">Bateries Replacement</a>
                                    </li>
                                    <li>
                                        <a href="#">Break Repair</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget recent-post-widget">
                                <h3>Recent post</h3>
                                <div className="posts">
                                    <div className="post">
                                        <div className="img-holder">
                                            <img src="/assets/images/recent-posts/img-1.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h4>
                                                <a href="#">Actual teachings of the great explorer of the truth.</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="post">
                                        <div className="img-holder">
                                            <img src="/assets/images/recent-posts/img-2.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h4>
                                                <a href="#">The truth, the master-builder of human happiness</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="post">
                                        <div className="img-holder">
                                            <img src="/assets/images/recent-posts/img-3.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h4>
                                                <a href="#">Explorer of the truth, the master-builder of human happiness</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget tag-widget">
                                <h3>Tags</h3>
                                <ul>
                                    <li>
                                        <a href="#">Repair</a>
                                    </li>
                                    <li>
                                        <a href="#">Tires</a>
                                    </li>
                                    <li>
                                        <a href="#">Car</a>
                                    </li>
                                    <li>
                                        <a href="#">Replacement</a>
                                    </li>
                                    <li>
                                        <a href="#">Online</a>
                                    </li>
                                    <li>
                                        <a href="#">clean</a>
                                    </li>
                                    <li>
                                        <a href="#">Break</a>
                                    </li>
                                    <li>
                                        <a href="#">Batery</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
