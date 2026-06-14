import { useState } from "react";
import "./App.sass";
import Modals from "./components/Modals/Modals";
import type { GameSettings } from "./components/Modals/StartGame/StartGame";
import Circle from "./components/Circle/Circle";

function App() {
  const [currentModal, setCurrentModal] = useState<"start" | "end" | null>(
    "start",
  );
  const [gameSettings, setGameSettings] = useState<GameSettings | null>();
  const [endGame, setEndGame] = useState<boolean>(false);
  function handleGameSettings(data: GameSettings) {
    console.log("game settings", data);
    setGameSettings(data);
    setCurrentModal(null);
  }
  function handleFinishedGame(data: boolean) {
    setEndGame(data);
    setCurrentModal("end");
  }
  return (
    <main>
      <Circle finished={handleFinishedGame} />
      <Modals activeModal={currentModal} handleStartData={handleGameSettings} />
    </main>
  );
}

export default App;
