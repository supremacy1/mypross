import React, { useState } from "react";
import signup from '../css/signup.css';
import frontpage from '../css/frontpage.css'
// import { BrowserRouter, Link } from 'react-router-dom';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
// import Frame1 from '../images/Frame1.png'
import Union from '../images/Union.svg'
import google from '../images/google.svg'
import Vector1 from '../images/Vector1.svg'
import arrowback1 from '../images/arrowback1.svg'

// import polygon from '../images/Polygon 1.svg'
// import poly from '../images/Poly.svg'
// import user from '../images/user.png'
// import briefcase from '../images/briefcase.svg'

const Signup = () => {

    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [checkbox, setCheckbox] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    }





    return (
        <>
            <div className="frontcontainer">
                <div className="fsubcontainer">
                    <img src={Union} className="l1" alt="union"></img><h5>Osis</h5>

                    <p>“ <br></br>The passage experienced a surge in popularity<br></br>
                        during the 1960s when Letraset used it on their<br></br> dry-transfer sheets, and again during the 90s
                        <br></br>as desktop publishers bundled the text with their software.<br></br>Vincent Obi</p>
                    <img src={Vector1} className="vector1" alt="union"></img>
                </div>
                <div className="pat">
                <img src={arrowback1}className="arrow" alt="arrow"></img>
                <Link style={{textDecoration: 'none'}} className="bat" to='/frontpage'>Back</Link>
                {/* <a href="frontpage">Back</a> */}
                </div>
                {/* <h3 className="h">Back</h3> */}
                <div className="signupcontainer2">
                    <div className="head">
                        <h6 className="p2">STEP 01/03</h6><h4 className="p">Personal info</h4>
                    </div>
                    <h2>Register Individual Account!</h2>
                    <p>For the purpose of industery requalation, your<br></br>detail are requier</p>
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <label>
                            Your fullname*
                        </label><br></br>
                        <input
                            type="text"
                            // name="username"
                            // value={values.text}
                            value={fullname}
                            onChange={e => setFullname(e.target.value)}
                            required
                        /><br></br>
                        <label>
                            Email address*
                        </label><br></br>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        /><br></br>
                        <label>
                            Create password*
                        </label><br></br>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        /><br></br>
                        <input
                            type="checkbox"
                            value={checkbox}
                            onChange={e => setCheckbox(e.target.value)}
                            required
                        />
                        <label>
                            I agree to terms and condition
                        </label><br></br>
                        <button type='submit'>Register Account</button><br></br>
                        <span>or</span><br></br>
                        <button type='button' className="google"><img src={google} className="goole" alt="go"></img>Register with Google</button><br></br>
                    </form>
                </div>

            </div>


        </>
    )
}
export default Signup;