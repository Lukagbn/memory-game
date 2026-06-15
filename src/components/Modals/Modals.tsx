import StartGame, { type GameSettings } from "./StartGame/StartGame";
import EndGame from "./EndGame/EndGame";

interface ModalsProps {
  activeModal: "start" | "end" | null;
  handleStartData: (data: GameSettings) => void;
  setStartTimer: (data: boolean) => void;
}

function Modals({ activeModal, handleStartData, setStartTimer }: ModalsProps) {
  switch (activeModal) {
    case "start":
      return (
        <StartGame
          sendDataToParent={handleStartData}
          setStartTimer={setStartTimer}
        />
      );
    case "end":
      return <EndGame />;
    case null:
      return null;
  }
}

export default Modals;
