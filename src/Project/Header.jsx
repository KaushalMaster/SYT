import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faMobileScreenButton,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./css/index1.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FormCheck, FormControl, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [name, setName] = useState("");

  const token = localStorage.getItem("userToken");

  // validation state
  const [user, setUser] = useState({
    phone: "",
  });

  const [phoneerror, setPhoneerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [validDetails, setValidDetails] = useState("");

  // modal-1
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal-2
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // modal-3
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // moda;-4
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const clickon = () => {
    handleShow1(true);
    handleClose(false);
  };

  const clickon2 = () => {
    handleClose1(false);
    handleShow2(true);
  };

  const clickon3 = () => {
    handleClose2(false);
    handleShow3(true);
  };

  const txt = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);

  // validation
  const loginHandle = async (e) => {
    e.preventDefault();

    const { phone } = user;

    if (phone.length < 10 || password.length == 0) {
      if (phone.length == 0) {
        setPhoneerror("Enter Phone Number");
      } else {
        setPhoneerror("Enter Valid Phone Number");
      }
      setPassworderror("Enter Your Password");
      return;
    } else {
      const res = await fetch(
        "https://start-your-tour.onrender.com/user/loginAll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            phone: Number(phone),
            password,
            role: "customer",
          }),
        }
      );
      const data = await res.json();
      console.log(data);

      if (data.code == 200) {
        localStorage.setItem("userToken", data.data.token);
        handleClose(true);
      } else {
        setValidDetails("Enter Valid Details");
        return;
      }
    }
  };

  const profile = async () => {
    const res = await fetch(
      "https://start-your-tour.onrender.com/user/userprofile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const data = await res.json();
    console.log(data.data[0].user_details[0].name);
    setName(data.data[0].user_details[0].name);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    profile();
  });
  return (
    <>
      <div className="" style={{ borderBottom: "1px solid #000" }} bg="light">
        <Navbar expand="lg" className="px-lg-4 px-md-4 px-sm-2 px-2 nav_width">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand className="logo">START YOUR TOUR</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-right my-2 my-lg-0"
              style={{ maxHeight: "200px", marginLeft: "auto" }}
              navbarScroll
            >
              <Nav.Link href="" className="text-dark">
                <FontAwesomeIcon icon={faPhoneVolume} className="me-1" />
                99999 99999
              </Nav.Link>
              <NavLink
                to="/vendor/login"
                style={{ textDecoration: "none", lineHeight: "40px" }}
                className="text-dark"
              >
                <FontAwesomeIcon icon={faUser} className="me-1" />
                Travel Agent? Join Us
              </NavLink>
              {/* <Nav.Link href="/custom_requirement" className="text-dark">
                <FontAwesomeIcon icon={faUser} className="me-1" />
                Custom Requirement
              </Nav.Link> */}
              <Nav.Link href="" className="text-dark">
                <FontAwesomeIcon icon={faGift} className="me-1" />
                Offers
              </Nav.Link>
              <Nav.Link href="" className="text-dark">
                <FontAwesomeIcon icon={faMobileScreenButton} className="me-1" />
                Download App
              </Nav.Link>
            </Nav>
            {token ? (
              <div
                className="cmn p-2"
                style={{
                  backgroundColor: "#09646d",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleClickMenu}
              >
                <FontAwesomeIcon icon={faUser} /> {name}
              </div>
            ) : (
              <a
                href="#"
                className="log_btn w-0"
                onClick={handleShow}
                variant="primary"
              >
                Login
              </a>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <NavLink
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseMenu}>My Profile</MenuItem>
              </NavLink>
              <NavLink
                to="/custom_requirement"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseMenu}>My Requirements</MenuItem>
              </NavLink>
              <MenuItem onClick={handleCloseMenu}>My Booking</MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseMenu();
                  localStorage.clear("userToken");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* LOgin-page */}

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div>
              <Container>
                <div className="common_p ">
                  <div className="inerp p-4 border-1 pb-0">
                    <Row>
                      <div className="col">
                        <form>
                          <div>
                            <h6 style={{ fontWeight: "600", fontSize: "15px" }}>
                              LOG IN
                            </h6>
                            <p
                              style={{
                                margin: "0",
                                padding: "0",
                                fontSize: "10px",
                              }}
                            >
                              Enter Your Mobile No.
                            </p>
                            <input
                              type="number"
                              id="phone"
                              name="phone"
                              pattern="[0-9]"
                              onChange={txt}
                              maxLength={10}
                            />
                            {user.phone.length < 10 ? (
                              <span style={{ color: "red", fontSize: "12px" }}>
                                {phoneerror}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          <p
                            className="py-3"
                            style={{
                              margin: "0",
                              padding: "0",
                              fontSize: "10px",
                            }}
                          >
                            Enter Your Password
                          </p>
                          <div
                            style={{
                              position: "relative",
                            }}
                          >
                            <input
                              type={passwordVisible ? "text" : "password"}
                              id="password"
                              name="password"
                              value={password}
                              onChange={(txt, handlePasswordChange)}
                            />
                            <img
                              src={passwordVisible ? "/eye.png" : "/eye2.png"}
                              className="eye-image"
                              alt=""
                              style={{
                                height: "10px",
                                width: "15px",
                                position: "absolute",
                                top: "0",
                                bottom: "0",
                                right: "5%",
                                margin: "auto",
                                cursor: "pointer",
                              }}
                              onClick={togglePasswordVisibility}
                            />
                          </div>
                          {password.length <= 0 ? (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {passworderror}
                            </span>
                          ) : (
                            ""
                          )}
                          <p
                            href=""
                            className="text-danger pt-2 "
                            style={{
                              textDecoration: "none",
                              float: "right",
                              fontSize: "10px",
                              cursor: "pointer",
                            }}
                            onClick={clickon}
                          >
                            Forgate Your Password
                          </p>
                          <div className="d-flex justify-content-center w-100">
                            {validDetails.length ? (
                              <span
                                className="mb-0"
                                style={{ color: "red", fontSize: "12px" }}
                              >
                                {validDetails}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="pb-2 text-center my-3">
                            <button
                              type="submit"
                              style={{
                                color: "white",
                                background: "#09646D",
                                fontSize: "14px",
                                padding: "8px 10px",
                                border: "none",
                                borderRadius: "8px",
                              }}
                              onClick={loginHandle}
                            >
                              Log in
                            </button>
                            <p style={{ fontSize: "10px" }} className="pt-3">
                              Don’t Have an Account?
                              <a
                                onClick={() => navigate("/user/registration")}
                                style={{
                                  textDecoration: "none",
                                  cursor: "pointer",
                                }}
                              >
                                Create Account
                              </a>
                              ?
                            </p>
                          </div>
                        </form>
                      </div>

                      <div className="col">
                        <img src="/login.png" className="img-fluid" />
                      </div>
                    </Row>
                  </div>
                </div>
              </Container>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      {/* Forgot-page */}

      <div>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Body>
            <div>
              <Container>
                <div className="text-center">
                  <div className="text-center py-2 pt-3">
                    <h6
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      Please Enter Your register Mobile No:-
                    </h6>
                  </div>
                  <div className="text-center px-5 py-2">
                    <input type="number" />
                  </div>
                  <div className="pt-5">
                    <button
                      type="submit"
                      style={{
                        color: "white",
                        background: "#09646D",
                        fontSize: "14px",
                        padding: "8px 30px",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      onClick={clickon2}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Body>
            <Container>
              <div>
                <div className="common p-4 text-center">
                  <div>
                    <h6
                      className="text-center"
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      Enter O.T.P
                    </h6>
                  </div>
                  <div className="px-5">
                    <Row>
                      <div className="col m-2">
                        <FormControl />
                      </div>
                      <div className="col m-2">
                        <FormControl />
                      </div>
                      <div className="col m-2">
                        <FormControl />
                      </div>
                      <div className="col m-2">
                        <FormControl />
                      </div>
                    </Row>
                  </div>
                  <div className="pt-3">
                    <button
                      type="submit"
                      style={{
                        color: "white",
                        background: "#09646D",
                        fontSize: "14px",
                        padding: "8px 30px",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      onClick={clickon3}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </Modal.Body>
        </Modal>
      </div>

      <div>
        <Modal show={show3} onHide={handleClose3}>
          <Modal.Body>
            <div>
              <div>
                <div className="py-2 pt-3">
                  <h6
                    className="text-center"
                    style={{ fontWeight: "600", fontSize: "20px" }}
                  >
                    Set New Password
                  </h6>
                </div>
                <div className="text-center py-2">
                  <p className="cmnp">New Password</p>
                  <input type="tell" />
                </div>
                <div className="text-center py-2">
                  <p className="cmnp">Conform New Password</p>
                  <input type="tell" />
                </div>
                <div className="pt-5 text-center">
                  <button
                    type="submit"
                    style={{
                      color: "white",
                      background: "#09646D",
                      fontSize: "14px",
                      padding: "8px 30px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
// className='order order-2 order-xl-1 order-lg-1 order-md-2 order-sm-2'
// className='log_btn order order-1 order-xl-2 order-lg-2 order-md-1 order-sm-1'
export default Header;
