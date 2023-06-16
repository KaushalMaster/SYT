import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../Project/css/index1.css";
import {
  faCheck,
  faCheckCircle,
  faStar,
  faXmark,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

function Book_packega1(props) {
  const { id } = useParams();

  const showItinerary = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(
      `https://start-your-tour.onrender.com/bookpackageitinerary?book_package_id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    showItinerary();
  }, []);
  return (
    <>
      <section className="">
        <div className="costum_container">
          <div
            className="green_border book_packega_1 p-3"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="py-2">
              <h6 className="cmnclr font-weight-bold cmnhr">
                Travelers Details
              </h6>
            </div>

            <div className="px-xl-5 px-lg-4 px-md-3 px-sm-2 px-1 py-2">
              <div className="cmn p-2 px-3">
                <div>
                  <Row>
                    <div className="py-2">
                      <span
                        className="cmnbkg"
                        style={{ borderRadius: "100%", padding: "2px 7px" }}
                      >
                        1
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                      <div className="ps-4 py-2">
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Name</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            Gautam Shah
                          </p>
                        </div>
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Mobile no.</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            99999 99999
                          </p>
                        </div>
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Age</h6>
                          <p className="cmnp cmnclr font-weight-bolder">26</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                      <div className="ps-4 py-2">
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Email ID</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            gautamshah@gmail.com
                          </p>
                        </div>
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Gender</h6>
                          <p className="cmnp cmnclr font-weight-bolder">Male</p>
                        </div>
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">City</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            Ahmedabad
                          </p>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <hr />
                  <Row>
                    <div className="py-2">
                      <span
                        className="cmnbkg "
                        style={{ borderRadius: "100%", padding: "2px 7px" }}
                      >
                        2
                      </span>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="ps-4 py-2">
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Name</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            Vidya Shah
                          </p>
                        </div>
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Mobile no.</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            99999 99999
                          </p>
                        </div>
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Age</h6>
                          <p className="cmnp cmnclr font-weight-bolder">25</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="ps-4 py-2">
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Email ID</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            vidyashah@gmail.com
                          </p>
                        </div>
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">Gender</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            Female
                          </p>
                        </div>
                        <div className="py-1">
                          <h6 className="cmnp cmnclr1">City</h6>
                          <p className="cmnp cmnclr font-weight-bolder">
                            Ahmedabad
                          </p>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </div>

            <div className="py-2">
              <h6 className="cmnclr font-weight-bold cmnhr">Package Details</h6>
            </div>

            <div>
              <div className="px-xl-5 px-lg-4 px-md-3 px-sm-2 px-1 py-2">
                <div className="cmn p-2 px-3">
                  <div>
                    <Row>
                      <div className="col-lg-6 col-md-6 ">
                        <div className="ps-4 py-2">
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Package category</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Honeymoon
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Number Of People</h6>
                            <p className="cmnp cmnclr font-weight-bolder">2</p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Total Days</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              3 Days & 2 Night
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Hotel Type</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              3 Stars
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 ">
                        <div className="ps-4 py-2">
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Package</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Ahmedabad - Goa
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Travel By</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Flight
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Personal Care</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Yes
                            </p>
                          </div>
                          <div className="py-1">
                            <h6 className="cmnp cmnclr1">Meal Include</h6>
                            <p className="cmnp cmnclr font-weight-bolder">
                              Yes | VEG
                            </p>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2">
              <h6 className="cmnclr font-weight-bold cmnhr1">Overview</h6>
            </div>

            <div className="py-2">
              <div className="px-3 text-justify">
                <li className="py-1 cmnli">
                  North Goa - Nestled at the western coast of the country, Goa
                  provides a totally different experience with its alluring
                  beaches and crazy nightlife. Celebrate the start to your new
                  journey and experience complete bliss with our customizable 4
                  nights and 5 days Goa honeymoon tour package. With this
                  romantic Goa trip itinerary, you will visit the mesmerizing
                  attractions of North and South Goa. Relish a delicious slice
                  of leisure in the loving company of your soulmate in this
                  nature kissed land.
                </li>
                <li className="py-1 cmnli">
                  Opt our Goa couple tour package, and escape to this hippie
                  state- one of the most popular tourist destinations amongst
                  travellers from across the globe. Your honeymoon in Goa starts
                  with a visit to the picture-perfect beaches of Goa like
                  Calangute Beach, Baga Beach, Miramar Beach, and Anjuna Beach.
                  Swaying coconut palm trees and the golden sandy beds invited
                  you for a long walk with your better half on your romantic
                  tour. Walk hand in hand over the sandy lagoons, and into the
                  secluded caves that are perfect for picnics and sun tanning.
                </li>
                <li className="py-1 cmnli">
                  The best part about booking a trip with us is that our 4
                  nights 5 days Goa couple packages can be easily customized as
                  per your pocket and preferences, imparting you a vacation
                  together, just as you want. Your trip of togetherness is laced
                  by other attractions such as a romantic cruise, candlelight
                  dinner, beach hopping, and an exciting nightlife. If you and
                  your beloved are interested to have a glimpse of the past,
                  head to Fort Aguada to absorb the Portuguese charm.
                </li>
              </div>
            </div>

            <div className="py-2">
              <h6 className="cmnclr font-weight-bold cmnhr1">Services</h6>
            </div>

            <div className="py-2">
              <div className=" p-3">
                <div>
                  <Row>
                    <div className="col-lg-6 col-md-6 col-dm-6">
                      <h6>
                        <FontAwesomeIcon icon={faCheckCircle} /> Included
                      </h6>
                      <div className="cmn p-3">
                        <p className="cmnp py-1 ruppe_text">
                          <FontAwesomeIcon icon={faCheck} /> Accommodation as
                          per tour itinerary
                        </p>
                        <p className="cmnp py-1 ruppe_text">
                          <FontAwesomeIcon icon={faCheck} /> All tours &
                          transfers on private basis
                        </p>
                        <p className="cmnp py-1 ruppe_text">
                          <FontAwesomeIcon icon={faCheck} /> Daily dinner in
                          hotel
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-dm-6">
                      <h6>
                        <FontAwesomeIcon icon={faXmarkCircle} /> Excluded
                      </h6>
                      <div className="cmn p-3">
                        <p className="cmnp py-1 ruppe_text1">
                          <FontAwesomeIcon icon={faXmark} /> Daily buffet
                          breakfast in hotel
                        </p>
                        <p className="cmnp py-1 ruppe_text1">
                          <FontAwesomeIcon icon={faXmark} /> Transfers:
                          Destination - Hotel - Destination
                        </p>
                        <p className="cmnp py-1 ruppe_text1">
                          <FontAwesomeIcon icon={faXmark} /> All taxes
                        </p>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </div>

            <div className="py-2">
              <h6 className="cmnclr font-weight-bold cmnhr1">Itinerary</h6>
            </div>

            <div>
              <div className="p-3">
                <div className="py-2">
                  <h6 className="cmnclr">Day 1</h6>
                  <div className="cmn p-2">
                    <Row className="align-items-center">
                      <div className="col-lg-9 cmnli">
                        <li className="py-1">
                          Morning: Start your day by visiting the Basilica of
                          Bom Jesus, a UNESCO World Heritage Site and one of the
                          most famous churches in Goa. Admire the baroque
                          architecture and visit the tomb of St. Francis Xavier.
                        </li>
                        <li className="py-1">
                          Afternoon: Head to Miramar Beach, located just a few
                          kilometers away from Panaji. Relax on the beach, take
                          a dip in the sea, and enjoy the sunset.
                        </li>
                        <li className="py-1">
                          Evening: Go for a stroll in the Fontainhas
                          neighborhood in Panaji, which is known for its
                          colorful Portuguese-style houses and narrow lanes.
                        </li>
                      </div>
                      <div className="col-lg-3  text-center py-2">
                        <img
                          src="/Itinerary1.png"
                          className="img-fluid text-center"
                        />
                      </div>
                    </Row>
                  </div>
                </div>
                <div className="py-2">
                  <h6 className="cmnclr">Day 2</h6>
                  <div className="cmn p-2">
                    <Row className="align-items-center">
                      <div className="col-lg-9 cmnli">
                        <li className="py-1">
                          Morning: Start your day by visiting the Basilica of
                          Bom Jesus, a UNESCO World Heritage Site and one of the
                          most famous churches in Goa. Admire the baroque
                          architecture and visit the tomb of St. Francis Xavier.
                        </li>
                        <li className="py-1">
                          Afternoon: Head to Miramar Beach, located just a few
                          kilometers away from Panaji. Relax on the beach, take
                          a dip in the sea, and enjoy the sunset.
                        </li>
                        <li className="py-1">
                          Evening: Go for a stroll in the Fontainhas
                          neighborhood in Panaji, which is known for its
                          colorful Portuguese-style houses and narrow lanes.
                        </li>
                      </div>
                      <div className="col-lg-3  text-center py-2">
                        <img
                          src="/Itinerary2.png"
                          className="img-fluid text-center"
                        />
                      </div>
                    </Row>
                  </div>
                </div>
                <div className="py-2">
                  <h6 className="cmnclr">Day 3</h6>
                  <div className="cmn p-2">
                    <div className="py-1 text-justify cmnli">
                      <li className="py-1">
                        Morning: Start your day by visiting the Basilica of Bom
                        Jesus, a UNESCO World Heritage Site and one of the most
                        famous churches in Goa. Admire the baroque architecture
                        and visit the tomb of St. Francis Xavier.
                      </li>
                      <li className="py-1">
                        Afternoon: Head to Miramar Beach, located just a few
                        kilometers away from Panaji. Relax on the beach, take a
                        dip in the sea, and enjoy the sunset.
                      </li>
                      <li className="py-1">
                        Evening: Go for a stroll in the Fontainhas neighborhood
                        in Panaji, which is known for its colorful
                        Portuguese-style houses and narrow lanes.
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2">
              <h6 className="cmnclr font-weight-bold cmnhr">Hotel details</h6>
            </div>

            <div className="py-2 px-xl-5 px-lg-4 px-md-3 px-sm-2 px-1">
              <div>
                <h6 className="py-1 pt-3">Day 1</h6>
                <div className="cmn p-2">
                  <Row className="align-items-center">
                    <div className="col-lg-9">
                      <div className="py-1">
                        <h6 className="cmnp cmnclr1">Hotel</h6>
                        <p className="cmnp cmnclr font-weight-bolder">
                          Montego Bay Beach Village
                        </p>
                      </div>
                      <div className="py-1">
                        <h6 className="cmnp cmnclr1">Location</h6>
                        <p className="cmnp cmnclr font-weight-bolder">
                          Vithaldas Waddo, Morjim, Goa, India, 403512{" "}
                        </p>
                      </div>
                      <div className="py-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#B8B8B8", padding: "3px" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="text-center py-2">
                        <img src="/hotel1.png" className="img-fluid" />
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
              <div>
                <h6 className="py-1 pt-3">Day 2</h6>
                <div className="cmn p-2">
                  <Row className="align-items-center">
                    <div className="col-lg-9">
                      <div className="py-1">
                        <h6 className="cmnp cmnclr1">Hotel</h6>
                        <p className="cmnp cmnclr font-weight-bolder">
                          Sea Queen Beach Resort and SPA
                        </p>
                      </div>
                      <div className="py-1">
                        <h6 className="cmnp cmnclr1">Location</h6>
                        <p className="cmnp cmnclr font-weight-bolder">
                          96/5 Colva Beach Betalbatim Beach Road Colve Salcete,
                          Colva, Goa, India, 403708
                        </p>
                      </div>
                      <div className="py-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#B8B8B8", padding: "3px" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="text-center py-2">
                        <img src="/hotel2.png" className="img-fluid" />
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
              <div>
                <h6 className="py-1 pt-3">Day 3</h6>
                <div className="cmn p-2">
                  <Row className="align-items-center">
                    <div className="col-lg-9">
                      <div className="py-1">
                        <h6 className="cmnp cmnclr1">Hotel</h6>
                        <p className="cmnp cmnclr font-weight-bolder">
                          De Lagom Comforts Goa
                        </p>
                      </div>
                      <div className="py-1">
                        <h6 className="cmnp cmnclr1">Location</h6>
                        <p className="cmnp cmnclr font-weight-bolder">
                          Calangute - Anjuna Road, Anjuna, Goa, India, 403509
                        </p>
                      </div>
                      <div className="py-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="top_font_crl"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#B8B8B8", padding: "3px" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="text-center py-2">
                        <img src="/hotel3.png" className="img-fluid" />
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Book_packega1;
