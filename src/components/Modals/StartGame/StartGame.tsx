import { useState } from "react";
import "./StartGame.sass";

export type GameSettings = {
  theme: "numbers" | "icons";
  players: 1 | 2 | 3 | 4;
  grid: "4X4" | "6X6";
};

interface StartGameProps {
  sendDataToParent: (data: GameSettings) => void;
  setStartTimer: (data: boolean) => void;
}

function StartGame({ sendDataToParent, setStartTimer }: StartGameProps) {
  const [theme, setTheme] = useState<"numbers" | "icons">("numbers");
  const [players, setPlayers] = useState<1 | 2 | 3 | 4>(1);
  const [grid, setGrid] = useState<"4X4" | "6X6">("4X4");

  return (
    <>
      <section className="startGame">
        <h2>memory</h2>
        <div className="selectionContainer">
          <div className="selectTheme">
            <p>select theme</p>
            <div className="themeWrapperBtn">
              <button
                className={`${theme === "numbers" ? "Active" : ""}`}
                onClick={() => setTheme("numbers")}
              >
                numbers
              </button>
              <button
                className={`${theme === "icons" ? "Active" : ""}`}
                onClick={() => setTheme("icons")}
              >
                icons
              </button>
            </div>
          </div>
          <div className="numberOfPlayers">
            <p>Numbers of Players</p>
            <div className="playersWrapperBtn">
              <button
                className={`${players === 1 ? "Active" : ""}`}
                onClick={() => setPlayers(1)}
              >
                1
              </button>
              <button
                className={`${players === 2 ? "Active" : ""}`}
                onClick={() => setPlayers(2)}
              >
                2
              </button>
              <button
                className={`${players === 3 ? "Active" : ""}`}
                onClick={() => setPlayers(3)}
              >
                3
              </button>
              <button
                className={`${players === 4 ? "Active" : ""}`}
                onClick={() => setPlayers(4)}
              >
                4
              </button>
            </div>
          </div>
          <div className="gridSize">
            <p>grid size</p>
            <div className="gridWrapperBtn">
              <button
                onClick={() => setGrid("4X4")}
                className={`${grid === "4X4" ? "Active" : ""}`}
              >
                4X4
              </button>
              <button
                onClick={() => setGrid("6X6")}
                className={`${grid === "6X6" ? "Active" : ""}`}
              >
                6X6
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              const gameSettings: GameSettings = {
                theme: theme,
                players: players,
                grid: grid,
              };
              sendDataToParent(gameSettings);
              setStartTimer(true);
            }}
            className="startBtn"
          >
            start game
          </button>
        </div>
      </section>
    </>
  );
}

export default StartGame;
