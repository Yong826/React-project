import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      {/* 상단층 */}
      <div className="main">
        <div className="Logo">
          <div className="main-apps">
            <h1>Landing Page for Apps</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Voluptatum, rem, distinctio! Dolores doloremque.
            </p>

            <button className="btn btn-main">Show More</button>
          </div>
          <img className="phoneImage" src="./img/iphone.png" />
        </div>
      </div>

      {/* 중간층 */}
      <div className="mid-container">
        <h4>It is the perfect theme for your next Project!</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn btn-main">Show Portfolio</button>
      </div>

      <div className="service-container">
        <p className="servie-menu">
          service
          <h2>What We Offer</h2>
        </p>
        <div className="four-service">
          <div>
            <FontAwesomeIcon icon={faMobile} size="3x" />
            <h5>Responsive</h5>
            <p>lorem ipsum I love Coding</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faFlask} size="3x" />
            <h5>Experiments</h5>
            <p>lorem ipsum I love Coding</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBolt} size="3x" />
            <h5>Quickness</h5>
            <p>lorem ipsum I love Coding</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGlobe} size="3x" />
            <h5>Global Shipping</h5>
            <p>lorem ipsum I love Coding</p>
          </div>
        </div>
      </div>

      <div>
        <p className="servie-menu2">
          Portfolio
          <h2>What we can Do</h2>
        </p>
        <div className="portimg">
          
          <div
            className="port1"
            style={{ background: "url(./img/portfolio-1.jpg" }}
          >
            <div class="white-box"></div> 
            <div className="porttext">
              <h4>Stationary</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div
            className="port2"
            style={{ background: "url(./img/portfolio-2.jpg" }}
          >
            <div class="white-box"></div> 
            <div className="porttext">
              <h4>Stationary</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div
            className="port3"
            style={{ background: "url(./img/portfolio-3.jpg" }}
          >
            <div class="white-box"></div> 
            <div className="porttext">
              <h4>Stationary</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div
            className="port4"
            style={{ background: "url(./img/portfolio-4.jpg" }}
          >
            <div class="white-box"></div> 
            <div className="porttext">
              <h4>Stationary</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="m"></div>
        </div>
      </div>

      {/* footer */}
      <div className="social">
        <FontAwesomeIcon icon={faFacebook} size="4x" className="facebook" />
        <FontAwesomeIcon icon={faTwitter} size="4x" className="facebook" />
        <FontAwesomeIcon icon={faInstagram} size="4x" className="facebook" />
        <p> @PortFolio </p>
      </div>
    </div>
  );
}

export default App;
