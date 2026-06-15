import "./Navbar.sass";

function Navbar() {
  return (
    <header>
      <h1 className="hidden">Memory Game</h1>
      <h2>Memory</h2>
      <div className="containerBtn">
        <button className="restart">Restart</button>
        <button className="newGame" onClick={() => window.location.reload()}>
          New Game
        </button>
      </div>
    </header>
  );
}

export default Navbar;
