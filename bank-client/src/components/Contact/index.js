import React from 'react'
import Email from '../../images/email.png'
import Phone from '../../images/phone.png'
import Pin from '../../images/pin.png'

export default function Contact() {
    return (
        <div className="third">
            <div className="section-title mb-5">
                <h6 className="crete">Get In Touch</h6>
                <h2 className="crete">Contact Us</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                    <div className="custom-form">
                        <form className="contact-form" name="contact-form" id="c_form">
                            <div className="form-row">
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Your name..." required="" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Your email..." required="" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12">
                                    <div className="form-group">
                                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Your subject..." required="" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" cols="30" rows="5" placeholder="Your message..."></textarea>
                                    </div>
                                </div>
                                <div className="form-message"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="contact-item d-flex">
                        <img src={Email} alt="email" className="contact-png" />
                        <div className="contact-content">
                            <h5 className="crete">Email Address:</h5>
                            <h6 className="text-muted">dungarwalmayank6@gmail.com</h6>
                        </div>
                    </div>
                    <div className="contact-item d-flex">
                        <img src={Phone} alt="phone" className="contact-png" />
                        <div className="contact-content">
                            <h5 className="crete">Phone No:</h5>
                            <h6 className="text-muted">+91 12345 67890 , +91 19283 74465</h6>
                        </div>
                    </div>
                    <div className="contact-item d-flex">
                        <img src={Pin} alt="location" className="contact-png" />
                        <div className="contact-content">
                            <h5 className="crete">Office Address:</h5>
                            <h6 className="text-muted">123 sector 24, Chandigarh, India, 123456</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <button className="btn-submit crete" type="submit">Submit</button>
            </div>
        </div>
    )
}
