import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCircle,
  faCircleCheck,
  faCircleRadiation,
  faCircleXmark,
  faIndianRupeeSign,
  faLayerGroup,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { ids } from "../App";
import { bidContext } from "../App";
import { hotelName } from "../App";

function Compare_packega(props) {
  const { id, setId } = useContext(ids);
  console.log(id);

  const id1 = id[0];
  const id2 = id[1];
  const { bidData, setBidData } = useContext(bidContext);
  console.log(bidData);
  const [bidDetails, setBidDetails] = useState([]);
  const [bidDetails1, setBidDetails1] = useState([]);
  const { hotel, setHotel } = useContext(hotelName);
  console.log(hotel);

  const DetailsBid = async () => {
    const res = await fetch(
      `https://start-your-tour.onrender.com/bidpackage/biddetails?_id=${id1}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data[0]);
    setBidDetails(data.data[0]);
  };
  const DetailsBid1 = async () => {
    const res = await fetch(
      `https://start-your-tour.onrender.com/bidpackage/biddetails?_id=${id2}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data[0]);
    setBidDetails1(data.data[0]);
  };

  useEffect(() => {
    DetailsBid();
    DetailsBid1();
  }, []);

  return (
    <>
      <Header />

      <section className="py-3">
        <div className="container-fluid px-xl-5 px-lg-4 px-md-3 px-sm-2 ">
          <div bordered>
            <div className="text-center compare_packages_header py-2">
              <h3 className="cmnp mb-2">Compare Packages</h3>
              <p style={{ color: "#B8B8B8" }}>
                Compare packages and find your perfect match!
              </p>
            </div>
            <div>
              <table width={"100%"}>
                <thead>
                  <tr>
                    <th></th>
                    <th>{hotel[0]}</th>
                    <th>{hotel[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="size-500">
                      <FontAwesomeIcon icon={faCircleRadiation} /> Duration
                    </td>
                    <td>
                      {bidDetails.start_date1} to {bidDetails.end_date1}
                    </td>
                    <td>
                      {bidDetails1.start_date1} to {bidDetails1.end_date1}
                    </td>
                    {/* <td>22/08/2023 to 26/08/2023</td> */}
                  </tr>
                  <tr>
                    <td className="size-500">
                      <FontAwesomeIcon icon={faTag} /> Price
                    </td>
                    <td style={{ color: "#00B707" }}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {bidDetails.price_per_person}{" "}
                      <span style={{ color: "#B8B8B8" }}>| per person</span>
                    </td>
                    <td style={{ color: "#00B707" }}>
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {bidDetails1.price_per_person}{" "}
                      <span style={{ color: "#B8B8B8" }}>| per person</span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" style={{ background: "#09646D" }}>
                      <p className="w-100 text-white cmnp ps-2 py-2">
                        <FontAwesomeIcon icon={faLayerGroup} /> Overview
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Total Reviews</td>
                    <td>
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon
                        icon={faStar}
                        className=""
                        style={{ color: "#B8B8B8" }}
                      />{" "}
                      | 11,000
                      <span style={{ color: "#B8B8B8" }}>(Reviews)</span>
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon icon={faStar} className="c_icon" />
                      <FontAwesomeIcon
                        icon={faStar}
                        className=""
                        style={{ color: "#B8B8B8" }}
                      />{" "}
                      | 11,000
                      <span style={{ color: "#B8B8B8" }}>(Reviews)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Meals</td>
                    <td>
                      {/* {bidDetails.meal_required.length ? "Include" : "Exclude"} */}
                      Include
                    </td>
                    <td>
                      {/* {bidDetails1.meal_required.length ? "Include" : "Exclude"} */}
                      Include
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Sightseeing</td>
                    <td>{bidDetails.sightseeing}</td>
                    <td>{bidDetails1.sightseeing}</td>
                  </tr>
                  <tr>
                    <td className="size-500">Travel By</td>
                    <td>{bidDetails.travel_by}</td>
                    <td>{bidDetails1.travel_by}</td>
                  </tr>
                  <tr>
                    <td className="size-500">Categories</td>
                    <td>Historical, Adventure</td>
                    <td>Historical, Adventure</td>
                  </tr>
                  <tr>
                    <td className="size-500">Other Requirements </td>
                    <td>No other</td>
                    <td>No other</td>
                  </tr>
                  <tr>
                    <td colspan="3" style={{ background: "#09646D" }}>
                      <p className="w-100 text-white cmnp ps-2 py-2">
                        <FontAwesomeIcon icon={faBrush} /> Services
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">
                      <FontAwesomeIcon icon={faCircleCheck} /> Included
                    </td>
                    <td>
                      {/* <ul style={{ color: "#00B707" }}>
                        {bidDetails.include_services.map((ele) => {
                          return (
                            <>
                              <li>{ele.include_services_value}</li>
                            </>
                          );
                        })}
                      </ul> */}
                    </td>
                    <td>
                      {/* <ul style={{ color: "#00B707" }}>
                        {bidDetails1.include_services.map((ele) => {
                          return (
                            <>
                              <li>{ele.include_services_value}</li>
                            </>
                          );
                        })}
                      </ul> */}
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">
                      <FontAwesomeIcon icon={faCircleXmark} /> Excluded
                    </td>
                    <td>
                      {/* <ul style={{ color: "#E50000" }}>
                        {bidDetails.exclude_services.map((ele) => {
                          return (
                            <>
                              <li>{ele.exclude_services}</li>
                            </>
                          );
                        })}
                      </ul> */}
                    </td>
                    <td>
                      {/* <ul style={{ color: "#E50000" }}>
                        {bidDetails1.exclude_services.map((ele) => {
                          return (
                            <>
                              <li>{ele.exclude_services}</li>
                            </>
                          );
                        })}
                      </ul> */}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" style={{ background: "#09646D" }}>
                      <p className="w-100 text-white cmnp ps-2 py-2">
                        <img src="/vector1.png" className="img-fluid" />{" "}
                        Itinerary
                      </p>
                    </td>
                  </tr>
                  {/* <tr>
                    <td className="size-500">
                      <div>
                        {bidDetails.map((ele, i) => {
                          return (
                            <>
                              <li>Day {i}</li>
                            </>
                          );
                        })}
                      </div>
                    </td>
                    <td>
                      {bidDetails.map((ele) => {
                        return (
                          <>
                            <li>{ele.hotel_name}</li>
                            <li>{ele.activity}</li>
                          </>
                        );
                      })}
                    </td>
                    <td>
                      {bidDetails1.map((ele) => {
                        return (
                          <>
                            <li>{ele.hotel_name}</li>
                            <li>{ele.activity}</li>
                          </>
                        );
                      })}
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="size-500">Day 2</td>
                    <td>
                      <li>
                        City Tour:
                        <br />
                        Explore the city's landmarks and attractions on a guided
                        tour. This is a great way to learn about the history and
                        culture of the area while getting your bearings.
                        Depending on your interests, you may want to visit
                        museums, art galleries, or historical sites.
                      </li>
                    </td>
                    <td>
                      <li>
                        City Tour:
                        <br />
                        Explore the city's landmarks and attractions on a guided
                        tour. This is a great way to learn about the history and
                        culture of the area while getting your bearings.
                        Depending on your interests, you may want to visit
                        museums, art galleries, or historical sites.
                      </li>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Day 3</td>
                    <td>
                      <li>
                        Nature Excursion :<br />
                        Take a break from the city and explore the great
                        outdoors. Go hiking in a nearby national park or nature
                        reserve, take a scenic drive through the countryside, or
                        go on a guided nature walk.
                      </li>
                    </td>
                    <td>
                      <li>
                        Nature Excursion :<br />
                        Take a break from the city and explore the great
                        outdoors. Go hiking in a nearby national park or nature
                        reserve, take a scenic drive through the countryside, or
                        go on a guided nature walk.
                      </li>
                    </td>
                  </tr>
                  <tr>
                    <td className="size-500">Day 4</td>
                    <td>
                      <li>
                        {" "}
                        Adventure Activities :<br />
                        Get your adrenaline pumping with some adventure
                        activities like zip-lining, bungee jumping, or white
                        water rafting. If you prefer something more low-key, try
                        horseback riding, kayaking, or cycling.
                      </li>
                    </td>
                    <td>
                      <li>
                        {" "}
                        Adventure Activities :<br />
                        Get your adrenaline pumping with some adventure
                        activities like zip-lining, bungee jumping, or white
                        water rafting. If you prefer something more low-key, try
                        horseback riding, kayaking, or cycling.
                      </li>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Compare_packega;
