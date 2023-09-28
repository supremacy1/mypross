import React,{useContext, useEffect, useState} from "react";
import frontpage from '../css/frontpage.css'
// import { Link } from 'react-router-dom';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
// import Frame1 from '../images/Frame1.png'
// import back from '../images/back.jpg'
import Union from '../images/Union.svg'
import Vector1 from '../images/Vector1.svg'
import polygon from '../images/Polygon 1.svg'
import poly from '../images/Poly.svg'
import user from '../images/user.png'
import briefcase from '../images/briefcase.svg'
import nig from '../images/nig.svg'
import cicle from '../images/cicle.svg'
const Frontpage = () => {
    
    
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      
    // useEffect(() => {
    //   // Create a function to update window width
    //   const handleResize = () => {
    //     setWindowWidth(window.innerWidth);
    //   };
  
    //   // Add an event listener to window resize
    //   window.addEventListener('resize', handleResize);
  
    //   // Clean up the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);
    const [isMobile, setIsMobile] = useState(Window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(Window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);




    return (
        <>
            <div className={"frontcontainer &{isMobile ? 'mobile' : 'desktop'}'}"}>
                <div className="fsubcontainer">
                <img src={Union} className="l1" alt="union"></img><h5>Osis</h5>
               
                    <p>“ <br></br>The passage experienced a surge in popularity<br></br>
                        during the 1960s when Letraset used it on their<br></br> dry-transfer sheets, and again during the 90s
                        <br></br>as desktop publishers bundled the text with their software.<br></br>Vincent Obi <img src={cicle} className="" alt="cd"></img></p>
                        <img src={Vector1} className="vector1" alt="union"></img>
                </div>
                <div className="fsubcontainer2">
                    <h4>Already have an account? <Link style={{textDecoration: 'none'}}  to ='/signup'>Signup</Link></h4><br></br>
                     {/* <a href="signup">signup</a> */}
                    <h2>Join Us!</h2>
                    <p>To begin this journey, tell us what type of <br></br>account you’d be opening.</p>
                    <div className="index">
                        <img src={polygon} className="logos" alt="logo" />
                        <img src={user} className="logos1" alt="logo1"></img> 
                        <Link style={{textDecoration: 'none'}} to='/signup'><h3>Individual</h3>
                        <h5> Personal account to manage all you <br></br>activities.</h5>
                        </Link>
                    </div>
                    <div className="index2">
                        <img src={poly} className="logoss" alt="logo" />
                        <img src={briefcase} className="logoss1" alt="logo1"></img> 
                        <Link style={{textDecoration: 'none'}} to='/signup'><h3>Business</h3>
                        <h5> Own or belong to a company, this is for you. </h5>
                        </Link>
                    </div>
           
                           </div>

            </div>
        </>
    )
}
export default Frontpage;