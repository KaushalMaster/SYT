import React from 'react';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import './css/Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMessage } from '@fortawesome/free-solid-svg-icons';

function Blog1(props) {
    return (
        <div>
            <Header/>
            <section>
                <Container>
                    <div className='heading pt-xl-5 pt-lg-5 pt-md-4 pt-3'>
                        <Row>
                            <div className='col-lg-10 col-md-9 col-sm-9 part-1 mb-xl-4 mb-md-2'>
                                <h1 className='part-1'>A Leh Ladakh Bike/Road Trip For Thoughtful Travellers</h1>
                            </div>
                            <div className='col-lg-2 col-md-3 col-sm-3'>
                                <p className='part-2'>Published on 25/03/23</p>
                            </div>

                            <div className='col-lg-10 col-md-10'>
                                <p className='part_4 pt-2'>I considered writing about my bike/road journey to Leh Ladakh. 
                                (in this case a bicycle). It is difficult to ignore what is happening in Leh,
                                Ladakh. The moonscape landscapes of Ladakh are in their most vulnerable condition,
                                where most visitors anticipate hot water, electricity is taken for granted,
                                and urban visitors expect the comforts of modern life as they rev up theirengines
                                to the high prairies of Ladakh.</p>

                                <p className='part_4'>Do I really want to share beautiful pictures of Leh Ladakh? Do I really want
                                more individuals to congregate in these areas? Do I really want people who throw
                                their plastic wrappers from moving vehicles when they tour Ladakh?</p>
                            </div>
                            <div className='col-lg-2 col-md-2 text-center'>
                                <img src='/blog-1.1.png' className='img-fluid text-center '/>
                                <h5 className='pt-2 m-0 p-0'>Brinda Sharma</h5>
                                <p className='part-5'>Travel Blogger</p>
                                <FontAwesomeIcon icon={faMessage} className='p-2'/>
                                <FontAwesomeIcon icon={faMessage} className='p-2'/>
                                <FontAwesomeIcon icon={faMessage} className='p-2'/>
                                <FontAwesomeIcon icon={faMessage} className='p-2'/>
                            </div>
                        </Row>
                    </div>

                    <div className='section'>
                        <div>
                           <p className='part_4 pt-2'>I noticed that many people will tour the area anyway, from Manali to Leh,
                            and perhaps a post about how Ladakh on a road trip is not all sunshine and dreaminess will inspire people
                             to travel with awareness and be enlightened by the landscapes and harshness of this region. If you're 
                             planning a road journey to Leh, here's a guide to what to see and do.</p>

                             <div className='text-center pt-2'>
                                <img src='/blog-1.2.png' className='img-fluid w-100'/>
                             </div>
                            
                            <div className='pt-4'>
                                <h1 className='part-6 text-start py-2'>More Than Just A Road Trip to Ladakh; Thinking Sustainably</h1>
                                <p className='part_4 pt-2'>Last August, I took a bike journey through Leh Ladakh, where the landscapes stood in stark 
                                contrast to the settled, urbane, and sophisticated metropolitan culture of India's cities. </p>
                                <p className='part_4'>Unhurried, sparsely populated and the beauty of nothingness; it is times like this where you wonder
                                how do people make a living in a place like Ladakh.</p>

                                <p className='part_4'>The world is divided into two extremes: those who 
                                believe in the incredible, and one of the improbable where places like Ladakh no matter how beautiful,
                                can feel despairing as I saw a deathbed of trash in the most scenic locales.</p>

                                <p className='part_4'>I had questions, instan  regret on being here and at the same time pure awe, admiration and respect for people who lived on the 
                                fringes of these barren plains as well while riding through this terrain.</p>

                                <p className='part_4'>What looked stunning from the
                                outside was anything but from within. As an outsider, I took interest in the way monks, nuns and locals
                                conduct their life in these frigid landscapes in Leh Ladakh.</p>
                            </div>
                        </div>
                    </div>

                    <div className='section-1'>
                        <div className='text-center py-2'>
                            <img src='/blog-1.3.png' className='img-fluid'/>
                        </div>
                        <div className='pt-2'>
                            <p className='part_4'>Sedentary societies should learn to be humble, to remain rooted in their beliefs, and to respect the ease and convenience 
                            with which we have managed to get easy access to basic necessities in life such as food, water, and shelter.</p> 

                            <p className='part_4'>I recommend taking a road trip to Leh Ladakh not just for the scenery, hikes, or wondrous photos that will
                            fill your feed; come to slow down, explore Leh in the off-season, and spend time volunteering in locations like:</p>
                        </div>
                        <div className='part-7 py-2'>
                            <ul>
                                <li>SECMOL (The Students Educational and Cultural Movement of Ladakh)</li>
                                <li>17,000-foot base</li>
                                <li>LEDEG (Ladakh Ecological Development Group)</li>
                                <li>Ladakhi Nuns' Dutch Foundation</li>
                                <li>People's Action Group for Inclusions and Rights (PAGIR)</li> 
                                <li>Snow Leopard Conservation Society</li>
                            </ul>
                        </div>
                        <div>
                            <p className='part_4'>And when you have learnt what it is like to create a livelihood over here and interact with the locals, 
                            school children, the elderly and the spiritual nuns and monks in Ladakh, take a road trip to these places and
                             experience the otherworldy terrain of Ladakh.</p>
                        </div>
                        <div className='text-center  pt-2 pb-5'>
                            <img src='/blog-1.4.png' className='img-fluid'/>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Blog1;