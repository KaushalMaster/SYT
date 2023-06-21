import React, { useState } from "react";
import { Button, Container, Form, FormCheck, Row } from "react-bootstrap";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { login } from "../Vendor/Re_values";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [stateError, setStateError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cityError, setCityError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [selectedGender, setSelectedGender] = useState("");

  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    state: "",
    email_address: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
    setSelectedGender(e.target.value);
  };
  console.log(registerData);

  const crtAccout = async (e) => {
    e.preventDefault();

    const { name, phone, state, email_address, city, gender } = registerData;

    if (
      name.length == 0 ||
      phone.length < 10 ||
      state.length == 0 ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email_address) ||
      password.length == 0 ||
      city.length == 0 ||
      selectedGender.length == 0
    ) {
      setNameError("Enter Your Name");
      if (phone.length == 0) {
        setPhoneError("Enter Phone Number");
      } else {
        setPhoneError("Enter Valid Phone Number");
      }
      setStateError("Enter Your State");
      setEmailError("Enter Valid Email");
      setPasswordError("Enter Your Password");
      setCityError("Enter Your City");
      setGenderError("Select Your Gender");
      return;
    }

    const res = await fetch("http://54.89.214.143:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        state,
        email_address,
        password,
        city,
        gender,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (data.code == 200) {
      navigate("/");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Header />
      <section className="py-5">
        <Container>
          <div className="px-5">
            <div className="cmn p-5">
              <div className="text-center">
                <p className="cmnp text_20">Sign Up to your account</p>
              </div>
              <div className="py-2">
                <Form>
                  <Row>
                    <div className="col-lg-6 col-md-6">
                      <div>
                        <div className="py-1 pt-2">
                          <p className="cmnp text-20">Enter Your Name</p>
                          <Form.Control
                            type="text"
                            name="name"
                            onChange={handleChange}
                          />
                          {registerData.name.length == 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {nameError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="py-1 pt-2">
                          <p className="cmnp text-20">Mobile</p>
                          <Form.Control
                            type="number"
                            name="phone"
                            onChange={handleChange}
                            maxLength={10}
                          />
                          {registerData.phone.length < 10 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {phoneError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="py-1 pt-3">
                          <p className="cmnp text-20">State</p>
                          <Form.Control
                            type="text"
                            name="state"
                            onChange={handleChange}
                          />
                          {registerData.state.length == 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {stateError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="py-1 pt-2">
                          <div>
                            <p className="cmnp">Gender</p>
                          </div>
                          <Row>
                            <div className="col-6">
                              <div>
                                <div class="check-box check-box-0 text-center p-0 m-0">
                                  <label /*for="whyNeed"*/ class="w-75">
                                    <input
                                      type="checkbox"
                                      name="gender"
                                      // id="whyNeed"
                                      value="male"
                                      checked={selectedGender === "male"}
                                      onChange={handleChange}
                                    />
                                    <span class="klass w-100">Male</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div>
                                <div>
                                  <div class="check-box check-box-1  m-0 p-0">
                                    <label
                                      // for="whyWas"
                                      class="w-75 text-center"
                                    >
                                      <input
                                        type="checkbox"
                                        name="gender"
                                        // id="whyWas"
                                        value="female"
                                        checked={selectedGender === "female"}
                                        onChange={handleChange}
                                      />
                                      <span class="klass1 w-100">Female</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Row>
                          {selectedGender.length == 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {genderError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div>
                        <div className="py-1 pt-2">
                          <p className="cmnp text-20">Email</p>
                          <Form.Control
                            type="Email"
                            name="email_address"
                            onChange={handleChange}
                          />
                          {registerData.email_address.length == 0 ||
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                            registerData.email_address
                          ) ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {emailError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className="py-1 pt-2"
                          style={{
                            position: "relative",
                          }}
                        >
                          <p className="cmnp text-20">Password</p>
                          <Form.Control
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={(handleChange, handlePasswordChange)}
                          />
                          <img
                            src="/eye2.png"
                            className="eye-image"
                            alt=""
                            style={{
                              height: "10px",
                              width: "15px",
                              position: "absolute",
                              top: "30px",
                              bottom: "0",
                              right: "5%",
                              margin: "auto",
                              cursor: "pointer",
                            }}
                            onClick={togglePasswordVisibility}
                          />
                        </div>
                        {password.length == 0 ? (
                          <span style={{ color: "red", fontSize: "12px" }}>
                            {passwordError}
                          </span>
                        ) : (
                          ""
                        )}
                        <div className="py-1 pt-3">
                          <p className="cmnp text-20">City</p>
                          <Form.Control
                            type="text"
                            name="city"
                            onChange={handleChange}
                          />
                          {registerData.city.length == 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {cityError}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="pt-3 text-center">
                    <a className="p-2 me-2 cmnpointer cmn cmnnone">
                      <img src="/google.png" className="img-fluid pe-1" />
                      Google
                    </a>
                    <a className="p-2 cmnpointer cmn cmnnone">
                      <img src="/facebook.png" className="img-fluid pe-1" />
                      Facebook
                    </a>
                  </div>
                  <div className="text-center py-2">
                    <p className="cmnp rgba">or Craete account</p>
                  </div>
                  <div className="py-2 text-center d-flex justify-content-center">
                    <FormCheck />
                    <p className="cmnp rgba ps-1">
                      I agree to Privacy Policy and Terms of services
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      className="log_btn"
                      onClick={crtAccout}
                      type="submit"
                    >
                      Create an account
                    </button>
                  </div>
                  <div className="text-center pt-3">
                    <p className="cmnp rgba">
                      Already have an account?{" "}
                      <span className="text-dark cmnpointer"> Sign In</span>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Signup;
