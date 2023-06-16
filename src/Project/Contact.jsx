import React from 'react';
import { Container } from 'react-bootstrap';
import './css/index1.css'

function Contact(props) {
    return (
        <>
   <section>
        <Container>
            <div>
                <div classname="contact-us-form">
                    <img src="/contact.png" alt="" className='img-fluid'/>
                    <div classname="Cont-Us">
                        <h1 classname="Cont-Us"><span className='text-white'>Contact</span> <br/> us</h1>
                    </div>
                </div>
                <div classname="d-flex">
                    <div classname="w-50 p-xl-5 p-lg-4 p-md-3 p-sm-1 life-short">
                        <div classname="text-center">
                            <img src="contact1.png" alt="" classname="img-fluid"/>
                        </div>

                        {/* <!-- font family need to change --> */}

                        <h6 classname="is-short mt-3">LIFE <span>---------</span><br/>
                            IS SHORT <br/>
                            BOOK A TRIP
                        </h6>
                    </div>
                    <div classname="w-50 p-xl-5 p-lg-4 p-md-3 p-sm-1  contact-location">
                        <div classname="d-flex">
                            <div classname="me-2"><i classname="fa-solid fa-location-dot"></i></div>
                            <div>
                                <h6>Company Address</h6>
                                <p>22 Cradle, EDII,Gandhinagar - Ahmedabad Rd,Next to Apollo<br/> Hospital,Bhat,
                                    Ahmedabad, Gujarat 382428</p>
                            </div>
                        </div>
                        <div classname="d-flex">
                            <div classname="me-2"><i classname="fa-solid fa-phone"></i></div>
                            <div>
                                <h6>Contact Number</h6>
                                <p>99999 99999</p>
                            </div>
                        </div>
                        <div classname="d-flex">
                            <div classname="me-2"><i classname="fa-solid fa-envelope"></i></div>
                            <div>
                                <h6>Customer Email ID</h6>
                                <p>info@webearl.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    </section>
    <section classname="py-4">
        <Container>
            <div classname="row">
                <div classname="col-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14679.318158995673!2d72.62694345!3d23.10333505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682427549633!5m2!1sen!2sin"
                        width="100%" height="450"  style={{border:'0' , borderRadius:'10px'}} allowfullscreen=""
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                </div>
            </div>
        </Container>
    </section>
        </>
    );
}

export default Contact;