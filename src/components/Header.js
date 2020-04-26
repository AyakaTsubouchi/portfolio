import React from 'react';
import { Consumer } from './Context';
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  backgroundColor: '#26c6da',
  justifyContent: 'space-between',
  padding: 10,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'underline',
};

export default () => (
  <header>
    <Consumer>
      {({ isEnglish, toEnglish, toJapanese }) => (
        <div className="header">
          <div className="ui container">
            <div className="ui grid">
              <div className="two column row">
                <div className="left floated column">
                  <div className="ui horizontal list">
                    <div className="item">
                      <li onClick={toJapanese}>JPN</li>
                    </div>
                    <div className="item">
                      <li onClick={toEnglish}>ENG</li>
                    </div>
                  </div>
                </div>
                <div className="right floated column">
                  <div className="ui horizontal list">
                    <div className="item">
                      <Link to="/">Home</Link>
                    </div>
                    <div className="item">
                      <Link to="/works">Works</Link>
                    </div>
                    <div className="item">
                      <Link to="/about">About</Link>
                    </div>
                    <div className="item">
                      <Link to="/contact">Contact</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Consumer>
  </header>
);
