import useContactForm, { FieldError } from "../hooks/useContactForm";

export default function ContactArea() {
    const { onSubmit, errors, status, clearError } = useContactForm();

    return (
        <div className="hx-contact-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-md-7 col-sm-12 col-12">
                        <div className="hx-contact-content">
                            <h2>Book An Appointment</h2>
                            <div className="hx-contact-form">
                                <form method="post" className="contact-validation-active" id="hx-contact-form" noValidate onSubmit={onSubmit} onChange={clearError}>
                                    <div className="half-col">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                        <FieldError message={errors.name} />
                                    </div>
                                    <div className="half-col">
                                        <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone" />
                                        <FieldError message={errors.phone} />
                                    </div>
                                    <div className="half-col">
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                                        <FieldError message={errors.email} />
                                    </div>
                                    <div className="half-col">
                                        <select name="address" id="address" className="form-control" defaultValue="">
                                            <option disabled value="">Tires Replacement</option>
                                            <option>Transmission</option>
                                            <option>Diagnostic</option>
                                            <option>Batteries</option>
                                            <option>Breaks</option>
                                        </select>
                                        <FieldError message={errors.address} />
                                    </div>
                                    <div>
                                        <textarea className="form-control" name="note" id="note" placeholder="Description..."></textarea>
                                    </div>
                                    <div className="submit-btn-wrapper">
                                        <button type="submit" className="theme-btn-s4">Send Message</button>
                                        <div id="loader" className={status === "sending" ? "is-visible" : ""}>
                                            <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                        </div>
                                    </div>
                                    <div className="clearfix error-handling-messages">
                                        <div id="success" className={status === "success" ? "is-visible" : ""}>Thank you</div>
                                        <div id="error" className={status === "error" ? "is-visible" : ""}>Error occurred while sending email. Please try again later.</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="hx-contact-img">
                            <img src="/assets/images/contact/img-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
