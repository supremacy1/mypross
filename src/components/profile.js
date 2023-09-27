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
    const [selectedCountry, setSelectedCountry] = useState(''); 
// const [phn, setPhn] = useState();

const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

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
                <div className="profilecontainer2">
                    <div className='proplate'>
                <img src={arrowback1}className="paro" alt="arrow"></img>
                <Link style={{textDecoration: 'none'}} className="pback" to='/signup'>Back</Link>
                <h6 className="pr2">STEP 01/03</h6><h4 className="pr">Residence</h4>
                </div>
                                 
                    <h2>Complete Your Profile!!</h2>
                    <p>For the purpose of industry regulation, your details are required.</p>
                    
                <form className="registration-pro" onSubmit={handleSubmit}>
                
                    <label>
                        Phone Number*
                    </label>

                    <select className='select' value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select</option>
        <option value="+1">United States (+1)</option>
        <option value="+44">United Kingdom (+44)</option>
        <option value="+91">India (+91)</option>
        {/* Add more country options as needed */}
        <input className='sell'
        type="text"
        placeholder="Enter phone numbers"
      />
      </select>
      {/* <input
        type="text"
        placeholder="Enter phone number"
      /> */}

                    <input className='sell'
                        type="text"
                        // name="username"
                        // value={values.text}
                        placeholder='Enter your phone Number'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                        
                    /><br></br>
                    
                    <label>
                        Your address*
                    </label><br></br>
                    <input
                        type="text"
                        placeholder='Please Enter adress'
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
                        placeholder='Please Select'
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