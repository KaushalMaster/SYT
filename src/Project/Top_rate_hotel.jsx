import React from 'react';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign , faStar , faLocationPin } from '@fortawesome/free-solid-svg-icons';
import "./css/index1.css";

function Top_rate_hotel(props) {
    return (
        <>
            <Header/>
            <section>
                <Container>
                    <div className='py-4 text-center'>
                        <h4 className='mb-0'>Top rated hotels in Alberta</h4>
                        <p className='top_text'>These are the top-rated hotels on our list for your Alberta vacation</p>
                    </div>

                    <div className='top-border p-4 my-2'>
                        <div className='row gx-5'>
                            <div className='col-lg-4 col-md-5 col-sm-6 text-center d-flex align-items-center'>
                                <img src='/top-rate.png' className='img-fluid w-100'/>
                            </div>
                            <div className='col-lg-8 col-md-7 col-sm-6 d-flex flex-column justify-content-center pe-md-4 pe-2'>
                                <div className='py-2'>
                                    <div className='align-items-center top_hotels_name'>
                                        <a href='/hotel_details' className='float-end d-sm-none d-md-block d-block' style={{color:'#09646D' , textDecoration:'none'}}>View Details</a>
                                        <h3>Rose Valley Resort Alberta</h3>
                                    </div>
                                    <div className='top_hotels_star pt-2'>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                    </div>
                                </div>
                                <div className='d-flex top_hotels_map'>
                                    <a href='' className='top-a'><FontAwesomeIcon icon={faLocationPin}/> Alberta <span style={{color:'#B8B8B8'}}>|</span></a>
                                    <a href='' className='top-ab px-1'>View Map</a>
                                </div>
                                <div className='pt-3 top_hotels_price_night'>
                                    <p>Price / Night</p>
                                    <p style={{color:'#09646D'}}><FontAwesomeIcon icon={faIndianRupeeSign} className='me-1'/>19,000 / Person</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='top-border p-4 my-2'>
                        <div className='row gx-5'>
                            <div className='col-lg-4 col-md-5 col-sm-6 text-center d-flex align-items-center'>
                                <img src='/top-rate.png' className='img-fluid w-100'/>
                            </div>
                            <div className='col-lg-8 col-md-7 col-sm-6 d-flex flex-column justify-content-center pe-md-4 pe-2'>
                                <div className='py-2'>
                                    <div className='align-items-center top_hotels_name'>
                                        <a href='/hotel_details' className='float-end d-sm-none d-md-block d-block' style={{color:'#09646D' , textDecoration:'none'}}>View Details</a>
                                        <h3>Rose Valley Resort Alberta</h3>
                                    </div>
                                    <div className='top_hotels_star pt-2'>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                    </div>
                                </div>
                                <div className='d-flex top_hotels_map'>
                                    <a href='' className='top-a'><FontAwesomeIcon icon={faLocationPin}/> Alberta <span style={{color:'#B8B8B8'}}>|</span></a>
                                    <a href='' className='top-ab px-1'>View Map</a>
                                </div>
                                <div className='pt-3 top_hotels_price_night'>
                                    <p>Price / Night</p>
                                    <p style={{color:'#09646D'}}><FontAwesomeIcon icon={faIndianRupeeSign} className='me-1'/>19,000 / Person</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='top-border p-4 my-2'>
                        <div className='row gx-5'>
                            <div className='col-lg-4 col-md-5 col-sm-6 text-center d-flex align-items-center'>
                                <img src='/top-rate.png' className='img-fluid w-100'/>
                            </div>
                            <div className='col-lg-8 col-md-7 col-sm-6 d-flex flex-column justify-content-center pe-md-4 pe-2'>
                                <div className='py-2'>
                                    <div className='align-items-center top_hotels_name'>
                                        <a href='/hotel_details' className='float-end d-sm-none d-md-block d-block' style={{color:'#09646D' , textDecoration:'none'}}>View Details</a>
                                        <h3>Rose Valley Resort Alberta</h3>
                                    </div>
                                    <div className='top_hotels_star pt-2'>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                        <FontAwesomeIcon icon={faStar} className='top_font_crl'/>
                                    </div>
                                </div>
                                <div className='d-flex top_hotels_map'>
                                    <a href='' className='top-a'><FontAwesomeIcon icon={faLocationPin}/> Alberta <span style={{color:'#B8B8B8'}}>|</span></a>
                                    <a href='' className='top-ab px-1'>View Map</a>
                                </div>
                                <div className='pt-3 top_hotels_price_night'>
                                    <p>Price / Night</p>
                                    <p style={{color:'#09646D'}}><FontAwesomeIcon icon={faIndianRupeeSign} className='me-1'/>19,000 / Person</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </Container>
            </section>
        </>
    );
}

export default Top_rate_hotel;