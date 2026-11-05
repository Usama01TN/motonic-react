import Counter from "../components/Counter";

export default function FunFactSectionS2() {
    return (
        <div className="fun-fact-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fun-fact-grids">
                            <div className="grid">
                                <div className="hx-counter-icon">
                                    <i className="fi flaticon-worker"></i>
                                </div>
                                <div>
                                    <h2><Counter value="300" />+</h2>
                                </div>
                                <p>Expert Technicians</p>
                            </div>
                            <div className="grid">
                                <div className="hx-counter-icon">
                                    <i className="fi flaticon-employee"></i>
                                </div>
                                <div>
                                    <h2>
                                        <Counter value="1026" />
                                    </h2>
                                </div>
                                <p>Satisfied Client</p>
                            </div>
                            <div className="grid">
                                <div className="hx-counter-icon">
                                    <i className="fi flaticon-business-and-finance"></i>
                                </div>
                                <div>
                                    <h2><Counter value="25" />+</h2>
                                </div>
                                <p>Years Experience</p>
                            </div>
                            <div className="grid">
                                <div className="hx-counter-icon">
                                    <i className="fi flaticon-car"></i>
                                </div>
                                <div>
                                    <h2>
                                        <Counter value="3215" />
                                    </h2>
                                </div>
                                <p>Compleate Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
