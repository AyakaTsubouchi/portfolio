import React from "react";
import { Consumer } from "../contexts/Context";

export default function Contact() {
  const iconStyle = {
    fontSize: "30px",
    margin: "3px",
  };
  return (
    <Consumer>
      {({ isEnglish }) => (
        <div className="main">
          <div className="center">
            <h1>Contact</h1>
            <p>feel free to contact me!</p>
            <a href="https://www.linkedin.com/in/ayaka-tsubouchi-b0474718a/">
              <i class="fab fa-linkedin" style={iconStyle} />
            </a>
            <a href="https://www.instagram.com/ayakaru1122/">
              <i class="fab fa-instagram-square" style={iconStyle} />
            </a>

            <a href="https://twitter.com/tUsUNjoU2wU0mZD">
              <i class="fab fa-twitter-square" style={iconStyle} />
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"></script>
            <i class="fas fa-envelope-square" style={iconStyle}></i>
          </div>
        </div>
      )}
    </Consumer>
  );
}
