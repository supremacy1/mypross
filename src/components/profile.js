import profile from '../css/profile.css'
import React, { useState } from "react";
import Union from '../images/Union.svg'
import google from '../images/google.svg'
import Vector1 from '../images/Vector1.svg'
import arrowback1 from '../images/arrowback1.svg'
import { Link } from 'react-router-dom';


const Profile = () => {
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [country, setCountry] = useState();
const [phn, setPhn] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
    }





    return (
        <>
            <div className='profcontainer'>
                <div className='pro1'>
                <img src={Union} className="l1" alt="union"></img><h5>Osis</h5>

<p>“ <br></br>The passage experienced a surge in popularity<br></br>
    during the 1960s when Letraset used it on their<br></br> dry-transfer sheets, and again during the 90s
    <br></br>as desktop publishers bundled the text with their software.<br></br>Vincent Obi</p>
    <img src={Vector1} className="vector1" alt="union"></img>
                </div>
                <div className="pat">
                <img src={arrowback1}className="arrw" alt="arrow"></img>
                <Link style={{textDecoration: 'none'}} className="bat" to='/signup'>Back</Link>
                </div>
                <div className='pro2'>

                <div className='header'>
                    <div className='hot1'>
                    <div className="head">
                        <h6 className="p2">STEP 01/03</h6><h4 className="p">Residence</h4>
                    </div>

                    </div>
                    <h2>Join Us!</h2>
                    <p>To begin this journey, tell us what type of <br></br>account you’d be opening.</p>
                    
                </div>
                <form className="registration-form" onSubmit={handleSubmit}>
                   {/* <input 
                   type='text'
                   defaultCoutry = 'ni'
                   value={phn}
                   onChange={e => setPhn(e.target.value)}
                   /> */}
                    <label>
                        Phone Number*
                    </label><br></br>
                    {/* <select className='select'>
        <option value="">-- Select --</option>
         <option value="option1">Mtn</option>
         <option value="option2">Airtel</option>
         <option value="option3">9mobile</option>
        <option value="option4">Glo</option>
        </select> */}
                    <input
                        type="text"
                        // name="username"
                        // value={values.text}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    /><br></br>
                    
                    <label>
                        Your address*
                    </label><br></br>
                    <input
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    /><br></br>
                    <label>
                        Country of residence*
                    </label><br></br>
                    <input
                        type="text"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        required
                    /><br></br>
                    <br></br>
                    <Link to='/bank'><button type='submit'>Save & Countinue</button><br></br></Link>

                </form>
                </div>
            </div>
        </>
    )
}
export default Profile;