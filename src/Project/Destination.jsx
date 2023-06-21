import React, { useState, useEffect } from "react";
import "./css/Destination.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dataContext } from "../App";
import { useContext } from "react";

function Destination(props) {
  const { info, setInfo } = useContext(dataContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const [destination, setDestination] = useState([]);
  const [packages, setPackages] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const destinationDetail = async () => {
    const res = await fetch(`http://54.89.214.143:3000/placetovisit/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.data);
    setDestination(data.data);
  };

  const packageDetail = async () => {
    const res = await fetch(
      `http://54.89.214.143:3000//destination/getDestinationData?destination_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data[0].Packages);
    setPackages(data.data[0].Packages);
  };

  useEffect(() => {
    destinationDetail();
    packageDetail();
    window.scrollTo(0, 0);
  }, [id]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Header />
      <section class="container himachal-head">
        <div class="row">
          <div class="col-12 himachal">
            <h1>{info}</h1>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="d-flex justify-content-between time-to-visit">
          <div class="package-offer mt-3">
            <p>
              Best Time to Visit <span>April - July</span>
            </p>
          </div>
          <div class="package-offer mt-3">
            <p>
              Started from{" "}
              <span>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                6,000/- to <i class="fa-solid fa-indian-rupee-sign"></i>
                40,000/-
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="container DestinationSlider py-4">
        <Carousel responsive={responsive}>
          {destination.map((ele) => {
            return (
              <>
                <div
                  className="px-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleShow}
                >
                  <img src={ele.photo} alt="" class="img-flud w-100" />
                  <h5 class="py-2 text-center">{ele.name}</h5>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>

      {/* <section class="py-4">
        <div class="container">
          <div class="row text-center tour-places">
            {destination.map((ele, i) => {
              return (
                <>
                  <div
                    class="col-4"
                    onClick={handleShow}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={ele.photo || "/bkg3.png"}
                      alt=""
                      class="img-flud w-100"
                    />
                    <h5 class="py-2">{ele.name}</h5>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section> */}

      <section>
        <div class="container">
          <div class="d-flex justify-content-between">
            <div class="trending">
              <h1>Top Trending Packages</h1>
            </div>
            <div class="d-flex justify-content-end">
              <button
                class="bt-filter d-xl-none d-lg-block d-md-block d-sm-block"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                filters
              </button>
            </div>
          </div>

          {/* <!------------------------------------- filter -------------------------------------------> */}
          <div class="row justify-content-between">
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-6 d-xl-block d-lg-none d-md-none d-sm-none d-none  text-start">
              <div class="sort-list filter px-3 py-3">
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filter-headers">Sort by</h6>
                    </li>
                    <li>
                      <input type="checkbox" class="input-margin" />
                      High To Low
                    </li>
                    <li>
                      <input type="checkbox" class="input-margin" />
                      Low To High
                    </li>
                    <li>
                      <input type="checkbox" class="input-margin" />
                      Popularity
                    </li>
                  </ul>
                </div>
                <div></div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filter-headers">Cities</h6>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Shimla
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Manali
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Dharmshala
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Solan
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Kasauli
                    </li>
                  </ul>
                </div>
                <div class="mb-3">
                  <h6 class="filter-headers">Filters</h6>
                </div>
                <div class="mb-3">
                  <h6 class="filters-inner">Duration (in Days)</h6>
                  <select class="select-day">
                    <option selected> 1 to 3</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filters-inner">Budget Per Person</h6>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Less than 10,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      10,000 to 20,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      20,000 to 40,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      40,000 to 60,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      60,000 to 80,000
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Above 80,000
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="list-none ps-0">
                    <li>
                      <h6 class="filters-inner">Month of Travel</h6>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Jan-Mar
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Apr-Jun
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Jul-Sep
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        class="input-margin"
                        name=""
                        id=""
                      />
                      Oct-Dec
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!------------------------------------- toggle button ------------------------------------> */}

            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-body">
                <div class="col-12  text-start">
                  <div class="sort-list filter px-3 py-3">
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filter-headers">Sort by</h6>
                        </li>
                        <li>
                          <input type="checkbox" class="input-margin" />
                          High To Low
                        </li>
                        <li>
                          <input type="checkbox" class="input-margin" />
                          Low To High
                        </li>
                        <li>
                          <input type="checkbox" class="input-margin" />
                          Popularity
                        </li>
                      </ul>
                    </div>
                    <div></div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filter-headers">Cities</h6>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Shimla
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Manali
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Dharmshala
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Solan
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Kasauli
                        </li>
                      </ul>
                    </div>
                    <div class="mb-3">
                      <h6 class="filter-headers">Filters</h6>
                    </div>
                    <div class="mb-3">
                      <h6 class="filters-inner">Duration (in Days)</h6>
                      <select class="select-day">
                        <option selected> 1 to 3</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filters-inner">Budget Per Person</h6>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Less than 10,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          10,000 to 20,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          20,000 to 40,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          40,000 to 60,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          60,000 to 80,000
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Above 80,000
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="list-none ps-0">
                        <li>
                          <h6 class="filters-inner">Month of Travel</h6>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Jan-Mar
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Apr-Jun
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Jul-Sep
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="input-margin"
                            name=""
                            id=""
                          />
                          Oct-Dec
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!------------------------------------- tourplaces ---------------------------------> */}

            <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="tourplaces px-3 py-3">
                <div class="row">
                  {packages.map((ele) => {
                    return (
                      <>
                        <div
                          class="d-flex justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-12"
                          style={{ cursor: "pointer" }}
                        >
                          <NavLink
                            to={`/packega_details/${ele._id}`}
                            style={{ textDecoration: "none", color: "#044711" }}
                          >
                            <div className="rating-top jiji mb-5">
                              <div class="Rating">
                                <img src={ele.Place} alt="" class="img-fluid" />
                                <span>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "yellow" }}
                                  />{" "}
                                  4.3
                                </span>
                              </div>
                              <div class="customise">
                                <div class="d-flex justify-content-between">
                                  <h5>Himachal</h5>
                                  <h4 className="d-inline">
                                    <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                                    {ele.price_per_person}
                                    <br />
                                    <span>per person</span>
                                  </h4>
                                </div>
                                <div class="per-person d-flex justify-content-between">
                                  <h5>per person (travel included)</h5>
                                  <p>{ele.days}</p>
                                </div>
                                <div class="mb-4">
                                  <img src="/Vector.png" alt="" class="me-2" />
                                  <img
                                    src="/Vector1.2.png"
                                    alt=""
                                    class="me-2"
                                  />
                                  <img
                                    src="/Vector1.3.png"
                                    alt=""
                                    class="me-2"
                                  />
                                  <img
                                    src="/Vector1.4.png"
                                    alt=""
                                    class="me-2"
                                  />
                                </div>
                                <div class="Customize-btn">
                                  <button>Customize & Get Quotes</button>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="paragraph">
            <h3 className="mb-3">
              How to reach Himachal by Train
              <span className="mx-2 himachal_train_vector">
                <img src="/Vector1.3.3.png" alt="" classNames="img-fluid " />
              </span>
            </h3>
            <p>
              Himachal Pradesh has yet to develop a significant number of rail
              tracks, so it has only a limited railway network that serves only
              a few locations in the state. Himachal Pradesh has 15 railway
              stops. The Kangra Valley Railway line, on the other hand, links
              Himachal Pradesh to other states as well as some cities within it.
              It runs from Pathankot in Punjab to Jogindernagar in Himachal
              Pradesh, going through Kangra and Palampur on the way. This route
              takes roughly 8 hours from Pathankot to Himachal Pradesh.
              Pathankot serves as a main hub for tourists visiting Dharamshala,
              Bir Billing, Palampur, and Kangra in Himachal Pradesh. The
              Kalka-Shimla rail route is another significant railway line in
              Himachal Pradesh. Shimla, the state capital of Himachal Pradesh,
              is readily accessible via the Kalka-Shimla Toy Train, which runs
              along this route. This adorable tourist toy railway, designated a
              UNESCO World Heritage Site, departs from Kalka in Haryana and
              arrives in Shimla in about 6 hours. The Shivalik Deluxe Express,
              Rail Motor Car; Himalayan Queen, Shimla Express, and Shimla Kalka
              Passenger are the other trains that run on the Kalka-Shimla line.
            </p>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} style={{ borderRadius: "0px" }}>
        <Modal.Body>
          <Swiper
            // modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {destination.map((ele) => {
              return (
                <>
                  <SwiperSlide>
                    <img
                      src={ele.photo || "/co-slider.png"}
                      className="img-fluid"
                    />
                    <h1 className="pt-2">{ele.name}</h1>
                    <p style={{ textAlign: "justify" }} className="p-1 cmnp">
                      {ele.description}
                    </p>
                  </SwiperSlide>
                </>
              );
            })}

            <SwiperSlide>
              <img src="/co-slider1.png" className="img-fluid" />
              <h1 className="pt-2">Kasauli</h1>
              <p style={{ textAlign: "justify" }} className="p-1">
                Located at 1927 m above seal level Kasauli is a small hill
                station in Himachal Pradesh. It also serves as an army
                cantonment. Snow-clad mountains, dense forests and a pleasant
                climate make Kasauli a major draw among tourist. Established by
                the British as a cantonment town in 1842, Kasauli has come a
                long way since. Located at 1927 m above seal level Kasauli is a
                small hill station in Himachal Pradesh. It also serves as an
                army cantonment. Snow-clad mountains, dense forests and a
                pleasant climate make Kasauli a major draw among tourist.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/co-slider2.png" className="img-fluid" />
              <h1 className="pt-2">Dharmshala</h1>
              <p className="p-1" style={{ textAlign: "justify" }}>
                Dharamshala, located at an elevation of 1,475 metres above sea
                level, is a scenic stretch of land in Kangra Valley that
                captivates visitors with its spectacular beauty. Dharamshala,
                also known as the "Little Lhasa of India," is the holy home of
                the exiled Tibetan monk Dalai Lama. Dharamshala, located at an
                elevation of 1,475 metres above sea level, is a scenic stretch
                of land in Kangra Valley that captivates visitors with its
                spectacular beauty. Dharamshala, also known as the "Little Lhasa
                of India," is the holy home of the exiled Tibetan monk Dalai
                Lama.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/co-slider3.png" className="img-fluid" />
              <h1 className="pt-2">Manali</h1>
              <p className="p-1" style={{ textAlign: "justify" }}>
                Manali, a Himalayan gift to the world, is a lovely township
                nestled in the picturesque Beas River basin. It is a rustic
                enclave renowned for its cool temperature and snow-capped
                mountains, providing tourists with respite from the scorching
                heat of the plains. Manali, a Himalayan gift to the world, is a
                lovely township nestled in the picturesque Beas River basin. It
                is a rustic enclave renowned for its cool temperature and
                snow-capped mountains, providing tourists with respite from the
                scorching heat of the plains.
              </p>
            </SwiperSlide>
          </Swiper>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Destination;
