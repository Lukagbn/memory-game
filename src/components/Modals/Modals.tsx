import StartGame from "./StartGame/StartGame";
import EndGame from "./EndGame/EndGame";

function Modals() {
  const user: number | null = 1;
  switch (user) {
    case 1:
      return <StartGame />;
    case 2:
      return <EndGame />;
    case null:
      return;
  }
}

export default Modals;
