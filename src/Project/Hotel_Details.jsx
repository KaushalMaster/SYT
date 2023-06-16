import React from 'react';
import Header from './Header';
import './css/Hotal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign, faStar } from '@fortawesome/free-solid-svg-icons';

function Hotel_Details(props) {
    return (
        <>
            <Header/>

    {/*  <!----------------------------------------------- image section ---------------------------------------------> */}

    <section class="pt-5">
        <div class="container">
            <div class="row text-center">
                <div class="col-4  ">
                    <div class="header-images sea-image">
                        <img src="/Rectangle 421.png" alt="" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-4  ">
                    <div class="row g-3">
                        <div class="col-6">
                            <div>
                                <img src="/Rectangle 429.png" alt="" class="img-fluid"/>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <img src="/Rectangle 425.png" alt="" class="img-fluid"/>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <img src="/Rectangle 427.png" alt="" class="img-fluid"/>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <img src="/Rectangle 428.png" alt="" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4  ">
                    <div class="coconut">
                        <img src="/Rectangle 424.png" alt="" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="my-4">
        <div class="container">
            <div class="row border rounded px-4 pb-1 pt-2 text-center gx-2">
                <div class="col-6 Overview">
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="#">Overview</a>
                        <a href="#" class="d-lg-block d-md-none d-none">Rooms </a>
                        <a href="#" class="d-lg-block d-md-none d-none">Facilities</a>
                        <a href="#" class="d-lg-block d-md-none d-none">Location</a>
                        <a href="#" class="d-lg-block d-md-none d-none">Policies</a>
                    </div>
                </div>
                <div class="col-6 rupees text-end">
                    <span>from</span>
                    <h4 class="d-inline ms-1"><i class="fa-solid fa-indian-rupee-sign"></i> 5699</h4>
                </div>
            </div>
        </div>
    </section>

    {/* <!---------------------------------------- center ---------------------------------------------> */}

    <section>
        <div class="container">
            <div class="row gx-3">
                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div class="rose-valley">
                        <div>
                            <div>
                                <div
                                    class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column">
                                    <div class="me-4">
                                        <h4 class="m-0 text-start">Rose Valley Resort</h4>
                                    </div>
                                    <div class="d-flex">
                                        <div>
                                            <FontAwesomeIcon icon={faStar} style={{color:'yellow'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color:'yellow'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color:'yellow'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color:'yellow'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color:'#DDDDD'}}/>
                                        </div>
                                    </div>
                                          
                                    </div>
                                </div>
                                <p class="mt-2 pb-3 border-bot">Rangali, Betul, Salcete, Cavelossim, Goa, India, 403723
                                </p>
                            </div>
                            <div class="rose-paragraph">
                                <p>The car parking and the Wi-Fi are always free, so you can stay in touch and come and
                                    go
                                    as you please. Conveniently situated in the Cavelossim part of Goa, this property
                                    puts
                                    you close to attractions and interesting dining options. Don't leave before paying a
                                    visit to the famous Baga Beach. Rated with 5 stars, this high-quality property
                                    provides
                                    guests with access to massage, restaurant and hot tub on-site.</p>
                            </div>
                        </div>
                        <div class="highlights my-4">
                            <div class="me-4 mb-3">
                                <h4 class="m-0">highlights</h4>
                            </div>
                            <div class="d-flex justify-content-between text-center">
                                <div>
                                    <img src="/desk.png" alt="" class="img-fluid"/>
                                    <p>Front desk (24hrs)</p>
                                </div>
                                <div>
                                    <img src="/Dining.png" alt="" class="img-fluid"/>
                                    <p>Quality food & seating</p>
                                </div>
                                <div>
                                    <img src="/transfer.png" alt="" class="img-fluid"/>
                                    <p>Airport transportation</p>
                                </div>
                                <div>
                                    <img src="/view.png" alt="" class="img-fluid"/>
                                    <p>Excellent view</p>
                                </div>
                                <div>
                                    <img src="/Beach.png" alt="" class="img-fluid"/>
                                    <p>Nearby beach</p>
                                </div>
                            </div>
                        </div>
                        <div class="delux-room">
                            <div class="d-xl-flex d-lg-flex d-md-flex d-sm-block">
                                <div class="text-center">
                                    <img src="/Rectangle 450.png" alt="" class="img-fluid rounded"/>
                                </div>
                                <div class="facilities">
                                    <ul class="mb-1">
                                        <li>
                                            <h5>Deluxe Room</h5>
                                        </li>
                                        <li>Free Wi-Fi</li>
                                        <li>Bathroom</li>
                                        <li>24-hour Housekeeping</li>
                                        <li>Air Conditioning</li>
                                        <li>Mineral Water</li>
                                    </ul>
                                    <h2 class=" mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-1">
                                    <FontAwesomeIcon icon={faIndianRupeeSign}/>5699 <span>pernight</span></h2>
                                    <div class="book-now">
                                        <a href="#">Book Now</a>
                                        <a href="#">More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="amenities my-4">
                            <h5 class="ps-2">Amenities and facilities</h5>
                            <div class="row px-4">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <h6 class="mb-1">Languages spoken</h6>
                                    <ul class="mb-1">
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Russian</li>
                                    </ul>
                                    <h6 class="mb-1">Outdoor</h6>
                                    <ul class="mb-1">
                                        <li>Bicycles</li>
                                    </ul>
                                    <h6 class="mb-1">Accessibility</h6>
                                    <ul class="mb-1">
                                        <li>Wheelchair accessible</li>
                                    </ul>
                                    <h6 class="mb-1">Internet access</h6>
                                    <ul class="mb-1">
                                        <li>Free Wi-Fi In All Rooms!</li>
                                        <li>Internet</li>
                                        <li>Internet Services</li>
                                        <li>Wi-Fi i public areas</li>
                                    </ul>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 antiviral">
                                    <h6>Cleanliness and safety</h6>
                                    <ul class="mb-1">
                                        <li class="mb-1">Anti-viral cleaning products</li>
                                        <li class="mb-1">Body thermometer</li>
                                        <li class="mb-1">Cashless payment service</li>
                                        <li class="mb-1">Daily disinfection in all rooms</li>
                                        <li class="mb-1">Daily disinfection in common areas</li>
                                        <li class="mb-1">Doctor/nurse on call</li>
                                        <li class="mb-1">Face coverings on staff</li>
                                        <li class="mb-1">First aid kit</li>
                                        <li class="mb-1">Free face masks</li>
                                    </ul>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <h6>For the kids</h6>
                                    <ul>
                                        <li class="mb-1">Babysitting service</li>
                                        <li class="mb-1">Family room</li>
                                        <li class="mb-1">Kids club</li>
                                        <li class="mb-1">Kids meal</li>
                                        <li class="mb-1">Playground</li>
                                        <li class="mb-1">Swimming pool [kids]</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="availibility">
                            <h4>Check Availability</h4>
                            <input type="text" name="" id="" class="mb-3"/>
                            <label for="text" class="d-block">Check-in date</label>
                            <input type="text" name="" id="" class="mb-3"/>
                            <label for="text" class="d-block">Check-out date</label>
                            <input type="text" name="" id="" class="mb-3"/>
                            <div class="row text-center mb-4">
                                <div class="col-4">
                                    <label for="select">Adult</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>0</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="select">Children</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>0</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="select">infants</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>0</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="available-search mb-2">
                                <a href="#">Search</a>
                            </div>
                        </div>
                        <div class="very-good mt-4">
                            <div>
                                <h3>4.7 Very good</h3>
                                <p>513 reviews</p>
                            </div>
                            <div class="gautam">
                                <p class="mb-4">"Clean and natural environment around the property.Clean and natural
                                    environment around the property. "Clean and natural environment around the
                                    property."
                                </p>
                                <div>
                                    <img src="assets/Ellipse 153.png" alt="" class="img-fluid"/><span class="ms-2">Gautam
                                        Shah</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    {/* <!---------------------------------------- map -------------------------------------------> */}

    <section class="py-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4>Location</h4>
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14679.318158995673!2d72.62694345!3d23.10333505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682427549633!5m2!1sen!2sin"
                        width="100%" height="450" style={{border: '0' , borderRadius: '10px'}} allowfullscreen=""
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d53847.619112712244!2d72.64224071165977!3d23.09424437056074!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682573990219!5m2!1sen!2sin"
                         width="100%" height="450" style={{borderRadius:'10px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                </div>
            </div>
        </div>
    </section>

    {/* <!------------------------------- footer ----------------------------------------> */}

    <section class="my-4">
        <div class="container">
            <div class="row foot-center">
                <div class="col footer">
                    <div class="foot">
                        <div class="footer-head">
                            <h5 class="mb-5">Property policies</h5>
                            <h6 class="mb-3">Children and extra beds</h6>
                            <p>Extra beds are dependent on the room you choose. Please check the individual room
                                capacity for more details.</p>
                        </div>
                        <div class="row gx-3">
                            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 pt-3">
                                <div class="box">
                                    <div class="mb-3">
                                        <h5 class="pb-2">Infant 0-2 year</h5>
                                    </div>
                                    <div>
                                        <h6 class="mb-3">Stay for free if using existing bedding.</h6>
                                        <p>Baby cot/crib available upon request</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 pt-3">
                                <div class="box">
                                    <div class="mb-3">
                                        <h5 class="pb-2">Children 3-11 year</h5>
                                    </div>
                                    <div class="pb-3">
                                        <h6 class="mb-3">Must use an extra bed</h6>
                                        <p>Baby cot/crib available upon request</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 pt-3">
                                <div class="box">
                                    <div class="mb-3">
                                        <h5 class="pb-2">Adults 12 & above</h5>
                                    </div>
                                    <div class="pb-5">
                                        <p>Baby cot/crib available upon request</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="others mt-3">
                            <h5>Others</h5>
                            <ul>
                                <li>The property does not permit food and beverages from outside.</li>
                                <li>When booking more than 5 rooms, different policies and additional supplements may
                                    apply.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    );
}

export default Hotel_Details;