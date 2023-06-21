import React, { useState, useEffect, useContext } from "react";
import Hearer from "./Header";
import { Container, Form, Modal, Row } from "react-bootstrap";
import "../Project/css/index1.css";
import "../Project/css/custom_package.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCalendar,
  faCheck,
  faHandHoldingDroplet,
  faHandsHoldingCircle,
  faHandshakeAlt,
  faHotel,
  faIndianRupeeSign,
  faLocationPinLock,
  faPaperclip,
  faStar,
  faUserDoctor,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faUser,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";
import { bidContext } from "../App";

function Custom_packega(props) {
  const [show, setShow] = useState(false);
  const [bidDetails, setBidDetails] = useState([]);
  const { bidData, setBidData } = useContext(bidContext);
  console.log(bidData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();

  const DetailsBid = async () => {
    const res = await fetch(
      `https://start-your-tour.onrender.com/bidpackage/biddetails?_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data);
    setBidDetails(data.data);
  };

  useEffect(() => {
    DetailsBid();
  }, [id]);

  return (
    <>
      <Hearer />
      {bidDetails.map((ele) => {
        return (
          <>
            <section className="pt-5 pb-3">
              <Container>
                <div className="">
                  <Row>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center m-0 p-0 CuStom_package_image">
                      <img src="/C-packega.png" className="img-fluid w-100" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 ">
                      <div className="CuStom_package">
                        <div className="inner_CuStom_package">
                          <p className="CuStom_package_header">
                            Agency : {bidData}
                          </p>
                          <div className="CuStom_package_content">
                            <p className="">
                              {" "}
                              <span>Date </span> <span className="mx-1">:</span>{" "}
                              {ele.start_date1} to {ele.end_date1}
                            </p>
                            <div className="d-flex">
                              <p className=" ms-1 ">
                                <span>Price</span>
                                <span className="ms-1 me-2">:</span>
                                <FontAwesomeIcon
                                  className="me-1"
                                  icon={faIndianRupeeSign}
                                />
                                {ele.price_per_person}
                              </p>
                            </div>
                            <div className="d-flex">
                              <p className="me-2 ">
                                {" "}
                                <span> Total Reviews </span>{" "}
                                <span className="mx-1">:</span> 11,000
                              </p>
                              <p className="ms-xl-3 mx-lg-1">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="CuStom_package_icon"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="CuStom_package_icon "
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="CuStom_package_icon"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="CuStom_package_icon "
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#B8B8B8" }}
                                />
                              </p>
                            </div>
                            <div className="CuStom_package_images">
                              <div className="text-center">
                                <img
                                  src="/Vector.png"
                                  className="p-2 img-fluid"
                                />
                                <p>Upto 3 Stars</p>
                              </div>
                              <div className="mx-2 text-center">
                                <img
                                  src="/Vector1.2.png"
                                  className="p-2 img-fluid"
                                />
                                <p>Meals</p>
                              </div>
                              <div className="text-center">
                                <img
                                  src="/Vector1.3.png"
                                  className="p-2 img-fluid"
                                />
                                <p>Sightseeing</p>
                              </div>
                              <div className="mx-2 text-center">
                                <img
                                  src="/Vector1.4.png"
                                  className="p-2 img-fluid"
                                />
                                <p>By Train</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6 d-flex justify-content-center">
                                <button className="CuStom_package_btn">
                                  Reject
                                </button>
                              </div>
                              <div className="col-6 d-flex justify-content-center">
                                <button
                                  className="CuStom_package_btn CuStom_package_btn_2"
                                  onClick={handleShow}
                                >
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </Container>
            </section>

            <section className="mb-3">
              <Container className="px-0">
                <div>
                  <button className="w-100 over-btn">
                    <img src="/c-icon.png" className=" me-3" />
                    Overview
                  </button>
                </div>
              </Container>
            </section>

            <section className="">
              <Container className="px-0">
                <Row>
                  <div className="col-lg-6">
                    <div className="amh_to_hima">
                      <div>
                        <h6 className="pb-2 mb-0 cmntext">
                          Ahmedabad to Himachal
                        </h6>
                      </div>
                      <div className="">
                        <div className="row">
                          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-9 px-0">
                            <div className="amh_to_hima_border ms-3 px-2 px-sm-4 px-md-4 px-lg-4 px-xl-4 py-2">
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faUser}
                                  className="cmnclr"
                                />{" "}
                                Adults (12+yrs)
                              </p>
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faHandHoldingDroplet}
                                  className="cmnclr"
                                />{" "}
                                Infants(2 to 12 years)
                              </p>
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faHandHoldingDroplet}
                                  className="cmnclr"
                                />{" "}
                                Child(0 to 12 years)
                              </p>
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faUsers}
                                  className="cmnclr"
                                />{" "}
                                Total Person
                              </p>
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faHandsHoldingCircle}
                                  className="cmnclr"
                                />{" "}
                                Personal Care
                              </p>
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faCalendar}
                                  className="cmnclr"
                                />{" "}
                                Total Days
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 px-0">
                            <div className="amh_to_hima_border amh_to_hima_border_2 me-3 text-center px-4 py-2">
                              <p className="py-1 cmnp">01</p>
                              <p className="py-1 cmnp">0</p>
                              <p className="py-1 cmnp">0</p>
                              <p className="py-1 cmnp">01</p>
                              <p className="py-1 cmnp">No</p>
                              <p className="py-1 cmnp">{ele.total_days}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mt-3 mb-2">
                          <h6 className="cmntext">
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="cmnclr"
                            />{" "}
                            Approx Departure Between{" "}
                          </h6>
                        </div>
                        <div className="cmn">
                          <p className="cmnp ms-4 py-2">
                            {ele.start_date1} to {ele.end_date1}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="amh_to_hima">
                      <div>
                        <h6 className=" pb-2 mb-0 cmntext">
                          <FontAwesomeIcon icon={faHotel} className="cmnclr" />{" "}
                          Hotel & Food
                        </h6>
                      </div>
                      <div className="">
                        <div className="row">
                          <div className="col-6 px-0">
                            <div className="amh_to_hima_border ms-3 px-4 py-2">
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faHotel}
                                  className="cmnclr"
                                />{" "}
                                Hotel Type
                              </p>
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faUserDoctor}
                                  className="cmnclr"
                                />{" "}
                                Meal
                              </p>
                              <p className="cmnp py-1">
                                <FontAwesomeIcon
                                  icon={faUserDoctor}
                                  className="cmnclr"
                                />{" "}
                                Meal Type
                              </p>
                            </div>
                          </div>
                          <div className="col-6 px-0">
                            <div className="amh_to_hima_border amh_to_hima_border_2 me-3 text-center px-4 py-2">
                              <div className="text-start">
                                <p className="cmnp py-1">{ele.hotel_types}</p>
                                <p className="cmnp py-1">{ele.meal_required}</p>
                                <p className="cmnp py-1">{ele.meal_types}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 mb-2">
                        <h6 className="cmntext">
                          <FontAwesomeIcon
                            icon={faLocationPinLock}
                            className="cmnclr"
                          />{" "}
                          Travel By
                        </h6>
                      </div>
                      <div className="cmn">
                        <p className="cmnp ms-4 py-2">{ele.travel_by}</p>
                      </div>
                      <div className="mt-3 mb-2">
                        <h6 className="cmntext">
                          <FontAwesomeIcon
                            icon={faPaperclip}
                            className="cmnclr"
                          />{" "}
                          Other Requirements
                        </h6>
                      </div>
                      <div className="cmn">
                        <p className="cmnp ms-4 py-2">
                          {ele.exclude_services.map((e) => {
                            return (
                              <>
                                <div>{e.exclude_services_value}</div>
                              </>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </Row>
              </Container>
            </section>

            <section className="my-3">
              <Container className="px-0">
                <div className="mb-3">
                  <button className="w-100 over-btn">
                    <FontAwesomeIcon className="me-3" icon={faBrush} /> Services
                  </button>
                </div>
                <div className="cmn cmn_2">
                  <h6 className="cmntext mb-2">
                    <FontAwesomeIcon icon={faCircleCheck} /> Included
                  </h6>
                  <div className="cmn package_service mb-3">
                    <p style={{ color: "#00B707" }} className="cmnp">
                      {ele.include_services.map((e1) => {
                        return (
                          <>
                            <div>
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="me-2"
                              />
                              {e1.include_services_value}
                            </div>
                          </>
                        );
                      })}
                    </p>
                  </div>
                  <h6 className="cmntext">
                    <FontAwesomeIcon icon={faXmarkCircle} /> Excluded
                  </h6>
                  <div className="cmn package_service">
                    <p style={{ color: "red" }} className="cmnp">
                      {ele.exclude_services.map((e2) => {
                        return (
                          <>
                            <div>
                              <FontAwesomeIcon
                                icon={faXmarkCircle}
                                className="me-2"
                              />
                              {e2.exclude_services_value}
                            </div>
                          </>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </Container>
            </section>

            <section className="">
              <Container className="px-0">
                <div className="my-3">
                  <button className="w-100 over-btn">
                    <FontAwesomeIcon icon={faHandshakeAlt} /> Itinerary
                  </button>
                </div>
                <div className="cmn cmn__3">
                  {ele.itineries.map((e3, i) => {
                    return (
                      <>
                        <div className="py-2">
                          <h6 className="cmntext mb-2">Day {i + 1}</h6>
                          <div className="cmn p-3">
                            <p className="cmnp">{e3.title} :</p>
                            <p className="cmnp"> {e3.activity}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Container>
            </section>
          </>
        );
      })}

      {/* ----------------------modal--------------------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <Row>
              <div className="col-6">
                <form>
                  <div
                    style={{
                      background: "linear-gradient(#00363D, #005C63)",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                    className="p-1"
                  >
                    <p className="cmnp pt-1 textcm">Ahmedabad to Mumbai</p>
                    <span className="cmnp textcm">
                      <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        className="ps-2"
                      />{" "}
                      18,000
                    </span>
                    <p className="cmnp pb-1 textcm">
                      Per person on twin sharing
                    </p>
                    <div className=" textcm">
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                      <FontAwesomeIcon icon={faStar} className="inner_star" />
                    </div>
                  </div>
                  <div className="cmn p-1">
                    <p className="text-center">Booking Details</p>
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "none",
                          fontSize: "10px",
                        }}
                        className="mt-1 my-1"
                        name="fname"
                      />

                      <Form.Control
                        type="text"
                        placeholder="Departure"
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "none",
                          fontSize: "10px",
                        }}
                        className="mt-1 my-1"
                        name="Departure"
                      />

                      <Form.Control
                        type="text"
                        placeholder="Email id"
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "none",
                          fontSize: "10px",
                        }}
                        className="mt-1 my-1"
                        name="email"
                      />

                      <Form.Control
                        type="text"
                        placeholder="Mobile Number"
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "none",
                          fontSize: "10px",
                        }}
                        className="mt-1 my-1"
                        name="mobile"
                      />
                    </div>
                    <div>
                      <Row className="p-1">
                        <div className="col-6">
                          <p className="cmnp textcm">Adults : 1</p>
                          <p className="cmnp textcm">Child : 0</p>
                        </div>
                        <div className="col-6">
                          <p className="cmnp textcm">Infant : 0</p>
                          <p className="cmnp textcm">Total : 1</p>
                        </div>
                      </Row>
                    </div>
                  </div>
                  <div className="text-center pt-2">
                    <button
                      href=""
                      type="submit"
                      className="w-100 border-0 py-1"
                      style={{
                        background: "#09646D",
                        color: "#fff",
                        borderRadius: "8px",
                      }}
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-6">
                <img src="boocking.png" className="img-fluid h-100" />
              </div>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Custom_packega;
