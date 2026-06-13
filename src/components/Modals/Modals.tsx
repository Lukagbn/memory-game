import React from "react";
import StartGame from "./StartGame/StartGame";
import EndGame from "./EndGame/EndGame";
import "./Modals.sass";

function Modals() {
  const user: boolean = true;
  return <div className="modals">{user ? <StartGame /> : <EndGame />}</div>;
}

export default Modals;
