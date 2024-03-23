import React from "react";
import AppButton from "../../components/button/button";
import AppHeader from "../../components/header/header";
import side_image from "../../assets/images/twitter-image.jpg";
import "./style.css";

const Authentication = () => {
  return (
    <div>
      <AppHeader />
      <div className="authenticationContainer">
        <div className="imageContainer">
          <img
            className="sideImage"
            alt="twitter-side-image"
            src={side_image}
          />
        </div>
        <div className="formContainer">
          <h1>Register</h1>
          <h3>Manage all your tweets efficiently</h3>
          <p>
            Let's verify you all set up so you can verify your account and begin
            setting up your profile
          </p>

          <div className="inputContainer">
            
            <div className="inputRow">
              <div className="rowSection">
                <label for="firstname">First Name</label>
                <input className="input" type="text" />
              </div>
              <div className="rowSection">
                <label for="firstname">Last Name</label>
                <input className="input" type="text" />
              </div>
            </div>

            <div className="inputRow">
              <div className="rowSection">
                <label for="firstname">Phone Number</label>
                <input className="input" type="text" />
              </div>
              <div className="rowSection">
                <label for="firstname">Email</label>
                <input className="input" type="text" />
              </div>
            </div>

            <div className="inputRow">
              <div className="rowSection">
                <label for="firstname">Password</label>
                <input className="input" type="text" />
              </div>
              <div className="rowSection">
                <label for="firstname">Confirm Password</label>
                <input className="input" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
