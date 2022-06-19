import React from 'react';
import Icon from '../../images/logo.svg';
import MobileUserImg from '../../images/hero-mobile.jpg';
import DesktopUserImg from '../../images/hero-desktop.jpg';
import BtnArrow from '../../images/icon-arrow.svg';
import BtnError from '../../images/icon-arrow.svg';

import './Home.scss';

const Home = () => {
  return (
    <main className="home_container">
      <div className="logo">
        <img src={Icon} alt="logo" />
      </div>

      <div className="user_image">
      <img src={MobileUserImg} alt="user_image" />
      </div>

      <div className="home_content">
        <h1><span className="base_color">WE'RE </span> COMING SOON</h1>

        <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals</p>

        <form className="email_form">
          <input type="email" className="customer_input" placeholder="Email Address" autocomplete="off" required></input>
          <button>
            <img src={BtnArrow} alt="submit arrow" />
          </button>
        </form>
      </div>
    </main>
  )
}

export default Home
