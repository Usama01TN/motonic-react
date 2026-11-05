import { Link } from "react-router-dom";

/** Inner-page banner with breadcrumb. */
export default function PageTitle({ title, crumb }) {
    return (
        <section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>{title}</h2>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>{crumb || title}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
