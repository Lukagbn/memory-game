import { useState } from "react";
import "./App.sass";
import Modals from "./components/Modals/Modals";
import type { GameSettings } from "./components/Modals/StartGame/StartGame";
import Circle from "./components/Circle/Circle";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentModal, setCurrentModal] = useState<"start" | "end" | null>(
    "start",
  );
  const [startTimer, setStartTimer] = useState(false);
  const [gameSettings, setGameSettings] = useState<GameSettings | null>();
  const [moves, setMoves] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>();
  function handleGameSettings(data: GameSettings) {
    console.log("game settings", data);
    setGameSettings(data);
    setCurrentModal(null);
  }
  function handleFinishedGame(data: boolean) {
    setEndGame(data);
    setCurrentModal("end");
    return "dasd";
  }
  console.log(endGame);
  return (
    <>
      <Navbar />
      <main>
        {gameSettings && (
          <Circle
            gameSettings={gameSettings}
            finished={handleFinishedGame}
            setMoves={setMoves}
          />
        )}
        <Modals
          activeModal={currentModal}
          handleStartData={handleGameSettings}
          setStartTimer={setStartTimer}
        />
      </main>
      <Footer startTimer={startTimer} moves={moves} />
    </>
  );
}

export default App;
