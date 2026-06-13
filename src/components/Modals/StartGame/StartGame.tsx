import React from "react";
import "./StartGame.sass";

function StartGame() {
  return (
    <section className="startGame">
      <h2>memory</h2>
      <div className="selectionContainer">
        <div className="selectTheme">
          <p>select theme</p>
          <div className="themeWrapperBtn">
            <button className="Active">numbers</button>
            <button>icons</button>
          </div>
        </div>
        <div className="numberOfPlayers">
          <p>Numbers of Players</p>
          <div className="playersWrapperBtn">
            <button className="Active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
        <div className="gridSize">
          <p>grid size</p>
          <div className="gridWrapperBtn">
            <button className="Active">4X4</button>
            <button>6X6</button>
          </div>
        </div>
        <button className="startBtn">start game</button>
      </div>
    </section>
  );
}

export default StartGame;
