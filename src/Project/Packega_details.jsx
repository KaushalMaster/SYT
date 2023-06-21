import {
  faArrowRight,
  faBus,
  faCar,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faIndianRupeeSign,
  faPlane,
  faStar,
  faTrain,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormCheck, Modal, Row } from "react-bootstrap";
import Header from "./Header";
import "./css/index1.css";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Packega_details(props) {
  const [date, setDate] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const click1 = () => {
    handleClose1(false);
    handleShow2(true);
  };

  // page 2
  const click2 = () => {
    handleClose2(false);
    handleShow3(true);
  };

  const back1 = () => {
    handleClose2(false);
    handleShow1(true);
  };

  // page 3

  const click3 = () => {
    handleClose3(false);
    handleShow4(true);
  };

  const back2 = () => {
    handleClose3(false);
    handleShow2(true);
  };

  // page 4

  const click4 = () => {
    handleClose4(false);
    handleShow5(true);
  };

  const back3 = () => {
    handleClose4(false);
    handleShow3(true);
  };

  // 5

  const click5 = () => {
    handleClose5(false);
    handleShow6(true);
  };

  const back4 = () => {
    handleClose5(false);
    handleShow4(true);
  };

  // 6

  const click6 = () => {
    handleClose5(false);
    // handleShow5(true);
  };

  const back5 = () => {
    handleClose6(false);
    handleShow5(true);
  };

  const CssTextField = styled(TextField)({
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
    },
  });

  const [categoty, setCategoty] = useState([]);

  const getCategoty = async () => {
    const res = await fetch(
      "https://start-your-tour.onrender.com/destinationcategory",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data);
    setCategoty(data.data);
  };

  const [selectedValues, setSelectedValues] = useState([]);
  console.log(selectedValues);

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      // If value already exists, remove it from the array
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      // If value doesn't exist, add it to the array
      setSelectedValues([...selectedValues, value]);
    }
  };

  const [selectedValuesTravel, setSelectedValuesTravel] = useState([]);
  console.log(selectedValuesTravel);

  const handleCheckboxChangeTravel = (value) => {
    if (selectedValuesTravel.includes(value)) {
      // If value already exists, remove it from the array
      setSelectedValuesTravel(selectedValuesTravel.filter((v) => v !== value));
    } else {
      // If value doesn't exist, add it to the array
      setSelectedValuesTravel([...selectedValuesTravel, value]);
    }
  };

  const [selectedValuesHotel, setSelectedValuesHotel] = useState([]);
  console.log(selectedValuesHotel);

  const handleCheckboxChangeHotel = (value) => {
    if (selectedValuesHotel.includes(value)) {
      // If value already exists, remove it from the array
      setSelectedValuesHotel(selectedValuesHotel.filter((v) => v !== value));
    } else {
      // If value doesn't exist, add it to the array
      setSelectedValuesHotel([...selectedValuesHotel, value]);
    }
  };

  const [selectedValuesMeal, setSelectedValuesMeal] = useState([]);
  console.log(selectedValuesMeal);

  const handleCheckboxChangeMeal = (value) => {
    if (selectedValuesMeal.includes(value)) {
      // If value already exists, remove it from the array
      setSelectedValuesMeal(selectedValuesMeal.filter((v) => v !== value));
    } else {
      // If value doesn't exist, add it to the array
      setSelectedValuesMeal([...selectedValuesMeal, value]);
    }
  };

  const [details, setDetails] = useState({
    departure: "",
    destination: "",
    total_adult: "",
    total_child: "",
    Infant: "",
    personal_care: "",
    additional_requirement: "",
    full_name: "",
    email_address: "",
    mobile_no: "",
    city: "",
    budget_per_person: "",
    meal_type: "",
  });

  const txt = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  console.log(details);

  const CustomPackage = async () => {
    const token = localStorage.getItem("userToken");

    const {
      departure,
      destination,
      total_adult,
      total_child,
      Infant,
      personal_care,
      additional_requirement,
      full_name,
      email_address,
      mobile_no,
      city,
      budget_per_person,
      meal_type,
    } = details;

    const res = await fetch(
      "https://start-your-tour.onrender.com/customrequirements",
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departure,
          destination,
          category: selectedValues,
          total_adult,
          total_child,
          Infant,
          travel_by: selectedValuesTravel,
          personal_care,
          start_date: "12:02:2022",
          end_date: "20:02:2022",
          hotel_type: selectedValuesHotel,
          meal_require: selectedValuesMeal,
          meal_type,
          additional_requirement,
          full_name,
          email_address,
          mobile_no: Number(mobile_no),
          city,
          budget_per_person,
        }),
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.code == 200) {
      handleClose6(false);
    }
  };

  const { id } = useParams();
  const [pDetails, setPDetails] = useState([]);

  const PackageDetails = async () => {
    const res = await fetch(
      `https://start-your-tour.onrender.com/package/getPackageData?package_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data);
    setPDetails(data.data);
  };

  useEffect(() => {
    PackageDetails();
    getCategoty();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      {pDetails.map((ele) => {
        return (
          <>
            <section className="container py-4">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 text-center">
                  <img
                    src="/bkg1.png"
                    alt=""
                    className="w-100 rounded h-100 h-md-50 package_details_image"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0 p-0 ">
                  <div className="CuStom_package package_details_2">
                    <div className="inner_packega">
                      <div className="">
                        <div className="border_bottom">
                          <p className="text_20">
                            Manali(2D){" "}
                            <FontAwesomeIcon
                              className="px-2"
                              icon={faArrowRight}
                            />{" "}
                            kasol(2D){" "}
                          </p>
                          <div className="d-flex">
                            <p className="text_20 fw-bold">
                              Total Reviews : 11,000{" "}
                            </p>
                            <p className="ms-3">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="c_icon"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="c_icon"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="c_icon"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="c_icon"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "#B8B8B8" }}
                                className=""
                              />
                            </p>
                          </div>
                          <div className="pad_img d-flex text-center">
                            <div>
                              <img src="/Vector.png" className=" img-fluid" />
                              <br />
                              <span>Upto 3 Stars</span>
                            </div>
                            <div className="mx-3">
                              <img
                                src="/Vector1.2.png"
                                className=" img-fluid"
                              />
                              <br />
                              <span>Meals</span>
                            </div>
                            <div>
                              <img
                                src="/Vector1.3.png"
                                className=" img-fluid"
                              />
                              <br />
                              <span>Sightseeing</span>
                            </div>
                            <div className="mx-3">
                              <img
                                src="/Vector1.4.png"
                                className=" img-fluid"
                              />
                              <br />
                              <span>Sightseeing</span>
                            </div>
                          </div>
                        </div>
                        <div className="For_Padd">
                          <div className="for-18000">
                            <div className="d-flex">
                              <p className=" me-2">Price :</p>
                              <p className="ms-2">
                                <FontAwesomeIcon
                                  className="pe-2"
                                  icon={faIndianRupeeSign}
                                />
                                {ele.price_per_person}
                              </p>
                            </div>
                            <div className="Per_Person">Per Person</div>
                          </div>
                          <div className=" c-top-p text-center">
                            <button
                              href=""
                              className="c_btn2 text-20 border-0"
                              onClick={handleShow1}
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="container">
                <div className="overview-btn">
                  <button className="mb-4">Overview</button>
                  <ul>
                    <li className="mb-4">
                      Manali-Kasol Tour Package for Himachal is one of the top
                      selling packages of Himachal from Chandigarh. With a 3
                      nights 4 days Himachal itinerary and cab transfers for
                      intercity and intra city travel, this is perfect long
                      weekend getaway from Chandigarh. Bestselling
                      Kasol-Manali-Chandigarh Tour Packages From Top Cities in
                      India.
                    </li>
                    <li className="mb-4">
                      This best Himachal tour packages includes 2 nights in
                      Manali and 1 night in Kasol. Perfect for friends and
                      corporate outings, it offers a lot of fun and interesting
                      activities. Key tourist spots covered include Rohtang
                      Pass, Solang Valley, Kullu Valley, and Manikaran
                      Gurudwara.
                    </li>
                    <li className="mb-4">
                      Further, the itinerary and the complete Himachal package
                      are completely customisable. You can choose the
                      sightseeing stops as well as the activities you wish you
                      to try. While Manali stay will be heavy on sightseeing and
                      activities, Kasol is the place to relax. The comfortable 4
                      days itinerary ensures you get time to visit the hot
                      springs of Manikaran and also check out the finger-licking
                      Israeli food at the famous cafes in Kasol.
                    </li>
                  </ul>
                </div>
                <div className="details-service">
                  <button className="mb-4">Services</button>
                  <div>
                    <div className="row gx-xl-5 gx-lg-5 gx-md-4 gx-sm-0 IE-border">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="hotel-Included">
                          <h4>
                            <FontAwesomeIcon icon={faCircleCheck} /> Included
                          </h4>
                          <div class="content-green">
                            {ele.include_service.map((e) => {
                              return (
                                <>
                                  <p>
                                    <FontAwesomeIcon icon={faCheck} />{" "}
                                    {e.service_name}
                                  </p>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="hotel-excluded">
                          <h4>
                            <FontAwesomeIcon icon={faCircleXmark} /> Excluded
                          </h4>
                          <div className="content-red">
                            {ele.exclude_service.map((e1) => {
                              return (
                                <>
                                  <p>
                                    <FontAwesomeIcon icon={faCheck} />{" "}
                                    {e1.service_name}
                                  </p>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-service my-4">
                  <button className="mb-4">Itinerary</button>
                </div>
                <div className="itenary-days">
                  {ele.Itinaries.map((e3, i) => {
                    return (
                      <>
                        <div className="mb-4">
                          <h3>Day {i + 1}</h3>
                          <div className="itenary-days1">
                            <ul>
                              <li>{e3.title}</li>
                              <li>{e3.activity}</li>
                            </ul>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        );
      })}
      <section className="py-4">
        <div className="container">
          <div className="hotels-section">
            <div className="last-hotels">
              <h3>Hotels</h3>

              {/* <!--------------------------- part-1 ---------------------------------------------> */}

              <div className="hotel-president">
                <div className="row gx-5 p-2 second-changes">
                  <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                    <div className="image-center">
                      <img
                        src="/hotel1.1.png"
                        alt=""
                        className="image-changes"
                      />
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 first-change">
                    <div className="d-inline-block mb-md-3 mb-xl-4">
                      <span className="d-flex day1-2  text-left align-items-center">
                        <div className="day-1-2 py-1 font-changes">
                          <h6>Day 1-2</h6>
                        </div>
                        <div className=" font-changes">
                          <h6 className="mb-1 pe-5">Hotel Presisent</h6>
                          <p className="mb-0 text-start">
                            <i class="fa-solid fa-location-dot me-2"></i>
                            Dalhousie
                          </p>
                        </div>
                      </span>
                    </div>
                    <div className="hotels-star mb-md-1 mb-xl-3">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                    </div>
                    <div className="hotels-footer">
                      <p>
                        Satdhara Road, Gandhi Chowk Dalhousie Dalhousie - <br />{" "}
                        176304 Himachal Pradesh, India
                      </p>
                      <h6>More Details</h6>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--------------------------- part-2 ---------------------------------------------> */}

              <div className="hotel-president my-4">
                <div className="row gx-5 p-2 second-changes">
                  <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                    <div className="image-center">
                      <img
                        src="/hotel1.2.png"
                        alt=""
                        className="image-changes"
                      />
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 first-change">
                    <div className="d-inline-block mb-md-3 mb-xl-4">
                      <span className="d-flex day1-2  text-left align-items-center">
                        <div className="day-1-2 py-1 font-changes">
                          <h6>Day 3</h6>
                        </div>
                        <div className=" font-changes">
                          <h6 className="mb-1 pe-5">Hotel Mohan Palace</h6>
                          <p className="mb-0 text-start">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            Manali
                          </p>
                        </div>
                      </span>
                    </div>
                    <div className="hotels-star mb-md-1 mb-xl-3">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                    </div>
                    <div className="hotels-footer">
                      <p>
                        Left Bank, Naggar Road, Aleo, New Manali, District Kullu{" "}
                        <br /> (H.P.) Aleo-New Manali, Manali - Himachal Pradesh
                      </p>
                      <h6>More Details</h6>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--------------------------- part-3 ---------------------------------------------> */}

              <div className="hotel-president">
                <div className="row gx-5 p-2 second-changes">
                  <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                    <div className="image-center">
                      <img
                        src="/hotel1.3.png"
                        alt=""
                        className="image-changes"
                      />
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 first-change">
                    <div className="d-inline-block mb-md-3 mb-xl-4">
                      <span className="d-flex day1-2  text-left align-items-center">
                        <div className="day-1-2 py-1 font-changes">
                          <h6>Day 4-5</h6>
                        </div>
                        <div className=" font-changes">
                          <h6 className="mb-1 pe-5">Snow Retreat</h6>
                          <p className="mb-0 text-start">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            Dharmashala
                          </p>
                        </div>
                      </span>
                    </div>
                    <div className="hotels-star mb-md-1 mb-xl-3">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="p-1"
                        style={{ color: "yellow" }}
                      />
                    </div>
                    <div className="hotels-footer">
                      <p>
                        Naddi, McLeod Ganj, Dharamshala, Himachal Pradesh <br />{" "}
                        176219
                      </p>
                      <h6>More Details</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------modal--------------------------- */}

      {/* 1 */}

      <Modal
        show={show1}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="m-o p-2"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4" style={{ background: "#D6D6D6" }}></div>
            <div className="col-md-8">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose1}>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ fontSize: "25px", cursor: "pointer" }}
                />
              </div>
              <div className="text-center pt-5">
                <img
                  src="/modal1.png"
                  className="img-fluid"
                  style={{ marginRight: "10px" }}
                />
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginRight: "8px",
                    color: "#09646D",
                  }}
                >
                  Where would you like to go?
                </p>
              </div>
              <div style={{ marginLeft: "15px", marginRight: "30px" }}>
                <div className="py-1">
                  <p
                    className="cmnp"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    To
                  </p>
                  <input
                    type="text"
                    placeholder="To"
                    className="w-100 p-2"
                    onChange={txt}
                    name="departure"
                    style={{
                      border: "1px solid #B8B8B8",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="py-1">
                  <p
                    className="cmnp"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    From
                  </p>
                  <input
                    type="text"
                    placeholder="From"
                    onChange={txt}
                    className="w-100 p-2"
                    name="destination"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #B8B8B8",
                    }}
                  />
                </div>
              </div>
              <Row className="py-1">
                {categoty.map((ele) => {
                  return (
                    <>
                      <div className="col-6">
                        <div className="py-1 mx-md-5 mx-3">
                          <div>
                            <div className="py-1 d-flex">
                              <FormCheck
                                className="p-0 m-0"
                                name="Historical"
                                value={ele._id}
                                checked={selectedValues.includes(`${ele._id}`)}
                                onChange={() =>
                                  handleCheckboxChange(`${ele._id}`)
                                }
                              />
                              <span className="ms-1">{ele.category_name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Row>

              <div className="py-2 w-75 ps-4 mx-4">
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                  onClick={click1}
                >
                  Next
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 2 */}
      <Modal
        show={show2}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back1}
                />
              </div>
            </div>
            <div className="col-md-8 px-4 mx-md-0 mx-2">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose2}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div className="text-center pt-5">
                <h5
                  className="py-1 pb-3"
                  style={{ fontWeight: "600", marginRight: "10px" }}
                >
                  Give Us More Info
                </h5>
              </div>
              <div className="py-1">
                <p className="cmnp" style={{ fontWeight: "500" }}>
                  Age Group
                </p>
              </div>
              <Row>
                <div className="col-4 p-1 m-0 text-center">
                  <div className="py-1">
                    <p className="cmnp" style={{ fontSize: "10px" }}>
                      Adults <span style={{ color: "#B4B4B4" }}>(12+ yrs)</span>
                    </p>
                    <div class="anyone">
                      <FontAwesomeIcon icon={faUser} />
                      <select name="total_adult" id="cars" onChange={txt}>
                        <option value="1">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-4 p-1 m-0 text-center">
                  <div className="py-1">
                    <p className="cmnp" style={{ fontSize: "10px" }}>
                      Children{" "}
                      <span style={{ color: "#B4B4B4" }}>(2 to 12 yrs)</span>
                    </p>
                    <div class="anyone">
                      <FontAwesomeIcon icon={faUser} />
                      <select name="total_child" id="cars" onChange={txt}>
                        <option value="1">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-4 p-1 m-0 text-center">
                  <div className="py-1">
                    <p className="cmnp" style={{ fontSize: "10px" }}>
                      Infant{" "}
                      <span style={{ color: "#B4B4B4" }}>(0 to 2 yrs)</span>
                    </p>
                    <div class="anyone">
                      <FontAwesomeIcon icon={faUser} />
                      <select name="Infant" id="cars" onChange={txt}>
                        <option value="1">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Row>
              <div className="py-1">
                <p className="cmnp" style={{ fontWeight: "500" }}>
                  Travel by
                </p>
              </div>
              <Row>
                <div class="col-6 p-1 m-0 px-3">
                  <div class="check-box check-box-0 text-center p-0 m-0">
                    <label for="whyNeed" class="w-75">
                      <input
                        type="checkbox"
                        id="whyNeed"
                        name="Flight"
                        value="Flight"
                        checked={selectedValuesTravel.includes("Flight")}
                        onChange={() => handleCheckboxChangeTravel("Flight")}
                      />
                      <span class="klass w-100">
                        <FontAwesomeIcon icon={faPlane} /> Flight
                      </span>
                    </label>
                  </div>
                </div>
                <div class="col-6 p-1 m-0 px-3">
                  <div>
                    <div class="check-box check-box-1  m-0 p-0">
                      <label for="whyWas" class="w-75 text-center">
                        <input
                          type="checkbox"
                          id="whyWas"
                          name="Train"
                          value="Train"
                          checked={selectedValuesTravel.includes("Train")}
                          onChange={() => handleCheckboxChangeTravel("Train")}
                        />
                        <span class="klass1 w-100">
                          <FontAwesomeIcon icon={faTrain} /> Train
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-6 p-1 m-0 px-3">
                  <div class="check-box check-box-2 text-center m-o p-0">
                    <label for="whySo" class="w-75">
                      <input
                        type="checkbox"
                        id="whySo"
                        name="Bus"
                        value="Bus"
                        checked={selectedValuesTravel.includes("Bus")}
                        onChange={() => handleCheckboxChangeTravel("Bus")}
                      />
                      <span class="klass2 w-100">
                        <FontAwesomeIcon icon={faBus} /> Bus
                      </span>
                    </label>
                  </div>
                </div>
                <div class="col-6 p-1 m-0 px-3">
                  <div class="check-box check-box-3  m-0 p-0">
                    <label for="whyMe" class="w-75 text-center">
                      <input
                        type="checkbox"
                        id="whyMe"
                        name="Car"
                        value="Car"
                        checked={selectedValuesTravel.includes("Car")}
                        onChange={() => handleCheckboxChangeTravel("Car")}
                      />
                      <span class="klass3 w-100">
                        <FontAwesomeIcon icon={faCar} /> Cab/Car
                      </span>
                    </label>
                  </div>
                </div>
              </Row>

              <div className="text-start">
                <p className="cmnp" style={{ fontWeight: "500" }}>
                  Need any personal care?{" "}
                </p>
                <div className="p-2 pb-0">
                  <input
                    type="radio"
                    name="personal_care"
                    value="yes"
                    onChange={txt}
                    id="YN"
                  />
                  <label for="radio" className="ps-1">
                    Yes
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="personal_care"
                    value="no"
                    onChange={txt}
                    id="YN"
                  />
                  <label for="radio" className="ps-1">
                    No
                  </label>
                </div>
              </div>
              <div className="py-2 w-75 ps-4 mx-4">
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                  onClick={click2}
                >
                  Next
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 3 */}
      <Modal
        show={show3}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back2}
                />
              </div>
            </div>
            <div className="col-md-8 px-4">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose3}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  textAlign: "center",
                  margin: "20px 0px",
                }}
              >
                Departure Between
              </div>
              <div className="container text-center">
                <Calendar onChange={setDate} value={date} />
              </div>
              <div className="py-2 w-75 ps-4 mx-sm-5 mx-4">
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                  onClick={click3}
                >
                  Next <FontAwesomeIcon icon={faChevronRight} />
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 4 */}
      <Modal
        show={show4}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back3}
                />
              </div>
            </div>
            <div className="col-md-8 container px-5">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose4}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    margin: "50px 0px 30px",
                  }}
                >
                  Hotel Type
                </div>
              </div>
              <Row>
                <div className="col-6">
                  <div>
                    <div className="py-1 d-flex">
                      <FormCheck
                        className="p-0 m-0"
                        name="2 Star"
                        value="2 Star"
                        checked={selectedValuesHotel.includes("2 Star")}
                        onChange={() => handleCheckboxChangeHotel("2 Star")}
                      />
                      <span className="ms-1">2 Star</span>
                    </div>
                    <div className="py-1 d-flex">
                      <FormCheck
                        className="p-0 m-0"
                        name="4 Star"
                        value="4 Star"
                        checked={selectedValuesHotel.includes("4 Star")}
                        onChange={() => handleCheckboxChangeHotel("4 Star")}
                      />
                      <span className="ms-1">4 Star</span>
                    </div>
                    <div className="py-1 d-flex">
                      <FormCheck
                        className="p-0 m-0"
                        name="Any"
                        value="Any"
                        checked={selectedValuesHotel.includes("Any")}
                        onChange={() => handleCheckboxChangeHotel("Any")}
                      />
                      <span className="ms-1">Any</span>
                    </div>
                    <div className="py-1 d-flex">
                      <FormCheck
                        className="p-0 m-0"
                        name="Budget Property"
                        value="Budget Property"
                        checked={selectedValuesHotel.includes(
                          "Budget Property"
                        )}
                        onChange={() =>
                          handleCheckboxChangeHotel("Budget Property")
                        }
                      />
                      <span className="ms-1">Budget Property</span>
                    </div>
                  </div>
                </div>
                <div className="col-6 ps-md-4">
                  <div className="mx-lg-5 options">
                    <div className="py-1 d-flex">
                      <FormCheck
                        className="p-0 m-0"
                        name="3 Star"
                        value="3 Star"
                        checked={selectedValuesHotel.includes("3 Star")}
                        onChange={() => handleCheckboxChangeHotel("3 Star")}
                      />
                      <span className="ms-1">3 Star</span>
                    </div>
                    <div className="py-1 d-flex">
                      <FormCheck
                        className="p-0 m-0"
                        name="5 Star"
                        value="5 Star"
                        checked={selectedValuesHotel.includes("5 Star")}
                        onChange={() => handleCheckboxChangeHotel("5 Star")}
                      />
                      <span className="ms-1">5 Star</span>
                    </div>
                    <div className="py-1 d-flex">
                      <FormCheck
                        className="p-0 m-0"
                        name="No"
                        value="No"
                        checked={selectedValuesHotel.includes("No")}
                        onChange={() => handleCheckboxChangeHotel("No")}
                      />
                      <span className="ms-1">No</span>
                    </div>
                  </div>
                </div>
              </Row>
              <div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    margin: "30px 0",
                  }}
                >
                  Meals Type
                </div>
                <Row>
                  <div className="col-6">
                    <div>
                      <div className="py-1 d-flex">
                        <FormCheck
                          className="p-0 m-0"
                          name="Breakfast"
                          value="Breakfast"
                          checked={selectedValuesMeal.includes("Breakfast")}
                          onChange={() => handleCheckboxChangeMeal("Breakfast")}
                        />
                        <span className="ms-1">Breakfast</span>
                      </div>
                      <div className="py-1 d-flex">
                        <FormCheck
                          className="p-0 m-0"
                          name="Lunch"
                          value="Lunch"
                          checked={selectedValuesMeal.includes("Lunch")}
                          onChange={() => handleCheckboxChangeMeal("Lunch")}
                        />
                        <span className="ms-1">Lunch</span>
                      </div>
                      <div className="py-1 d-flex">
                        <FormCheck
                          className="p-0 m-0"
                          name="Dinner"
                          value="Dinner"
                          checked={selectedValuesMeal.includes("Dinner")}
                          onChange={() => handleCheckboxChangeMeal("Dinner")}
                        />
                        <span className="ms-1">Dinner</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 ps-4">
                    <div className="mx-lg-5 options">
                      <div className="py-1 d-flex">
                        <FormCheck
                          className="p-0 m-0"
                          name="meal_type"
                          value="Any"
                          onChange={txt}
                          // checked={selectedValuesMealType.includes("Any")}
                          // onChange={() => handleCheckboxChangeMealType("Any")}
                        />
                        <span className="ms-1">Any</span>
                      </div>
                      <div className="py-1 d-flex">
                        <FormCheck
                          className="p-0 m-0"
                          name="meal_type"
                          value="Veg"
                          onChange={txt}
                          // checked={selectedValuesMealType.includes("Veg")}
                          // onChange={() => handleCheckboxChangeMealType("Veg")}
                        />
                        <span className="ms-1">Veg</span>
                      </div>
                      <div className="py-1 d-flex">
                        <FormCheck
                          className="p-0 m-0"
                          name="meal_type"
                          value="Non-Veg"
                          onChange={txt}
                          // checked={selectedValuesMealType.includes("Non-Veg")}
                          // onChange={() =>
                          //   handleCheckboxChangeMealType("Non-Veg")
                          // }
                        />
                        <span className="ms-1">Non-Veg</span>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
              <div className="py-2 w-75 ps-4 mx-4 mt-3">
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                  onClick={click4}
                >
                  Next <FontAwesomeIcon icon={faChevronRight} />
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 5 */}
      <Modal
        show={show5}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back4}
                />
              </div>
            </div>
            <div className="col-md-8 container px-5">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose5}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div className="TextareaFont">Need Any Extra Requirements?</div>
              <div>
                <textarea
                  name="additional_requirement"
                  id=""
                  // cols="55"
                  rows="10"
                  placeholder="Type Your Requirements..."
                  className="textareaCSS"
                  onChange={txt}
                ></textarea>
              </div>
              <div className="py-2 w-75 ps-4 mx-4 mt-3">
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                  onClick={click5}
                >
                  Next <FontAwesomeIcon icon={faChevronRight} />
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>

      {/* 6 */}
      <Modal
        show={show6}
        backdrop="static"
        keyboard={false}
        className="m-o p-2"
        size="lg"
      >
        <Modal.Body className="p-0">
          <Row>
            <div className="col-md-4 side">
              <div className="pt-2 ps-3">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "#09646D",
                    color: "#fff",
                    borderRadius: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                  onClick={back5}
                />
              </div>
            </div>
            <div className="col-md-8 container px-5">
              <div className="float-end pe-4 pt-2 p-2" onClick={handleClose6}>
                <FontAwesomeIcon icon={faXmark} className="cross" />
              </div>
              <div className="LastModel">
                <div
                  className="txtLast"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  User Details
                </div>
                <div>
                  <div className="mt-2 modal_6">
                    <input
                      type="text"
                      name="full_name"
                      onChange={txt}
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mt-4 modal_6">
                    <input
                      type="email"
                      name="email_address"
                      onChange={txt}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-4 modal_6">
                    <input
                      type="number"
                      name="mobile_no"
                      onChange={txt}
                      placeholder="Mobile No"
                    />
                  </div>
                  <div className="mt-4 modal_6">
                    <input
                      type="text"
                      name="city"
                      onChange={txt}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <div className="mt-3 txtLast">
                      <span
                        style={{
                          fontSize: "22px",
                          fontWeight: "400",
                          marginRight: "5px",
                        }}
                      >
                        Budget
                      </span>
                      <span>(minimum budget must be 5000)</span>
                    </div>
                    <div className="modal_6">
                      <input
                        type="number"
                        name="budget_per_person"
                        onChange={txt}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2 w-75 ps-4 mx-4 mt-3" onClick={CustomPackage}>
                <p
                  className="load_btn text-center"
                  style={{ cursor: "pointer" }}
                >
                  Submit
                </p>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Packega_details;
