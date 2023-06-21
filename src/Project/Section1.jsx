import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarAlt,
  faClock,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./css/index1.css";
import Slider from "./slider";
import { useState, useEffect } from "react";
import Data from "./Data";
import Swiper from "swiper";
import { Navigate } from "react-router-dom";
import Section_modal from "./Section_modal";

function Section1(props) {
  const [fdata, setFdata] = useState(Data);
  const [copydata, setCopydata] = useState([]);
  const [goToPage, setGoToPage] = useState(false);
  const [saftyDescription, SetsaftyDescription] = useState("");
  const [safetyInfo, setSafetyInfo] = useState([]);

  const HomeData = async () => {
    const res = await fetch("http://54.89.214.143:3000/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    SetsaftyDescription(data.data[0].Saftyinformation[0].info.description);
    setSafetyInfo(data.data[0].Saftyinformation[0].safetyinfo);
  };

  useEffect(() => {
    HomeData();
    setCopydata(Data);
  }, []);

  if (goToPage) {
    return <Navigate to="/top_rate_hotel" />;
  }
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      350: {
        slidesPerView: 3,
      },

      520: {
        slidesPerView: 3,
      },

      850: {
        slidesPerView: 3,
      },

      1000: {
        slidesPerView: 4,
      },

      1200: {
        slidesPerView: 4,
      },
    },
  });

  return (
    <>
      <div className="section_1">
        <Container>
          <div className="title text-center py-5">
            <h1 style={{ fontWeight: "600" }}>
              Choose your next travel <br />
              <span style={{ color: "red" }}>Destination </span>
              as per your comfort!
            </h1>
            <p className="inner_title py-2">WITH CUSTOMIZED PACKAGES</p>
            <div className="py-3">
              <Section_modal />
            </div>
            <div className="explore">
              <ul className="d-flex justify-content-center ps-0">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                    Select Destination
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faClockFour} className="me-1" />
                    Select Duration
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                    Select Month
                  </a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <section>
        <Container>
          <Slider />
        </Container>
      </section>

      <div className="py-5">
        <Container>
          <div className="py-1 mt-2">
            <h3 className="font">Your Safety Is Our Priority</h3>
            <p className="text-center" style={{ color: "#B8B8B8" }}>
              {saftyDescription}
            </p>
          </div>
          <div className="py-2">
            <Row>
              {safetyInfo.map((ele) => {
                return (
                  <>
                    <div className="col text-center">
                      <img src={ele.safetyinfo_photo} className="img-fluid" />
                    </div>
                  </>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>

      <section className="pb-5">
        <div className="container">
          <div className="hotel-description">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-6 horizontal-rule py-4 ">
                <div className="w-75"></div>
                <div className="w-50"></div>
                <div className="w-25"></div>
              </div>
              <div className="col-lg-6 col-md-6 py-3">
                <p>
                  Pick the most over the top total and best accomodation
                  recommandation that you need to make your vacation charming.
                </p>
              </div>
            </div>
          </div>

          {/* top hotel */}
          <div>
            <h3 className="py-3" style={{ fontWeight: "600" }}>
              Top Rated Hotels
            </h3>
            <div className="swiper mySwiper">
              <div className="swiper-wrapper ">
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-0 hotel">
                    <div className="image-box">
                      <div className="hotel-name">
                        <h6 className="py-1">Maldives</h6>
                        <p>Pacific Hotels</p>
                      </div>
                      <div className="star">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="col inner_star"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-1 hotel">
                    <div className="hotel-name">
                      <h6 className="py-1">Goa</h6>
                      <p>Pacific Hotels</p>
                    </div>
                    <div className="star">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-2 hotel">
                    <div className="hotel-name">
                      <h6 className="py-1">Rajasthan</h6>
                      <p>Pacific Hotels</p>
                    </div>
                    <div className="star">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-3 hotel">
                    <div className="hotel-name">
                      <h6 className="py-1">Punjab</h6>
                      <p>Pacific Hotels</p>
                    </div>
                    <div className="star">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide d-flex justify-content-center"
                  onClick={() => {
                    setGoToPage(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="hotel-4 hotel">
                    <div className="hotel-name">
                      <h6 className="py-1">Ladakh</h6>
                      <p>Pacific Hotels</p>
                    </div>
                    <div className="star">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="col inner_star"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="services my-5">
          <div class="container">
            <h3>How we work?</h3>
            <h1>We Offer Best Services</h1>
            <h4>Customer Service</h4>
            <ul>
              <li>
                <p>
                  Customized occasion visit bundle assists you with doing <br />
                  the things in your as own would prefer.
                </p>
              </li>
              <li>
                <p>
                  Just travel at your own speed with your preferred carrier{" "}
                  <br />
                  and we will work with all that you want.
                </p>
              </li>
              <li>
                <p>
                  Choice of lodgings will likewise be yours and various cooking
                  styles that you <br />
                  generally love to investigate would show up for you to pick.
                </p>
              </li>
              <li>
                <p>
                  You can pick an individual vehicle or need to accompany other
                  worldwide <br />
                  voyagers at seat-in-mentor office, your decision our need.
                </p>
              </li>
              <li>
                <p>
                  Just pick the range of spots you need to go. Accompany your{" "}
                  <br />
                  friends and family and investigate the world.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
