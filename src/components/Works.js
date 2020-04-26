import React, { useContext } from 'react';
import { Consumer } from './Context';

export default function Works() {
  return (
    <Consumer>
      {({ isEnglish }) => <div className="works ui container"></div>}
    </Consumer>
  );
}
