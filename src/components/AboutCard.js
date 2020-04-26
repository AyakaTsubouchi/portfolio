import React from 'react';
import avatar from './images/linkedIn.jpg';

export default function AboutCard(props) {
  return (
    <>
      <div class="ui card about-card">
        <div class="content">
          <div class="bio-header">
            <img
              class="left floated small ui circular image"
              src={avatar}
              alt="Ayaka"
            />
            <div className="name">
              <div class="ui left title">Ayaka Tsubouchi</div>
              <div class="meta">Web Deisgner / Developera</div>
            </div>
          </div>
          <div class="description">{props.discription}</div>
        </div>
      </div>
    </>
  );
}

export function SkillCard() {
  return (
    <>
      <div class="ui card about-card">
        <div class="content">
          <div class="bio-header">
            <div class="ui left title">Languages</div>
            <div class="meta">
              Mainly writing TypeScript for React with VS Code.a
            </div>
          </div>

          <div class="description horizontal-list">
            <ul>
              <li>HTML & CSS</li>
              <li> /CSS</li>
              <li> /JavaScript</li>
              <li> /GitHub</li>
              <li> /Java:little bit</li>
              <li> /Python:little bit</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
