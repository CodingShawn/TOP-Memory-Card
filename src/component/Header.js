import React from "react";
import Score from "./Score";

const Header = (props) => {
  return (
    <header>
      <div>
        <h1>Memory Card Game</h1>
        <div>Try to click all 12 cards just once!</div>
      </div>
      <div className="score-board">
        <Score {...props} />
      </div>
    </header>
  );
};

export default Header;
