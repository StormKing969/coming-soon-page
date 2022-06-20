import React, { useEffect, useState } from "react";
import Icon from "../../images/logo.svg";
import MobileUserImg from "../../images/hero-mobile.jpg";
import DesktopUserImg from "../../images/hero-desktop.jpg";
import BtnArrow from "../../images/icon-arrow.svg";
import BtnError from "../../images/icon-error.svg";

import "./Home.scss";

const Home = () => {
  const [customerEmail, setCustomerEmail] = useState("");
  const [inputValidation, setInputValidation] = useState(true);
  
  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(getScreenWindow())

    useEffect(() => {
        function handleResize() {
            setWindowWidth(getScreenWindow())
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return windowWidth
  }

  function getCustomerEmail(event) {
    const email = event.target.value;
    setCustomerEmail(email);
  }

  function emailCheck(e) {
    e.preventDefault();
    if (customerEmail.indexOf("@") !== -1) {
      setInputValidation(true);
      setCustomerEmail("")
    } else {
      setInputValidation(false);
    }
  }

  function getScreenWindow() {
    return window.innerWidth;
  }

  console.log(useWindowWidth() < 968 );

  return (
    <main className="home_container">
      <div className="logo">
        <img src={Icon} alt="logo" />
      </div>

      <div className="user_image">
        {useWindowWidth() < 720 ? <img src={MobileUserImg} className="profile_image" alt="user_image" /> : <img src={DesktopUserImg} className="profile_image" alt="user_image" />}
        
      </div>

      <div className="home_content">
        <h1>
          <span className="base_color">WE'RE </span> COMING SOON
        </h1>

        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals
        </p>

        <form className="email_form">
          <input
            type="email"
            className="customer_input"
            placeholder="Email Address"
            autoComplete="off"
            onChange={getCustomerEmail}
            value={customerEmail}
            required
          ></input>

          <div className="errorCheck">
            {inputValidation === true ? null : (
              <img src={BtnError} className="errorOutput" alt="submit arrow" />
            )}
          </div>

          <button type="submit" onClick={emailCheck}>
            <img src={BtnArrow} alt="submit arrow" />
          </button>
        </form>

        <div className="errorCheckMessage">
          {inputValidation === true ? null : (
            <p>Please provide a valid email</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
