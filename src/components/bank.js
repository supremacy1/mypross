import React, { useState } from "react";
import bank from '../css/bank.css'
// import { BrowserRouter, Link } from 'react-router-dom';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
// import Frame1 from '../images/Frame1.png'
import Union from '../images/Union.svg'
import lock from '../images/lock.svg'
import Vector1 from '../images/Vector1.svg'
import arrowback1 from '../images/arrowback1.svg'

// import polygon from '../images/Polygon 1.svg'
// import poly from '../images/Poly.svg'
// import user from '../images/user.png'
// import briefcase from '../images/briefcase.svg'

const Bank = () => {

    const [bank, setBank] = useState();
 
    const handleSubmit = (event) => {
        event.preventDefault();
    }





    return (
        <>
            <div className="bankcontainer">
                <div className="banksubcontainer">
                    <img src={Union} className="bankuion" alt="union"></img><h5>Osis</h5>

                    <p>“ <br></br>The passage experienced a surge in popularity<br></br>
                        during the 1960s when Letraset used it on their<br></br> dry-transfer sheets, and again during the 90s
                        <br></br>as desktop publishers bundled the text with their software.<br></br>Vincent Obi</p>
                    <img src={Vector1} className="bankvector1" alt="union"></img>
                </div>
                <div className="bankcontainer2">
                <div className="bpat">
                <img src={arrowback1}className="bankrow" alt="arrow"></img>
                <Link style={{textDecoration: 'none'}} className="bant" to='/profile'>Back</Link>
                <h6 className="bp2">STEP 01/03</h6><h4 className="bap">Personal info</h4>
                    </div>
                    <h2>Complete Your Profile!</h2>
                    <p className="banks">For the purpose of industery requalation, your<br></br>detail are required.</p>
                    <form className="registration-bank" onSubmit={handleSubmit}>
                        <label>
                            Bank verification number [BVN]
                        </label><br></br>
                        <input
                            type="text"
                            // name="username"
                            // value={values.text}
                            placeholder="090912345567"
                            value={bank}
                            onChange={e => setBank(e.target.value)}
                            required
                        /><br></br>
                      
                      <br></br>
                        <button type='submit'>Save & Countinue</button><br></br><br></br>
                        <div className="last">
                        <h2><img src={lock} className="lock" alt="go"></img>Your Info is safely secured</h2>
                    </div>
                    </form>
                </div>

            </div>


        </>
    )
}
export default Bank;