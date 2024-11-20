import React from "react";
import "./App.css";
import logo from "../src/assets/logo.svg";
import group1 from "../src/assets/group1.svg";
import personIcon from "../src/assets/person-icon.svg";
import implementationIcon from "../src/assets/implementation-icon.svg";
import chartIcon from "../src/assets/chart-icon.svg";
import kady from "../src/assets/kady.png";
import aisha from "../src/assets/aisha.png";
import arthur from "../src/assets/arthur.png";

function App() {
  return (
    <>
      <div>
        <header className="header__container container">
          <div className="header-section">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav">
              <ul className="menu">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="button">
            <button>contact us</button>
          </div>
        </header>
        <div className="hero__container">
          <div className="hero-text container">
            <div className="info">
              <h1>
                Find the
                <br />
                best <span>talent</span>
              </h1>
              <div className="deck">
                <hr className="liner" />
                <p>
                  Finding the right people and building high
                  <br />
                  performing teams can be hard. Most companies
                  <br /> aren’t tapping into the abundance of global talent.
                  <br />
                  We’re about to change that.
                </p>
              </div>
            </div>
            <img className="group1" src={group1} alt="" />
          </div>
        </div>
      </div>
      <div className="build-menage">
        <div className="build-menage__container container">
          <div className="build-info">
            <hr className="liner" />
            <h1>Buil & manage distributed teams like no one else.</h1>
          </div>
          <div className="build-cards">
            <div className="card">
              <img src={personIcon} alt="" />
              <div className="card-text">
                <h2>Experienced Individuals</h2>
                <p>
                  Our network is made up of highly experienced professionals <br /> who
                  are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={implementationIcon} alt="" />
              <div className="card-text">
                <h2>Easy to Implement</h2>
                <p>
                  Our processes have been refined over years of implementation <br />
                  meaning our teams always deliver.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={chartIcon} alt="" />
              <div className="card-text">
                <h2>Enhanced Productivity</h2>
                <p>
                  Our customized platform with in-built analytics helps you <br />
                  manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery-section">
        <div className="delivery__container container">
          <h1 className="delivery-title">
            Delivering real results for top
            <br />
            companies. Some of our <span>success stories.</span>
          </h1>
          <div className="delivery-cards">
            <div className="delivery-card">
              <p>
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <div className="user-name">
                <h5>Kady Baker</h5>
                <p>Product Manage Bookmark</p>
              </div>
              <img src={kady} alt="" />
            </div>
            <div className="delivery-card">
              <p>
                “We needed to automate our entire onboarding process. The team
                came in and built out the whole journey. Since going live, user
                retention has gone through the roof!”
              </p>
              <div className="user-name">
                <h5>Aiysha Reese</h5>
                <p>Founder of Manage</p>
              </div>
              <img src={aisha} alt="" />
            </div>
            <div className="delivery-card">
              <p>
                “Amazing. Our team helped us build an app that delivered a new
                experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.”
              </p>
              <div className="user-name">
                <h5>Arthur Clarke</h5>
                <p>Ca-founder of MyPhysla</p>
              </div>
              <img src={arthur} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
