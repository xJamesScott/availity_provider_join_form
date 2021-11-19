import "./Form.css";
import { states } from "../states";
import logo from "../assets/availility_logo.png";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  const handleSubmit = () => {
    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div className="form-wrap">
      <img src={logo} />
      <h2 className="form-title">Provider Signup Form</h2>
      <form className="join-form">
        {/*  First and Last Name */}
        <div className="field-wrap">
          <h3 className="field-title">First and Last Name</h3>
          <input id="name" className="field-input" onChange={handleChange} />
        </div>

        {/* NPI Number */}
        <div className="field-wrap">
          <h3 className="field-title">NPI Number</h3>
          <input id="npi" className="field-input" onChange={handleChange} />
        </div>

        {/* Business Address */}

        {/* Street */}
        <div className="field-wrap">
          <h3 className="field-title">Street</h3>
          <input id="street" className="field-input" onChange={handleChange} />
        </div>

        {/* City */}
        <div className="field-wrap">
          <h3 className="field-title">City</h3>
          <input id="city" className="field-input" onChange={handleChange} />
        </div>

        {/* State */}
        <div className="field-wrap">
          <h3 className="field-title">State</h3>
          <select id="state" className="field-input" onChange={handleChange}>
            {states &&
              states.map((state) => {
                return <option key={state}>{state}</option>;
              })}
          </select>
        </div>

        {/* zip */}
        <div className="field-wrap">
          <h3 className="field-title">Zip code</h3>
          <input className="field-input" onChange={handleChange} />
        </div>

        {/* Email Address */}
        <div className="field-wrap">
          <h3 className="field-title">Email Address</h3>
          <input className="field-input" type="email" onChange={handleChange} />
        </div>

        {/* submit button */}
        <div className="field-wrap">
          <input
            className="input-button"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  )
};
