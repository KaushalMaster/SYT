import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faB,
  faFaceFrown,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Facebook, FacebookRounded } from '@mui/icons-material';
import React from "react";
import { Link, Navigate } from "react-router-dom";
import Blog1 from "./Blog1";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { login } from "../Vendor/Re_values";
import { NavLink } from "react-router-dom";

function Footer(props) {
  const [show1, setShow1] = useState(false);
  const [pass, setPass] = useState({
    old_password: "",
    npassword: "",
    new_password: "",
  });

  const Close = () => setShow1(false);
  const Show = () => setShow1(true);
  // const [goToHome, setGoToHome] = useState(false);
  const Click = () => {
    alert("Your password has been changed.!");
  };
  // if (goToHome) {
  //   return <Navigate to="/blog" />;
  // }

  const { handleBlur, handleChange, errors, handleSubmit, values, touched } =
    useFormik({
      validationSchema: login,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  const txt = (e) => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
  };

  const changePassword = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");

    const { old_password, new_password } = setPass;

    const res = await fetch(
      "https://start-your-tour.onrender.com/user/updatepassword",
      {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          old_password,
          new_password,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <footer>
        <div className="submission py-5">
          <div className="container">
            <div className="row submission-text">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <ul>
                  <li>
                    <h6>Startyourtour</h6>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <NavLink to="/blog" style={{ textDecoration: "none" }}>
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <a href="">Testimonials</a>
                  </li>
                  <li>
                    <a href="">Guides</a>
                  </li>
                  <li>
                    <a href="">Visa</a>
                  </li>
                  <li>
                    <a href="">Press</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <ul className="ay-2">
                  <li>
                    <h6>Policy</h6>
                  </li>
                  <li>
                    <a href="">Frequently Asked Questions</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy</a>
                  </li>
                  <li>
                    <a href="">Cancellations</a>
                  </li>
                  <li>
                    <a href="">Sitemap</a>
                  </li>
                  <li>
                    <a href="/profile">My profile</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <p href="" onClick={Show} style={{ cursor: "pointer" }}>
                      Forgot Password
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <ul className="py-2">
                  <li>
                    <h6>Talk to us</h6>
                  </li>
                  <li>
                    <a href="mailto: info@startourtour.com">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="me-2 fs-5"
                      />
                      info@startourtour.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 99999 99999">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="me-2 fs-5"
                      />
                      99999 99999
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 99999 99999">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="me-2 fs-5"
                      />
                      99999 99999
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <ul className="mt-5 ps-0">
                    <li>
                      <h6>Sign up for travel ideas!</h6>
                    </li>
                    <li>
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Your email"
                        className="px-3 py-1 rounded"
                      />
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <ul className="py-2">
                  <li>
                    <h6>Social Media</h6>
                  </li>
                  <li>
                    <i className="fa-brands fa-facebook mb-3"></i>
                  </li>
                  <img src="/facebook-icon.png" alt="" className="img-fluid" />
                  <li className="mt-2">
                    <img src="/insta-icon.png" alt="" className="img-fluid" />
                  </li>
                  <li className="mt-2">
                    <img src="/twitter-icon.png" alt="" className="img-fluid" />
                  </li>
                  <li className="mt-2">
                    <img src="/link-icon.png" alt="" className="img-fluid" />
                  </li>
                  <li className="mt-3">
                    <p>Startyourtour Private Limited.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Modal show={show1} onHide={Close} style={{ borderRadius: "0px" }}>
        <Modal.Body>
          <div className="p-3">
            <h1>Set New Password</h1>
            <Form onSubmit={handleSubmit}>
              <div className="py-2">
                <p className="cmnp text_20">Old Password</p>
                <input
                  type="password"
                  className="w-100 p-1"
                  placeholder="Chirag@123"
                  name="old_password"
                  onChange={txt}
                />
              </div>
              <div className="py-2">
                <p className="cmnp text_20">New Password</p>
                <input
                  type="password"
                  className="w-100 p-1"
                  placeholder="Chirag@123"
                  name="npassword"
                  onChange={txt}
                />
              </div>
              <div className="py-2">
                <p className="cmnp text_20">Confirm New Password</p>
                <input
                  type="password"
                  className="w-100 p-1"
                  placeholder="Chirag@123"
                  name="new_password"
                  onChange={txt}
                />
              </div>
              <div className="text-center pt-3">
                <button
                  href=""
                  className="top-a c_btn2 text-20"
                  onClick={changePassword}
                  type="Submit"
                >
                  Next
                </button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Footer;
