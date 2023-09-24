import React,{useContext} from "react";
import frontpage from '../css/frontpage.css'
// import { Link } from 'react-router-dom';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
// import Frame1 from '../images/Frame1.png'
// import back from '../images/back.jpg'
import Union from '../images/Union.svg'
import Vector1 from '../images/Vector1.svg'
import polygon from '../images/Polygon 1.svg'
import poly from '../images/Poly.svg'
// import user from '../images/user.png'
// import briefcase from '../images/briefcase.svg'

const Frontpage = () => {





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
                <div className="fsubcontainer2">
                    <h4>Already have an account? <Link style={{textDecoration: 'none'}}  to ='/signup'>Signup</Link></h4><br></br>
                     {/* <a href="signup">signup</a> */}
                    <h2>Join Us!</h2>
                    <p>To begin this journey, tell us what type of <br></br>account you’d be opening.</p>
                    <div className="index">
                        <div className="img1">
                        <img src={polygon} className="logo" alt="logo" />
                        {/* <img src={user} className="logo1" alt="logo1"></img>  */}
                        </div>
                        <div className="text1">
                        <h3>Individual</h3>
                        <h5> Personal account to manage all you <br></br>activities.</h5>
                        </div>
                    </div>
                    <div className="index1">
                        <div className="img">
                        <img src={poly} className="in" alt="logo" />
                        {/* <img src={briefcase} className="in1" alt="logo"></img> */}
                        </div>
                        <div className="text">
                        <h3>Business</h3>
                        <p>Own or belong to a company, this is for you.</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Frontpage;