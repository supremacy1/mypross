import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Frame1 from '../images/Frame1.png'
import back from '../images/back.jpg'
import Union from '../images/Union.svg'
import Vector1 from '../images/Vector1.svg'
import polygon from '../images/Polygon 1.svg'
import poly from '../images/Poly.svg'
import user from '../images/user.png'
import briefcase from '../images/briefcase.svg'
// import  '../css/mainbar.css';

const MainBar =() =>{

    


    return(
        <>
        
        <div className="maincontainer">
        {/* <h4 className="dtext">Already have an account?<Link to="/signup">signup</Link></h4> */}
        <div className="main">
            
            <div className="content">
                <div className="img">
            <img src={Union} className="lo" alt="lo"></img>
            
            <h1 className="lo">Oasis.</h1>
            
            </div>
            <p>“ <br></br>The passage experienced a surge in popularity 
            during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s 
                as desktop publishers bundled the text with their software.<br></br>Vincent Obi <img src={Vector1} className="log2" alt="log2"></img></p>
            </div>
        </div>
        {/* <h4 className="text">Already have an account?<Link to="/signup">signup</Link></h4> */}
        <div className="subcontent">
        
        <div className="content1">
            
                    <div className="head1">
                        <h3>Join Us!</h3>
                        <p>To begin this journey, tell us what type of <br></br>account you’d be opening.</p>
                    </div>
                    </div>
                    <div className="index">
                        <h3>Individual</h3>
                        <h5> Personal account to manage all you <br></br>activities.</h5>
                        <img src={polygon} className="logo" alt="logo" />

                        <img src={user} className="logo1" alt="logo1"></img>
                    </div>
                    <div className="index1">
                        <h3>Business</h3>
                        <p>Own or belong to a company, this is for you.</p>
                        <img src={poly} className="l1" alt="logo" />
                        <img src={briefcase} className="l"></img>
                    </div>
                    
        </div>
        </div>
        
        </>
    )
}
export default MainBar;