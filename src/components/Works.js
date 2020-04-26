import React, { useContext } from 'react';
import { Consumer } from './Context';
import fourcastImg from './images/fourcast.png';

export default function Works() {
  return (
    <Consumer>
      {({ isEnglish }) => (
        <div className="first-section section">
          <div className="ui container about">
            <h2>
              <span>Works</span>
            </h2>
            <p>Web Deisgner / Developer</p>
            <div className="first-section">
              <h3 className="section-title">Four cast</h3>
              <img src={fourcastImg}></img>
              <p>This is e commerce website.</p>
            </div>
            <div className="first-section">
              <h3 className="section-title">Four cast</h3>
              <img src={fourcastImg}></img>
              <p>This is e commerce website.</p>
            </div>
          </div>
        </div>
      )}
    </Consumer>
  );
}
