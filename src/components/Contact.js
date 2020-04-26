import React from 'react';
import { Consumer } from './Context';

export default function Contact() {
  return (
    <Consumer>
      {({ isEnglish }) => (
        <div className="main">
          <div className="center">
            <h1>Contact</h1>
            <p>Web Deisgner / Developer</p>
            <p>{isEnglish ? 'English' : 'Japanese'}</p>
          </div>
        </div>
      )}
    </Consumer>
  );
}
