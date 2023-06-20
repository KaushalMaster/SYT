/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Project/css/index1.css";
import Header2 from "./Header2";
import { Form, Row } from "react-bootstrap";
import My_pannel from "./My_pannel";
import { useEffect } from "react";
import { Itineries } from "../App";
import { ids } from "../App";

const AddItineries = () => {
  const navigate = useNavigate();
  const { tineriesId, setItineriesId } = useContext(Itineries);
  const { bidId, setBidId } = useContext(ids);
  console.log(bidId);

  const [itineriesData, setItineriesData] = useState({
    day: "",
    title: "",
    photo: "",
    hotel_name: "",
    activity: "",
  });
  // const [bidId, setBidId] = useState();
  // console.log(bidId);

  const { id } = useParams();

  const txt = (e) => {
    const { name, value } = e.target;
    setItineriesData({ ...itineriesData, [name]: value });
  };
  console.log(itineriesData);

  const DisplayBid = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(
      `http://54.89.214.143:3000/bidpackage/displaybidpackages?custom_requirement_id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // setBidId(data.data[0]._id);
    console.log(data);
  };

  const BidId = sessionStorage.getItem("BidId");

  const AddItineriesData = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("vendorToken");

    const { day, title, photo, hotel_name, activity } = itineriesData;

    // const formData = new FormData();
    // formData.append("bid_id", bidId);
    // formData.append("day", day);
    // formData.append("title", title);
    // formData.append("photo", photo);
    // formData.append("hotel_name", hotel_name);
    // formData.append("activity", activity);

    const res = await fetch("http://54.89.214.143:3000/itinerary/addBid", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bid_id: BidId,
        day,
        title,
        photo,
        hotel_name,
        activity,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (data.code == 200) {
      navigate(`/vendor/Submit_package_form/${id}`);
    }
  };

  useEffect(() => {
    DisplayBid();
  }, []);

  return (
    <>
      <Header2 />
      <div className="costum_container">
        <My_pannel />
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
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div
                        className="col-5 me-5"
                        style={{
                          border: "1px solid grey",
                          borderRadius: "15px",
                        }}
                      >
                        <div className="p-3">
                          <div>
                            <div className="mb-2">
                              <label htmlFor="text">Day</label>
                              <input type="text" name="day" onChange={txt} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Location</label>
                              <input type="text" name="title" onChange={txt} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Photo</label>
                              <input type="file" name="photo" onChange={txt} />
                            </div>
                            <div className="mb-2">
                              <label htmlFor="text">Add Hotel Name</label>
                              <input
                                type="text"
                                name="hotel_name"
                                onChange={txt}
                              />
                            </div>
                            <div className="mb-2">
                              <a>Description</a>
                              <textarea
                                name="activity"
                                style={{
                                  width: "100%",
                                  height: "150px",
                                }}
                                onChange={txt}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "end" }}>
                          <button
                            className="m-3"
                            style={{
                              width: "160px",
                              height: "40px",
                              backgroundColor: "#09646d",
                              border: "none",
                              color: "white",
                            }}
                            onClick={AddItineriesData}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddItineries;
