import React, { useContext, useEffect, useState, useRef } from "react";
import {
  faArrowLeft,
  faBell,
  faBrush,
  faCheck,
  faCheckCircle,
  faClipboard,
  faEnvelopeOpen,
  faLayerGroup,
  faLocationPin,
  faStar,
  faUser,
  faXmark,
  faXmarkCircle,
  faPlus,
  faPenToSquare,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import Overview from "./Overview";
import Itinerary from "./Itinerary";
import Hotels from "./Hotels";
import Services from "./Services";
import {
  Route,
  Router,
  Routes,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";
import My_pannel from "./My_pannel";
import Header from "../Project/Header";
import "../Project/css/index1.css";
import Header2 from "./Header2";
import { Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import { day } from "../App";
import { ids } from "../App";
// import { colourOptions } from "../data";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Submit_package_form(props) {
  const editorRef = useRef(null);
  const [includeList, setIncludeList] = useState([]);
  const [excludeList, setExcludeList] = useState([]);

  const handleIncludeClick = () => {
    const includeData = editorRef.current.editor.getData();
    setIncludeList([...includeList, includeData]);
    editorRef.current.editor.setData("");
  };

  const handleExcludeClick = () => {
    const excludeData = editorRef.current.editor.getData();
    setExcludeList([...excludeList, excludeData]);
    editorRef.current.editor.setData("");
  };

  const clearEditor = () => {
    editorRef.current.editor.setData("");
  };
  const { dayNumber, setDayNumber } = useContext(day);
  const { bidId, setBidId } = useContext(ids);
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = React.useState(0);
  const [details, setDetails] = useState([]);
  const [detailsData, setDetailsData] = useState({
    total_adult: "",
    Infant: "",
    total_child: "",
    destination_category: "",
    hotel_types: "",
    meal_types: "",
    meal_required: "",
    other_Services: "",
    price_per_person: "",
    total_days: "",
    personal_care: "",
    travel_by: "",
    total_nights: "",
    total_amount: "",
  });
  const [include_services, setInclude_services] = useState({});

  const txtInclude = (event, editor) => {
    const data = editor.getData();
    setInclude_services(data);
  };

  const [exclude_services, setExclude_services] = useState({});

  const txtExclude = (event, editor) => {
    const data = editor.getData();
    setExclude_services(data);
  };

  const handleIncludeDelete = (index) => {
    const updatedList = [...includeList];
    updatedList.splice(index, 1);
    setIncludeList(updatedList);
  };

  const handleExcludeDelete = (index) => {
    const updatedList = [...excludeList];
    updatedList.splice(index, 1);
    setExcludeList(updatedList);
  };

  // const [days, setDays] = useState([]);

  const [pricePerPerson, setPricePerPerson] = useState({
    budget_per_person: "",
  });
  const txtPrice = (e) => {
    const { name, value } = e.target;
    setPricePerPerson({ ...pricePerPerson, [name]: value });
  };
  console.log(pricePerPerson);

  const [hotel, setHotel] = useState([]);
  const txtHotel = (e) => {
    setHotel(e);
  };

  const [meals, setMeals] = useState();
  const txtMeals = (e) => {
    setMeals(e);
  };

  const [mealsType, setMealsType] = useState();
  const txtMealType = (e) => {
    setMealsType(e);
  };

  const [travel, setTravel] = useState();
  const txtTravel = (e) => {
    setTravel(e);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const txtData = (e) => {
    const { name, value } = e.target;
    setDetailsData({ ...detailsData, [name]: value });
  };
  console.log(detailsData);

  const updateTotalDays = (index) => (e) => {
    const { value } = e.target;
    setDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index].total_days = value;
      return updatedDetails;
    });
  };

  const colourOptions = [
    { value: "5 Star", label: "5 Star" },
    { value: "4 Star", label: "4 Star" },
    { value: "3 Star", label: "3 Star" },
    { value: "2 Star", label: "2 Star" },
    { value: "Any", label: "Any" },
    { value: "No", label: "No" },
    { value: "Budget Property", label: "Budget Property" },
  ];
  const colourOptions1 = [
    { value: "Veg", label: "Veg" },
    { value: "Non-Veg", label: "Non-Veg" },
    { value: "Any", label: "Any" },
  ];
  const colourOptions2 = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];
  const colourOptions3 = [
    { value: "Flight", label: "Flight" },
    { value: "Train", label: "Train" },
    { value: "Bus", label: "Bus" },
    { value: "Cab/Car", label: "Cab/Car" },
  ];

  const [selectedHotelTypes, setSelectedHotelTypes] = useState([]);
  const [selectedMealTypes, setSelectedMealTypes] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [selectedTravelBy, setSelectedTravelBy] = useState([]);

  const updateHotelTypes = (selectedOptions) => {
    setSelectedHotelTypes(selectedOptions);
  };

  const updateMealTypes = (selectedOptions) => {
    setSelectedMealTypes(selectedOptions);
  };

  const updateMeals = (selectedOptions) => {
    setSelectedMeals(selectedOptions);
  };

  const updateTravelBy = (selectedOptions) => {
    setSelectedTravelBy(selectedOptions);
  };

  // const [bidId, setBidId] = useState("");
  // console.log(bidId);

  const BidId = sessionStorage.getItem("BidId");

  const Requirement = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(
      `https://start-your-tour.onrender.com/customrequirements/details?_id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data);
    setDetails(data.data);
    setPricePerPerson(data.data[0].budget_per_person);
    // setDays(data.data[0].total_days);
  };

  // const BidId = bidId;

  const [it, setIt] = useState([]);
  console.log(it);

  const getItinerary = async () => {
    const token = localStorage.getItem("vendorToken");
    const BidId = sessionStorage.getItem("BidId");
    const res = await fetch(
      `https://start-your-tour.onrender.com/itinerary?bid_id=${BidId}`,
      {
        method: "GET",
        headers: {
          // Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data[0]);
    setIt(data.data);
  };

  const getBidDetails = async (e) => {
    e.preventDefault();
    const {
      total_adult,
      Infant,
      total_child,
      destination_category,
      other_Services,
      price_per_person,
      total_days,
      personal_care,
      total_nights,
      total_amount,
    } = detailsData;

    const { budget_per_person } = pricePerPerson;
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(`https://start-your-tour.onrender.com/bidpackage`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        custom_requirement_id: id,
        total_adult,
        Infant,
        total_child,
        destination_category,
        hotel_types: selectedHotelTypes
          .map((option) => option.value)
          .join(", "),
        meal_types: selectedMealTypes.map((option) => option.value).join(", "),
        meal_required: selectedMeals.map((option) => option.value).join(", "),
        other_Services: other_Services,
        price_per_person: budget_per_person || Number(price_per_person),
        total_days: Number(total_days),
        personal_care,
        travel_by: selectedTravelBy.map((option) => option.value).join(", "),
        total_nights,
        total_amount: Number(total_amount),
        include_services: includeList,
        exclude_services: excludeList,
      }),
    });
    const data = await res.json();
    console.log(data.data);
    setBidId(data.data._id);
    sessionStorage.setItem("BidId", data.data._id);

    // if (data.code == 200) {
    //   navigate("/vendor/Submit-form");
    // }
  };

  const DisplayBid = async () => {
    const token = localStorage.getItem("vendorToken");

    const res = await fetch(
      `https://start-your-tour.onrender.com/bidpackage/displaybidpackages?custom_requirement_id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data[0]._id);
    // setBidId(data.data[0]._id);
  };

  useEffect(() => {
    getItinerary();
    Requirement();
    DisplayBid();
  }, [id]);

  // const [editorCount, setEditorCount] = useState(1);

  const handleAddDay = () => {
    //   // setEditorCount((prevCount) => prevCount + 1);
    //   // setEditorCount((prevCount) => prevCount + 1);
    //   {
    //     editorCount < days
    //       ? setEditorCount((prevCount) => prevCount + 1)
    //       : setEditorCount((prevCount) => prevCount + 0);
    //   }
  };

  // const handleDeleteDay = (index) => {
  //   setEditorCount((prevCount) => prevCount - 1);
  //   // Perform any additional cleanup or logic here
  // };

  return (
    <>
      <Header2 />
      <div className="costum_container">
        <My_pannel />
        <div style={{ backgroundColor: "whitesmoke" }}>
          <section style={{ backgroundColor: "#fff" }}>
            <div className="costum_container">
              <div>
                <div className="pt-1 align-items-center second_navbar">
                  <div className="ps-md-4 ps-sm-2 ps-2 pe-xl-5 pe-lg-5 pe-md-3 pe-sm-2 pe-2 align-items-center d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <a
                        onClick={() =>
                          navigate(`/display/custom/details/${id}`)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="p-2 cmnbkg"
                        />
                      </a>
                      <span className=" ps-2">Submit Form</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="p-2 cmnclr cmnicon"
                        />
                      </a>
                      <a href="">
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          className="p-2 cmnclr cmnicon ms-2"
                        />
                      </a>
                      <div
                        className="d-flex  align-items-center cmn py-1 px-2 ms-2"
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="cmnclr cmnicon p-2"
                        />
                        <p className="cmnp ps-1">User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="p-3">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Services" {...a11yProps(1)} />
                  <Tab label="Itinerary" {...a11yProps(2)} />
                  <Tab label="Hotels" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <section>
                  <div className="costum_container">
                    <div className="p-3">
                      {details.map((ele, index) => {
                        return (
                          <>
                            <Form>
                              <Row
                                className="green_border gy-2 gx-5 margin_left_right"
                                style={{ backgroundColor: "#ffffff" }}
                              >
                                <p>
                                  <h3>
                                    {ele.departure} To {ele.destination}
                                  </h3>
                                </p>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Adult (12+ years)</p>
                                  <input
                                    type="number"
                                    name="total_adult"
                                    id=""
                                    value={ele.total_adult}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">
                                    Infants (2 to 12 years)
                                  </p>
                                  <input
                                    type="number"
                                    name="Infant"
                                    id=""
                                    value={ele.Infant}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Child (0 to 2 years)</p>
                                  <input
                                    type="number"
                                    name="total_child"
                                    id=""
                                    value={ele.total_child}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Total Person</p>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={
                                      ele.total_adult + ele.Infant + ele.Infant
                                    }
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Personal Care</p>
                                  <input
                                    type="text"
                                    name="personal_care"
                                    id=""
                                    value={
                                      ele.personal_care == true ? "Yes" : "No"
                                    }
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-1">
                                  <div className="col-6 py-2">
                                    <p className="mb-2">Total Days</p>
                                    <input
                                      type="text"
                                      name="total_days"
                                      onChange={txtData}
                                    />
                                  </div>
                                  <div className="col-6 py-2">
                                    <p className="mb-2">Total Night</p>
                                    <input
                                      type="text"
                                      name="total_nights"
                                      id=""
                                      onChange={txtData}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Destination Category</p>
                                  <input
                                    type="text"
                                    name="destination_category"
                                    id=""
                                    value={ele.destination_category
                                      .map((e) => e.category_name)
                                      .join(", ")}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-1">
                                  <div className="col-xl-6 py-2">
                                    <p className="mb-2">Hotel Type</p>
                                    <input
                                      type="text"
                                      name="hotel_type"
                                      value={ele.hotel_type
                                        .map((e) => e)
                                        .join(", ")}
                                      onChange={txtData}
                                    />
                                  </div>
                                  <div className="col-xl-6 mt-xl-4">
                                    <p className="mb-2 mt-3"></p>
                                    <Select
                                      isMulti
                                      name="New_hotel_type"
                                      options={colourOptions}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={updateHotelTypes}
                                    />
                                  </div>
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-1">
                                  <div className="col-xl-6 py-2">
                                    <p className="mb-2">Meal Type</p>
                                    <input
                                      type="text"
                                      name="meal_type"
                                      id=""
                                      value={ele.meal_type}
                                      onChange={txtData}
                                    />
                                  </div>
                                  <div className="col-xl-6 mt-xl-4">
                                    <p className="mb-2 mt-3"></p>
                                    <Select
                                      // defaultValue={[
                                      //   colourOptions1[2],
                                      //   colourOptions1[3],
                                      // ]}
                                      isMulti
                                      name="colors"
                                      options={colourOptions1}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={txtMealType}
                                    />
                                  </div>
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-2">
                                  <div className="col-xl-6 py-2">
                                    <p className="mb-2">Meals</p>
                                    <input
                                      type="text"
                                      name="meal_require"
                                      id=""
                                      value={ele.meal_require
                                        .map((e) => e)
                                        .join(", ")}
                                      onChange={txtData}
                                    />
                                  </div>
                                  <div className="col-xl-6 mt-xl-4">
                                    <p className="mb-2 mt-3"></p>
                                    <Select
                                      // defaultValue={[
                                      //   colourOptions1[2],
                                      //   colourOptions1[3],
                                      // ]}
                                      isMulti
                                      name="colors"
                                      options={colourOptions2}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={txtMeals}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">
                                    Approx Departure Between
                                  </p>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={
                                      ele.start_date + " To " + ele.end_date
                                    }
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1 ms-1">
                                  <div className="col-xl-6 py-2">
                                    <p className="mb-2">Travel By</p>
                                    <input
                                      type="text"
                                      name="travel_by"
                                      id=""
                                      value={ele.travel_by
                                        .map((e) => e)
                                        .join(", ")}
                                      onChange={txtData}
                                    />
                                  </div>
                                  <div className="col-xl-6 mt-xl-4">
                                    <p className="mb-2 mt-3"></p>
                                    <Select
                                      // defaultValue={[
                                      //   colourOptions1[2],
                                      //   colourOptions1[3],
                                      // ]}
                                      isMulti
                                      name="colors"
                                      options={colourOptions3}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                      onChange={txtTravel}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Other Requirement</p>
                                  <input
                                    type="text"
                                    name="additional_requirement"
                                    id=""
                                    value={ele.additional_requirement}
                                    onChange={txtData}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Price Per Person</p>
                                  <input
                                    type="text"
                                    name="budget_per_person"
                                    value={pricePerPerson.budget_per_person}
                                    onChange={txtPrice}
                                  />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 py-1">
                                  <p className="mb-2">Total Amount</p>
                                  <input
                                    type="text"
                                    name="total_amount"
                                    id=""
                                    value={
                                      pricePerPerson.budget_per_person *
                                      (ele.total_adult +
                                        ele.Infant +
                                        ele.Infant)
                                    }
                                    onChange={txtData}
                                  />
                                </div>

                                <div className="col-12  text-end sing_up_button">
                                  <Button
                                    type="submit"
                                    className="w-xl-25 w-lg-25 w-md-25 w-sm-25 w-25"
                                    onClick={() => setValue(1)}
                                  >
                                    Next
                                  </Button>
                                </div>
                              </Row>
                            </Form>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <section>
                  <div className="costum_container">
                    <div
                      className="service_border"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div className="py-2 itinerary_header">
                        <p className="cmnp">Include / Exclude</p>
                      </div>

                      {/* include */}

                      <div className="cmn py-3">
                        <div className="border_bottom_2">
                          {includeList.map((includeItem, index) => (
                            <>
                              <div
                                className="border_bottom_2_width ps-4 py-1"
                                style={{ borderBottom: "1px solod #09646D" }}
                              >
                                <div
                                  key={index}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: includeItem,
                                    }}
                                  ></div>
                                  <button
                                    onClick={() => handleIncludeDelete(index)}
                                    style={{
                                      marginLeft: "auto",
                                      border: "none",
                                      background: "none",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </button>
                                </div>
                                <div className="">
                                  <ButtonGroup
                                    aria-label="Basic example"
                                    className="text-end"
                                  >
                                    <Button
                                      style={{
                                        background: "#09646D",
                                        color: "#fff",
                                        borderRadius: "10px 0 0 10px",
                                        border: "none",
                                      }}
                                      className="text-end"
                                    >
                                      Include
                                    </Button>
                                    <Button
                                      style={{
                                        background: "#FFF",
                                        color: "#B8B8B8",
                                        border: "none",
                                      }}
                                    >
                                      Exclude
                                    </Button>
                                  </ButtonGroup>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>

                        {/* exclude */}
                        <div className="border_bottom_2">
                          {excludeList.map((excludeItem, index) => (
                            <>
                              <div
                                className="border_bottom_2_width ps-4 py-1"
                                style={{ borderBottom: "1px solod #09646D" }}
                              >
                                <div
                                  key={index}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: excludeItem,
                                    }}
                                  ></div>
                                  <button
                                    onClick={() => handleExcludeDelete(index)}
                                    style={{
                                      marginLeft: "auto",
                                      border: "none",
                                      background: "none",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                  </button>
                                </div>
                                <div className="">
                                  <ButtonGroup
                                    aria-label="Basic example"
                                    className="text-end"
                                  >
                                    <Button
                                      style={{
                                        background: "#FFF",
                                        color: "#B8B8B8",
                                        border: "none",
                                      }}
                                      className="text-end"
                                    >
                                      Include
                                    </Button>
                                    <Button
                                      style={{
                                        background: "red",
                                        color: "#FFF",
                                        border: "none",
                                        borderRadius: "0 10px 10px 0",
                                      }}
                                    >
                                      Exclude
                                    </Button>
                                  </ButtonGroup>
                                </div>
                              </div>
                            </>
                          ))}
                          {/* {excludeList.length == 0 ? (
                              ""
                            ) : (
                              <div className="">
                                <ButtonGroup
                                  aria-label="Basic example"
                                  className="text-end"
                                >
                                  <Button
                                    style={{
                                      background: "#FFF",
                                      color: "#B8B8B8",
                                      border: "none",
                                    }}
                                    className="text-end"
                                  >
                                    Include
                                  </Button>
                                  <Button
                                    style={{
                                      background: "red",
                                      color: "#B8B8B8",
                                      border: "none",
                                      borderRadius: "0 10px 10px 0",
                                    }}
                                  >
                                    Exclude
                                  </Button>
                                </ButtonGroup>
                              </div>
                            )} */}
                        </div>
                      </div>

                      <div>
                        <div>
                          <div className="pt-4 mb-1">
                            <p className="itinerary_header mb-0">
                              Enter Services
                            </p>
                          </div>
                          <div className="py-1">
                            <CKEditor editor={ClassicEditor} ref={editorRef} />
                          </div>
                        </div>
                        <div className="py-3 pt-3 text-end">
                          <button
                            style={{
                              backgroundColor: "#155E75",
                              color: "#fff",
                              padding: "8px 40px",
                              border: "none",
                            }}
                            onClick={handleIncludeClick}
                          >
                            Include
                          </button>
                          <button
                            variant="primary"
                            className="ms-2"
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              padding: "8px 40px",
                              border: "none",
                            }}
                            onClick={handleExcludeClick}
                          >
                            Exclude
                          </button>
                        </div>
                      </div>
                      {/* <div>
                        <div className="pt-4 mb-1">
                          <p className="itinerary_header mb-0">
                            Exclude Services
                          </p>
                        </div>
                        <div className="py-1">
                          <CKEditor
                            editor={ClassicEditor}
                            onChange={txtExclude}
                            name="exclude_services"
                          />
                        </div>
                      </div> */}
                      <div className="col-12  text-end sing_up_button">
                        <Button
                          type="submit"
                          className="w-xl-25 w-lg-25 w-md-25 w-sm-25 w-25"
                          onClick={getBidDetails}
                        >
                          Submit
                        </Button>
                      </div>
                      <div className="py-3 pt-3 text-end">
                        <Button
                          style={{
                            background: "#0000",
                            color: "#BBBB",
                            padding: "8px 40px",
                            border: "1px solid #BBBB",
                          }}
                          onClick={() => setValue(0)}
                        >
                          Back
                        </Button>
                        <Button
                          variant="primary"
                          className="ms-2"
                          style={{
                            backgroundColor: "#155E75",
                            padding: "8px 40px",
                          }}
                          onClick={() => setValue(2)}
                        >
                          next
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <section>
                  <div className="costum_container">
                    <div className=" p-3">
                      <div>
                        <Form>
                          <Row
                            className="itinerary_padding green_border gy-2 gx-5 margin_left_right"
                            style={{ backgroundColor: "#ffffff" }}
                          >
                            <div className="col-12">
                              <div className="row">
                                <div className="col-6">
                                  <span className="text-20 itinerary_header">
                                    Day wise Itinerary plan
                                  </span>
                                </div>
                                {details.map((ele) => {
                                  return (
                                    <>
                                      <div className="col-6 d-flex align-items-center justify-content-end">
                                        <p className="cmnclr cmnp">Add days</p>
                                        <NavLink
                                          to={`/vendor/add-itineries/${ele._id}`}
                                        >
                                          <a>
                                            <FontAwesomeIcon
                                              icon={faPlus}
                                              className="cmnbkg p-2 ms-2"
                                              style={{ cursor: "pointer" }}
                                            />
                                          </a>
                                        </NavLink>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                              {it.map((ele) => {
                                return (
                                  <>
                                    <div
                                      className="col-5 me-5"
                                      style={{
                                        border: "1px solid grey",
                                        borderRadius: "15px",
                                      }}
                                    >
                                      <div className="d-flex justify-content-between">
                                        <p
                                          style={{
                                            backgroundColor: "#09646d",
                                            color: "white",
                                            padding: "5px 10px",
                                            display: "inline-block",
                                          }}
                                        >
                                          Day {ele.day}
                                        </p>
                                        <p
                                          style={{
                                            backgroundColor: "#09646d",
                                            color: "white",
                                            padding: "1px 5px",
                                            textDecoration: "none",
                                            cursor: "pointer",
                                          }}
                                          onClick={() => {
                                            navigate(
                                              `/vendor/add-itineriesEdit/${ele.bid_id}`
                                            );
                                            setDayNumber(ele.day);
                                          }}
                                        >
                                          EDIT
                                        </p>
                                      </div>
                                      <div className="p-3">
                                        <div>
                                          <div className="mb-2">
                                            <label htmlFor="text">
                                              Add Location
                                            </label>
                                            <input
                                              type="text"
                                              name=""
                                              id=""
                                              value={ele.title}
                                            />
                                          </div>
                                          <div className="mb-2">
                                            <label htmlFor="text">
                                              Add Photo
                                            </label>
                                            <input type="file" name="" id="" />
                                          </div>
                                          <div className="mb-2">
                                            <label htmlFor="text">
                                              Add Hotel Name
                                            </label>
                                            <input
                                              type="text"
                                              name=""
                                              id=""
                                              value={ele.hotel_name}
                                            />
                                          </div>
                                          <div className="mb-2">
                                            <a>Description</a>
                                            <textarea
                                              name=""
                                              id=""
                                              value={ele.activity}
                                              style={{
                                                width: "100%",
                                                height: "150px",
                                              }}
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>

                            <div className="col-12">
                              <div className="py-2 pt-3 text-end">
                                <Button
                                  style={{
                                    background: "#0000",
                                    color: "#BBBB",
                                    padding: "8px 40px",
                                    border: "1px solid #BBBB",
                                  }}
                                  onClick={() => setValue(1)}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="primary"
                                  className="ms-2"
                                  type="submit"
                                  style={{
                                    backgroundColor: "#155E75",
                                    padding: "8px 40px",
                                  }}
                                  onClick={() => setValue(3)}
                                >
                                  Next
                                </Button>
                              </div>
                            </div>
                          </Row>
                        </Form>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <section>
                  <div className="costum_container">
                    <div className="p-3">
                      <div
                        className="green_border hotels_padding"
                        style={{ backgroundColor: "#ffffff" }}
                      >
                        <div className="px-3">
                          <Form>
                            <Row className="">
                              <div className="col-12 d-flex justify-content-between">
                                <span className="itinerary_header text-20 cmnclr h-100 d-flex justify-content-left text-start align-items-center">
                                  Hotel & Food
                                </span>
                                <div className="d-flex align-items-center float-end">
                                  <p className="cmnclr cmnp">Add Hotel</p>
                                  <a
                                    onClick={() =>
                                      navigate("/vendor/add-hotel")
                                    }
                                    style={{ cursor: "pointer" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faPlus}
                                      className="cmnbkg p-2 ms-2"
                                    />
                                  </a>
                                </div>
                              </div>
                              {details.map((ele) => {
                                return (
                                  <>
                                    <div
                                      className="col-lg-6 col-md-6 col-sm-6"
                                      style={{ margin: "auto" }}
                                    >
                                      <div className="inner_green_border p-2">
                                        <span className="cmnp p-2 cmnclr">
                                          DAY 1
                                        </span>
                                        <div className="float-end">
                                          <FontAwesomeIcon
                                            icon={faPenToSquare}
                                            className="p-1 cmnclr"
                                          />
                                          <FontAwesomeIcon
                                            icon={faTrash}
                                            className="p-1 cmnclr"
                                          />
                                        </div>
                                      </div>
                                      <div className="inner_green_border py-3 my-3 px-4">
                                        <span className="itinerary_header text-20 cmnclr h-100 d-flex justify-content-left text-start align-items-center">
                                          Hotel & Food
                                        </span>
                                        <div className="margin_left_right mt-3">
                                          <p className="mb-1" htmlFor="">
                                            Hotel name
                                          </p>
                                          <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="mb-2"
                                            style={{ width: "100%" }}
                                          />
                                          <br />
                                          <p className="mb-1" htmlFor="">
                                            Hotel address
                                          </p>
                                          <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="mb-2"
                                            style={{ width: "100%" }}
                                          />
                                          <br />
                                          <p className="mb-1" htmlFor="">
                                            Hotel photo
                                          </p>
                                          <input
                                            type="file"
                                            name=""
                                            id=""
                                            className="mb-2"
                                            style={{ width: "100%" }}
                                          />
                                          <br />
                                          <p className="mb-1" htmlFor="">
                                            Hotel city
                                          </p>
                                          <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="mb-2"
                                            style={{ width: "100%" }}
                                          />
                                          <br />
                                          <p className="mb-1" htmlFor="">
                                            Hotel state
                                          </p>
                                          <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="mb-2"
                                            style={{ width: "100%" }}
                                          />
                                          <br />
                                          <div className="mb-2">
                                            <p className="mb-1" htmlFor="">
                                              Hotel description
                                            </p>
                                            <textarea
                                              name=""
                                              id=""
                                              style={{
                                                width: "100%",
                                                height: "150px",
                                              }}
                                            ></textarea>
                                          </div>
                                          <div>
                                            <p className="mb-1" htmlFor="">
                                              Hotel highlights
                                            </p>
                                            <textarea
                                              name=""
                                              id=""
                                              style={{
                                                width: "100%",
                                                height: "150px",
                                              }}
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </Row>
                            <div className="py-2 pt-3 text-end">
                              <Button
                                style={{
                                  background: "#0000",
                                  color: "#BBBB",
                                  padding: "8px 40px",
                                  border: "1px solid #BBBB",
                                }}
                                onClick={() => setValue(2)}
                              >
                                Back
                              </Button>
                              <Button
                                variant="primary"
                                className="ms-2"
                                type="submit"
                                style={{
                                  backgroundColor: "#155E75",
                                  padding: "8px 40px",
                                }}
                                // onClick={() => setValue(3)}
                              >
                                Submit
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submit_package_form;
