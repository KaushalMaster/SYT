import React from 'react';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import './css/Blog.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Blog(props) {
    const [goToPage,setGoToPage] = useState(false);
    if (goToPage) {
        return  <Navigate to="/blog1" />
    }

    return (
        <>
        <Header/>

        {/* section-1 */}

            <section className='container'>
                    <div className='section-1'>
                        <img src='/blog1.png' className='w-100'/>
                        <div className='inp text-center py-4'>
                            <input type='search' placeholder='Search popular places, what to do, where to go...' />
                        </div>
                    </div>
            </section>  

        {/* section-2 */}

        <section>
            <Container>
                <div className='text-center Blog_Header'>
                    <h1>Here’s some travel blogs to explore more</h1>
                    <p className='mb-0'>FROM OUR ENTHUSIASTIC TRAVELLERS</p>
                </div>
                <div className='py-3'>
                <div className='inner_img '>
                    <Row className='d-flex justify-content-center'>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div onClick={()=>{setGoToPage(true);}} style={{cursor:'pointer'}}>
                                <div className='box_ralative' >
                                    <img src='/blog2.png' className='img-fluid  w-100 py-2'/>
                                    <div className='box_absolute d-flex align-items-center'>
                                        <img src="/blogger-1.png" alt="" />
                                        <div className='text-white ms-2'>
                                            <h5 className='mb-0'>Brinda Sharma</h5>
                                            <p className='mb-0'>Travel Blogger</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='innerp'>A Leh Ladakh Bike/Road Trip For Thoughtful Travellers</p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div onClick={()=>{setGoToPage(true);}} style={{cursor:'pointer'}}>
                                <div className="box_ralative">
                                    <img src='/blog3.png' className='img-fluid w-100 py-2'/>
                                    <div className='box_absolute d-flex align-items-center'>
                                            <img src="/blogger-2.png" alt="" />
                                            <div className='text-white ms-2'>
                                                <h5 className='mb-0'>Anunay Sood</h5>
                                                <p className='mb-0'>Travel Blogger</p>
                                            </div>
                                        </div>
                                </div>
                                <p className='innerp'>Insider's Guide to Goa: The Ultima-te Goa Travel Guide</p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div onClick={()=>{setGoToPage(true);}} style={{cursor:'pointer'}}>
                                <div className="box_ralative">
                                    <img src='/blog4.png' className='img-fluid w-100 py-2'/>
                                    <div className='box_absolute d-flex align-items-center'>
                                        <img src="/blogger-3.png" alt="" />
                                        <div className='text-white ms-2'>
                                            <h5 className='mb-0'>Shivam Sharma</h5>
                                            <p className='mb-0'>Adventurist</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='innerp'>Ooty Travel Guide: From Places to Visit to What to Pack</p>
                            </div>
                        </div>




                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div onClick={()=>{setGoToPage(true);}} style={{cursor:'pointer'}}>
                                <div className="box_ralative">
                                    <img src='/blog2.png' className='img-fluid w-100 py-2'/>
                                    <div className='box_absolute d-flex align-items-center'>
                                        <img src="/blogger-1.png" alt="" />
                                        <div className='text-white ms-2'>
                                            <h5 className='mb-0'>Brinda Sharma</h5>
                                            <p className='mb-0'>Travel Blogger</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='innerp'>A Leh Ladakh Bike/Road Trip For Thoughtful Travellers</p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div onClick={()=>{setGoToPage(true);}} style={{cursor:'pointer'}}>
                                <div className="box_ralative">
                                    <img src='/blog3.png' className='img-fluid w-100 py-2'/>
                                    <div className='box_absolute d-flex align-items-center'>
                                        <img src="/blogger-2.png" alt="" />
                                        <div className='text-white ms-2'>
                                            <h5 className='mb-0'>Anunay Sood</h5>
                                            <p className='mb-0'>Travel Blogger</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='innerp'>Insider's Guide to Goa: The Ultima-te Goa Travel Guide</p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div onClick={()=>{setGoToPage(true);}} style={{cursor:'pointer'}}>
                                <div className="box_ralative">
                                <img src='/blog4.png' className='img-fluid w-100 py-2'/>
                                    <div className='box_absolute d-flex align-items-center'>
                                        <img src="/blogger-3.png" alt="" />
                                        <div className='text-white ms-2'>
                                            <h5 className='mb-0'>Shivam Sharma</h5>
                                            <p className='mb-0'>Adventurist</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='innerp'>Ooty Travel Guide: From Places to Visit to What to Pack</p>
                            </div>
                        </div>


                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div className="box_ralative">
                            <img src='/blog2.png' className='img-fluid w-100 py-2'/>
                                <div className='box_absolute d-flex align-items-center'>
                                    <img src="/blogger-1.png" alt="" />
                                    <div className='text-white ms-2'>
                                        <h5 className='mb-0'>Brinda Sharma</h5>
                                        <p className='mb-0'>Travel Blogger</p>
                                    </div>
                                </div>
                            </div>
                            <p className='innerp'>A Leh Ladakh Bike/Road Trip For Thoughtful Travellers</p>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div className="box_ralative">
                            <img src='/blog3.png' className='img-fluid w-100 py-2'/>
                                <div className='box_absolute d-flex align-items-center'>
                                    <img src="/blogger-2.png" alt="" />
                                    <div className='text-white ms-2'>
                                        <h5 className='mb-0'>Anunay Sood</h5>
                                        <p className='mb-0'>Travel Blogger</p>
                                     </div>
                                </div>
                            </div>
                            <p className='innerp'>Insider's Guide to Goa: The Ultima-te Goa Travel Guide</p>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8'>
                            <div className="box_ralative">
                            <img src='/blog4.png' className='img-fluid w-100 py-2'/>
                                <div className='box_absolute d-flex align-items-center'>
                                    <img src="/blogger-3.png" alt="" />
                                    <div className='text-white ms-2'>
                                        <h5 className='mb-0'>Shivam Sharma</h5>
                                        <p className='mb-0'>Adventurist</p>
                                    </div>
                                </div>
                            </div>
                            <p className='innerp'>Ooty Travel Guide: From Places to Visit to What to Pack</p>
                        </div>




                    </Row>
                </div>

                <div className='inner_img'>
                    <Row>
  
                        

                    </Row>
                </div>

                <div className='inner_img'>
                    <Row>
  
                        

                    </Row>
                </div>
                </div>
                <div className='text-center mt-3 mb-5'>
                    <a href='#' className='load_btn'>Load More</a>
                </div>
            </Container>
        </section>
        </>
    );
}

export default Blog;