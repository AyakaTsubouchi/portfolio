import React, { useContext } from "react";
import { Consumer } from "../Context";
import fourcastImg from "../images/fourcast.png";
import weatherImg from "../images/weatherApp.png";
import "./works.css";

export default function Works() {
  const imgStyle = { width: "50%" };

  return (
    <Consumer>
      {({ isEnglish }) => (
        <div className="first-section section">
          <div className="ui container">
            <h2>
              <span>Works</span>
            </h2>

            <div className="work-container">
              <div className="work-text">
                <h3 className="section-title">Four cast</h3>
                <div className="skills">html react api</div>
                <div className="description">e-commerce website</div>
              </div>
              <div className="work-img">
                <img src={weatherImg} alt="ecommerce website"></img>
              </div>
            </div>
            <div className="work-container">
              <div className="work-text">
                <h3 className="section-title">Four cast</h3>
                <div className="skills">html react api</div>
                <div className="description">e-commerce website</div>
              </div>
              <div className="work-img">
                <img src={weatherImg} alt="ecommerce website"></img>
              </div>
            </div>
          </div>

          <div className="first-section">
            <h3 className="section-title">Weather App</h3>
            <a
              href="https://ayakatsubouchi.github.io/weatherApp_React_ContextAPI/"
              target="_blank">
              <img
                src={weatherImg}
                alt="ecommerce website"
                style={imgStyle}></img>
            </a>
            <p>This is weather app.</p>
          </div>
        </div>
      )}
    </Consumer>
  );
}

const worksData = [{ title: "Weather App" }];
