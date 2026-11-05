import { Link } from "react-router-dom";
import { footerServices, recentPosts, socials } from "../data/footer";

export default function Footer() {
    return (
        <div className="hx-site-footer-area">
            <div className="hx-site-footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 footer-t">
                            <div className="hx-site-footer-text">
                                <div className="hx-site-logo">
                                    <img src="/assets/images/logo.png" alt="" />
                                </div>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                <div className="social">
                                    <ul className="d-flex">
                                        {socials.map((s) => (
                                            <li key={s.icon}>
                                                <a href={s.href}>
                                                    <i className={`fa ${s.icon}`} aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 footer-t">
                            <div className="hx-site-footer-link">
                                <h3>Recent post</h3>
                                <div className="hx-latest-section">
                                    <div className="posts">
                                        {recentPosts.map((p, i) => (
                                            <div className="post" key={i}>
                                                <div className="img-holder">
                                                    <img src={p.img} alt="" />
                                                </div>
                                                <div className="details">
                                                    <p>{p.title}</p>
                                                    <span>{p.date}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 footer-t">
                            <div className="hx-site-footer-adress">
                                <h3>Address</h3>
                                <div className="adress-section">
                                    <ul>
                                        <li>Head Office Address</li>
                                        <li>121 King Street, Melbourne West, </li>
                                        <li>Australia</li>
                                    </ul>
                                    <ul className="ad">
                                        <li><span>Phone:</span> 888 123-4587</li>
                                        <li><span>Email:</span> info@example.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 footer-t">
                            <div className="hx-site-footer-service">
                                <h3>Services</h3>
                                <div className="service-section">
                                    <ul>
                                        {footerServices.map((s) => (
                                            <li key={s}>{s}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hx-site-footer-bottom">
                <div className="container">
                    <div className="hx-site-footer-bottom-content">
                        <div className="row">
                            <div className="col-12">
                                <span>Privacy Policy | © {new Date().getFullYear()} <Link to="/">Motonic</Link> All rights reserved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
