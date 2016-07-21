import React from 'react';

import Header from '../Header';

import { gameplay } from '../../content/instructions.json';

export default function App() {
  return (
    <div className="menu">
      {/* <header className="section sectionHeader">
        <h1 className="header headerOne headerLogo">Sinion</h1>
        <div className="headerButtonHowTo">
        <button className="button buttonHowTo">How to play?</button>
        </div>
      </header> */}
      <Header />

      <div className="section sectionStartGame">
        <h2 className="header headerTwo headerStartGame">Let's play a game!</h2>
        <button className="button buttonStartGame">Start the game</button>
      </div>

      <div className="modal modalHowTo">
        <button className="button buttonExitModal">Exit modal</button>
        <div className="modalContent">
          <h3 className="header headerThree headerHowTo">How to play:</h3>
          <p className="paragraph paragraphHowTo">It's quite simple actually.</p>
          <ol className="list listOrdered listHowTo">
            {gameplay.map((inststruction, i) => (
              <li key={i} className="listItem listItemHowTo">{inststruction}</li>
            ))}
          </ol>
          <p className="paragraph paragraphHowTo">As simple as that!</p>
        </div>
      </div>
    </div>
  );
}
