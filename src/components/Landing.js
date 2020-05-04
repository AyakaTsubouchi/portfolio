import React from "react";

import { Consumer } from "../contexts/Context";

const Landing = () => (
  <Consumer>
    {({ isEnglish }) => (
      <div className="main">
        <div className="center">
          <p>Web Deisgner / Developer</p>
          <h1>AYAKA TSUBOUCHI</h1>
          <p className="subtitle">
            {isEnglish ? "Nice to meet you!" : "よろしくおねがいします！"}
          </p>
        </div>
      </div>
    )}
  </Consumer>
);

export default Landing;
