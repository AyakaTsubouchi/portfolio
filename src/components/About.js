import React from 'react';
import { Consumer } from './Context';

const jpnese =
  '初めまして,坪内文香と申します。フロントエンドディベロッパーです。大学卒業後、一般企業で経理&webサイト担当として合計６年間働いていましたが、30歳で一念発起しバンクーバーへ留学。そこでプログラミングを学び今に至ります。メンテナンスのしやすいサイト作りを心がけます。';
const eng =
  "Hi, I ' m Yuria Nishimura.A Frontend Developer familiar with UI/UX.My specialty is solving problems through rational clear UI design from the view of users, and frontend development writing readable clean codes. The infinite potential and complex diversity of web technologies jerked my curiosity to know overwhelming ideas and technologies when I learned how to make a website.";

const About = () => {
  return (
    <Consumer>
      {({ isEnglish }) => (
        <div className="ui container">
          <div className="about">
            <h2>About</h2>
            <p>Web Deisgner / Developer</p>
            {isEnglish}
            {isEnglish ? <p>{eng}</p> : <p>{jpnese}</p>}
            <h2>Skils</h2>
          </div>
        </div>
      )}
    </Consumer>
  );
};

export default About;
