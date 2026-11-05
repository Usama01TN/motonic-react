import Counter from "../components/Counter";

const DEFAULT_TEXT =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. chunks as necessary suffered alteration.";

export default function FunFactSection({ text = DEFAULT_TEXT }) {
    return (
        <section className="fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12">
                        <div className="fun-fact-content">
                            <h2>Here’s Our Achivement. Lets Check it Out</h2>
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12">
                        <div className="fun-fact-grids clearfix">
                            <div className="grid">
                                <div>
                                    <h3><Counter value="300+" />+</h3>
                                </div>
                                <p>Expert Technicians</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3>
                                        <Counter value="1026" />
                                    </h3>
                                </div>
                                <p>Satisfied Client</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3><Counter value="25+" />+</h3>
                                </div>
                                <p>Years Experience</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h3>
                                        <Counter value="3215" />
                                    </h3>
                                </div>
                                <p>Compleate Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
