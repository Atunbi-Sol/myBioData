import React, { useState } from "react";
import "./bioData.css";
import Selector from "../component/Selector";
// import axios from "axios";

// import ZenithSpi from "../../public/ZenithSpi.gif"
import zenithLogo from "/zenithLogo.jpg";
import axios from "axios";

const BioData = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader: false;

    //  const data = { occupation, lastName, firstName, gender, phoneNumber, email };
    //   const response = await axios.post('/api/save-person', data);
    //   console.log(response.data);
  };
  return (
    <section className="signUp-section">
      {/* <div className="header">{ <img src={ZenithSpi} alt="ourBrand" className="signUp-image" /> }</div> */}
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="form-control-header">
          <img src={zenithLogo} alt="" />
          <h1>Create a Savings Account</h1>
        </div>
        <div className="form-body">
          <div className="form-field">
            <label htmlFor="firstName" className="input-label">
              FirstName
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="FirstName"
              className="input-field"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="lastName" className="input-label">
              LastName
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="lastName"
              className="input-field"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder=" ...@gmail.com"
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="userName" className="input-label">
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={phoneNumber}
              placeholder="Phone Number"
              className="input-field"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="gender" className="input-label">
              Gender (Optional)
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="input-field gender"
                placeholder="Select a gender"
                required>
                <option value="">Select a gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="occupation" className="input-label">
              Occupation (Optional)
            </label>
            <Selector value={occupation} name="occupation" onChange={(e) => setOccupation(e.target.value)} />
          </div>
          <button type="submit" className="button-log">
            CREATE ACCOUNT
          </button>
        </div>
      </form>
      <div className="signUp-footer">
        <p>Already have an account?</p>
      </div>
    </section>
  );
};

export default BioData;
