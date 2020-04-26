import React from 'react';
import { Consumer } from './Context';
import AboutCard, { SkillCard } from './AboutCard';

const jpnese =
  '初めまして,坪内文香と申します。フロントエンドディベロッパーです。大学卒業後、一般企業で経理&webサイト担当として合計６年間働いていましたが、30歳で一念発起しバンクーバーへ留学。そこでプログラミングを学び今に至ります。メンテナンスのしやすいサイト作りを心がけます。';
const eng =
  "This is other programmer's introduction. hahaha. Hi, I ' m  Ayaka Tsubouchi.A Frontend Developer familiar with UI/UX.My specialty is solving problems through rational clear UI design from the view of users, and frontend development writing readable clean codes. The infinite potential and complex diversity of web technologies jerked my curiosity to know overwhelming ideas and technologies when I learned how to make a website.";

const About = () => {
  return (
    <Consumer>
      {({ isEnglish }) => (
        <div className="first-section section">
          <div className="ui container about">
            <h2>
              <span>About</span>
            </h2>
            <p className="subtitle">who I am & what I did...</p>
            {isEnglish ? (
              <AboutCard discription={eng} />
            ) : (
              <AboutCard discription={jpnese} />
            )}
            <div className="about first-section">
              <h2>
                <span>Skils</span>
              </h2>
              <p className="subtitle">I'm learning constantly.</p>
              <div className="section">
                <SkillCard />
              </div>
            </div>
          </div>
        </div>
      )}
    </Consumer>
  );
};

export default About;
