import React from "react";
import "./css/index1.css";
import Header from "./Header";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "../Vendor/Re_values";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Profile(props) {
  // const [goToPage,setGoToPage] = useState(false);
  // const [goToHome,setGoToHome] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userProfile, setUserProfile] = useState({
    name: "",
    email_address: "",
    city: "",
    state: "",
  });
  console.log(userProfile);

  const txt = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const [userProfile2, setUserProfile2] = useState({
    phone: "",
    password: "",
  });
  console.log(userProfile2);

  console.log(userProfile);

  const token = localStorage.getItem("userToken");
  const Profile = async () => {
    const res = await fetch(
      "https://start-your-tour.onrender.com/user/userprofile",
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data[0]);
    setUserProfile2(data.data[0]);
    setUserProfile(data.data[0].user_details[0]);
  };

  const btnn = async (e) => {
    e.preventDefault();

    const { name, email_address, city, state } = userProfile;
    const { phone, password } = userProfile2;
    const res = await fetch(
      "https://start-your-tour.onrender.com/user/changeprofile",
      {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email_address,
          phone: Number(phone),
          password,
          city,
          state,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  const [password, setPassword] = useState({
    old_password: "",
    npass: "",
    new_password: "",
  });

  const pass = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };
  console.log(password);

  const changePassword = async (e) => {
    e.preventDefault();

    const { old_password, new_password } = password;

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

  useEffect(() => {
    Profile();
  }, []);

  return (
    <>
      <Header />
      <section className="py-3">
        <Container>
          <div className="text-center">
            <img src="profile.png" className="img-fluid w-100" />
          </div>
          <div className="py-4">
            <Row>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="cmn my-1 cmnpointer">
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p
                      className="cmnp p-2 text-center text_22"
                      style={{ fontWeight: "600" }}
                    >
                      <FontAwesomeIcon icon={faPlane} /> My Booking
                    </p>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6" onClick={handleShow}>
                <div className="cmn my-1 cmnpointer">
                  <p
                    className="cmnp p-2 text-center text_22"
                    style={{ fontWeight: "600" }}
                  >
                    <FontAwesomeIcon icon={faPaintBrush} /> Change Password
                  </p>
                </div>
              </div>
            </Row>
          </div>
          <div className="py-2">
            <div className="cmn p-4">
              <div className="py-3 ">
                <img
                  src={userProfile.photo}
                  className="img-fluid float-end me-5"
                  style={{ height: "80%", width: "8%" }}
                />
                <h1 className="pt-2">Edit profile</h1>
              </div>
              <div className="pt-2">
                <Form>
                  <div className="py-2">
                    <div className="">
                      <div className="py-1">
                        <p className="cmnp text_20">First Name</p>
                        <Form.Control
                          type="text"
                          id="name"
                          name="name"
                          value={userProfile.name}
                          onChange={txt}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <p className="cmnp text_20">Email</p>
                    <Form.Control
                      type="text"
                      id="email"
                      name="email_address"
                      value={userProfile.email_address}
                      onChange={txt}
                    />
                  </div>
                  <div className="py-2">
                    <p className="cmnp text_20">Address</p>
                    <Form.Control
                      type="tell"
                      id="address"
                      name="address"
                      placeholder="22, Cradle, Bhat, Ahmedabad"
                    />
                  </div>
                  <div className="py-2">
                    <p className="cmnp text_20">Contact Number</p>
                    <Form.Control
                      type="Number"
                      name="phone"
                      value={userProfile2.phone}
                    />
                  </div>
                  <div>
                    <Row className="pt-2">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="">
                          <div className="py-1">
                            <p className="cmnp text_20">City</p>
                            <Form.Control
                              type="text"
                              id="city"
                              name="city"
                              value={userProfile.city}
                              onChange={txt}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="">
                          <div className="py-1">
                            <p className="cmnp text_20">State</p>
                            <Form.Control
                              type="text"
                              id="state"
                              name="state"
                              value={userProfile.state}
                              onChange={txt}
                            />
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                  <div className="py-2">
                    <p className="cmnp text_20">Password</p>
                    <Form.Control
                      type="tell"
                      id="password"
                      name="password"
                      value={userProfile2.password}
                    />
                  </div>
                  <div>
                    <Row>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <NavLink
                          to="/"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <div className="cmn my-1">
                            <p className="cmnp p-2 text-center text_20 cmnpointer">
                              Cancel
                            </p>
                          </div>
                        </NavLink>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="cmn my-1">
                          <button
                            className="cmnp p-2 text-center w-100 text_20"
                            style={{
                              background: "#09646D",
                              color: "#FFF",
                              cursor: "pointer",
                            }}
                            onClick={btnn}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </Row>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div>
              <Container>
                <div className="common p-4">
                  <Form>
                    <div>
                      <h2>Set New Password</h2>
                    </div>
                    <div className="py-2">
                      <p className="cmnp text_20">Old Password</p>
                      <input
                        type="password"
                        placeholder="Chirag@123"
                        className="w-100 p-1"
                        name="old_password"
                        onChange={pass}
                      />
                    </div>
                    <div className="py-2">
                      <p className="cmnp text_20">New Password</p>
                      <input
                        type="password"
                        placeholder="Chirag@123"
                        className="w-100 p-1"
                        name="npass"
                        onChange={pass}
                      />
                    </div>
                    <div className="py-2">
                      <p className="cmnp text_20">Confirm New Password</p>
                      <input
                        type="password"
                        placeholder="Chirag@123"
                        className="w-100 p-1"
                        name="new_password"
                        onChange={pass}
                      />
                    </div>
                    <div className="pt-4 text-center ">
                      <button
                        variant="primary"
                        className="w-50 text-white py-1"
                        onClick={changePassword}
                        style={{ backgroundColor: "#155E75" }}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </Container>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Profile;
