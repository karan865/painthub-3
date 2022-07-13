import React, { useState, useContext } from 'react'
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Signup/style.css";

function Signin() {

    const {  dispatch } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();
        console.log(`login ka data ` + data);

        if (res.status === 400 || res.status === 404 || res.status === 422 || !data) {
            //  window.alert("Invalid Details");
            toast.warn('❌ Invalid credentials ❌');
            //  history.push('/signin');
        } else {
            // we are sending the data too for toggel login logut 
            dispatch({ type: 'USER', payload: true });
            window.alert("User Login Successfully");
            console.log(`sigin ka ` + data.name);

            history.push('/services');
        }

        // console.log(`the email is ${email} and the password is ${password}`);
    }

    return (
        <>
            <div className="container boxx2">
                <div className="myCard m-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="myLeftCtn">
                                <form method="POST" className="myForm text-center">
                                    <header>Signin</header>

                                    <div className="form-group">
                                        <i className="fas fa-envelope"></i>
                                        <input className="myInput" type="email" email="email" id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your Email" />
                                    </div>

                                    <div className="form-group">
                                        <i className="fas fa-lock"></i>
                                        <input className="myInput" type="password" name="password" id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password" />
                                    </div>

                                    <input type="submit" name="signin" id="signin" className="form-submit butt" value="Log in"
                                        onClick={loginUser}
                                    />

                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="myRightCtn">
                                <div className="box"><header>welcome</header>

                                    <p>The world's largest selection of courses
                                        Choose from 130,000 online video courses with new additions published every month</p>
                                    <input type="button" className="butt_out" value="Learn More" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick rtl={false}
                pauseOnFocusLoss draggable pauseOnHover />
        </>
    )
}

export default Signin
