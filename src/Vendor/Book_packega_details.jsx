import React, { useEffect, useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Book_packega1 from "./Book_packega1";
import Book_packega2 from "./Book_packega2";
import My_pannel from "./My_pannel";
import Header from "../Project/Header";
import Header2 from "./Header2";
import { useNavigate, useParams } from "react-router-dom";

function Book_packega_details(props) {
  const navigate = useNavigate();

  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const DisplayBookPackageDetails = async () => {
    const token = localStorage.getItem("vendorToken");
    const res = await fetch(
      `http://54.89.214.143:3000/bookpackage/bookpackagedetail?_id=${id}`,
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
  };

  useEffect(() => {
    DisplayBookPackageDetails();
  }, []);

  return (
    <>
      {/* <section>
                <div>
                    <div className='cmn p-3 align-items-center'>
                        <div className='align-items-center'>
                            <a href=''><FontAwesomeIcon icon={faArrowLeft} className='p-2 cmnbkg' /></a>
                            <span className='cmnp ps-2'>Submitted Package Details</span>
                            <div className='float-end d-flex align-items-center'>
                                <a href=''><FontAwesomeIcon icon={faBell} className='p-2 cmnclr cmnicon'/></a>
                                <a href=''><FontAwesomeIcon icon={faEnvelopeOpen} className='p-2 cmnclr cmnicon ms-2'/></a>
                                <div className='d-flex  align-items-center cmn py-1 px-2 ms-2' style={{cursor:'pointer'}}>
                                    <FontAwesomeIcon icon={faUser} className='cmnclr cmnicon p-2'/>
                                    <p className='cmnp ps-1'>User</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
      {/* <section className='pt-2'>
                <Tabs className="mb-3">

                <Tab eventKey="home" title="Overview">
                    <Book_packega1 />
                </Tab>

                <Tab eventKey="profile" title="Payment">
                    <Book_packega2 />
                </Tab>

                </Tabs>
            </section> */}

      <Header2 />
      <div className="costum_container">
        <My_pannel />
        <div style={{ backgroundColor: "whitesmoke" }}>
          <section style={{ backgroundColor: "#fff" }}>
            <div className="costum_container">
              <div>
                <div className="pt-1 align-items-center second_navbar">
                  <div className="ps-xl-4 ps-lg-4 ps-md-4 ps-sm-2 ps-2 pe-xl-5 pe-lg-4 pe-md-4 pe-sm-2 pe-2 align-items-center d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <a
                        onClick={() => navigate("/vendor/Booked-packega")}
                        style={{ cursor: "pointer" }}
                      >
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="p-2 cmnbkg"
                        />
                      </a>
                      <span className=" ps-2">Booked Package Details</span>
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

          <Tabs className="mt-3 cba">
            <Tab eventKey="home" title="Overview">
              <Book_packega1 />
            </Tab>

            <Tab eventKey="profile" title="Payment">
              <Book_packega2 />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Book_packega_details;
