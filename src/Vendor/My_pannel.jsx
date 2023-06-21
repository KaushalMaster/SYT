import React from "react";
import { Nav } from "react-bootstrap";
import "../Project/css/index1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faCube,
  faGear,
  faHome,
  faHotel,
  faMapLocationDot,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function My_pannel(props) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="position_sticky">
        <ul className="side_nav_list mb-0">
          <li onClick={() => navigate("/vendor/home-page")}>
            <a>
              <FontAwesomeIcon icon={faHome} className="" />
            </a>
            <span>Home</span>
          </li>
          <li className="py-2">
            <a href="/Vector">
              <FontAwesomeIcon icon={faBarsProgress} className="" />
            </a>
            <span>Home</span>
          </li>
          <li onClick={() => navigate("/display/custom")}>
            <a>
              <FontAwesomeIcon icon={faCube} className="" />
            </a>
            <span>Package</span>
          </li>
          <li className="py-2">
            <a onClick={() => navigate("/vendor/Booked-packega")}>
              <FontAwesomeIcon icon={faMapLocationDot} className="" />
            </a>
            <span>Booked</span>
          </li>
          <li>
            <a href="/Hotal">
              <FontAwesomeIcon icon={faHotel} className="" />
            </a>
            <span>Home</span>
          </li>
          <li className="py-2">
            <a href="/Vector">
              <FontAwesomeIcon icon={faVectorSquare} className="" />
            </a>
            <span>Home</span>
          </li>
          <li>
            <a href="/setting">
              <FontAwesomeIcon icon={faGear} className="" />
            </a>
            <span>Home</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default My_pannel;
