import React from 'react';

import { Consumer } from './Context';

const Landing = () => (
  <Consumer>
    {({ isEnglish, isDark }) => (
      <div className="main">
        <div className="center">
          <p>Web Deisgner / Developer</p>
          <h1>AYAKA TSUBOUCHI</h1>
          <p>{isEnglish ? 'English' : 'Japanese'}</p>
        </div>
      </div>
    )}
  </Consumer>
);

export default Landing;
