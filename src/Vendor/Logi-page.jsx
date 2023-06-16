import React from 'react';
import Header from '../Project/Header';
import { Container, Row } from 'react-bootstrap';
import '../Project/css/index1.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Logi_page(props) {

    const Navigate = useNavigate();


    const [vendorLogin, setVendorLogin] = useState({
        phone: "",
        password: "",
    });

    const [mobile_num, setMobile_num] = useState('');
    const [password, setPassword] = useState('');

    const vLogin = (e) => {
        const { name, value } = e.target;
        setVendorLogin({ ...vendorLogin, [name]: value })
    };
    console.log(vendorLogin);

    const LoginSubmit = async () => {

        const { phone, password } = vendorLogin;

        if (phone.length <= 0) {
            setMobile_num("enter your mobile number");
            setPassword("enter your password");
        } else {

            const res = await fetch("https://start-your-tour.onrender.com/user/loginAll", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone: Number(phone),
                    password,
                    "role": "agency"
                })
            })
            const data = await res.json();
            console.log(data);

            if (data.code == 200) {
                localStorage.setItem("vendorToken", data.data.token)
                Navigate("/vendor/home-page")
            }
        }
    }

    return (
        <>
            <Header />
            <section className='py-2'>
                <Container>
                    <div>
                        <div className='cmndes'>
                            <img src='/login1.png' className='img-fluid login_image' />
                            <div className='img_change_for'></div>
                        </div>
                        <div className='des login_container'>
                            <div className=''>
                                <div>
                                    <h6 className='mb-3' style={{ fontSize: '24px' }}>LOG IN</h6>
                                    <div className='mb-3'>
                                        <p className='cmnp mb-1' style={{ fontSize: '13px' }}>Enter Your Mobile No.</p>
                                        <input type='int' name='phone' onChange={vLogin} id='text' />
                                        {vendorLogin.phone.length <= 0 ? (
                                            <span style={{ color: "black", fontSize: "12px" }}>
                                                {mobile_num}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        <p className='cmnp text-end mt-1' style={{ fontSize: '10px' }}>0/10</p>
                                    </div>
                                    <div className='mb-5'>
                                        <p className='cmnp mb-1' style={{ fontSize: '13px' }}>Enter Your Password</p>
                                        <input type='password' name='password' onChange={vLogin} id='text' />
                                        {vendorLogin.password.length <= 0 ? (
                                            <span style={{ color: "black", fontSize: "12px" }}>
                                                {password}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        <p className='cmnp text-end mt-1' style={{ fontSize: '12px' }}>Forgot Password?</p>
                                    </div>
                                    <div className='des-btn mb-4' onClick={LoginSubmit}>
                                        <a className='text-light' style={{ cursor: 'pointer' }}>Log in</a>
                                    </div>
                                    <div className='des-que'>
                                        <span>Don’t Have an Account?</span> <p style={{ color: "white", fontSize: "10px", cursor: "pointer" }} onClick={() => Navigate("/vendor/registration")}>Create Account?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Logi_page;