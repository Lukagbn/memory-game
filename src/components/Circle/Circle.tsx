import { useEffect, useState } from "react";
import "./Circle.sass";
import type { GameSettings } from "../Modals/StartGame/StartGame";

interface CircleProps {
  finished: (data: boolean) => void;
  gameSettings: GameSettings | null;
  setMoves: React.Dispatch<React.SetStateAction<number>>;
}

function Circle({ gameSettings, finished, setMoves }: CircleProps) {
  const [grid] = useState(() => gameSettings?.grid ?? null);
  const [board] = useState(() => {
    const base =
      grid === "4X4"
        ? [1, 2, 3, 4, 5, 6, 7, 8]
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const paired = [...base, ...base];
    return paired.sort(() => Math.random() - 0.5);
  });
  const [guesses, setGuesses] = useState<number[]>([]);

  const [matches, setMatches] = useState<number[]>([]);

  useEffect(() => {
    if (guesses.length === 2) {
      setMoves((prev) => prev + 1);
      const firstIndex = guesses[0];
      const secondIndex = guesses[1];

      const firstValue = board[firstIndex];
      const secondValue = board[secondIndex];

      if (firstValue === secondValue) {
        setMatches((prev) => [...prev, firstIndex, secondIndex]);
        setGuesses([]);
      } else {
        setTimeout(() => {
          setGuesses([]);
        }, 1000);
      }
    }
  }, [guesses, board]);
  if (matches.length === board.length) {
    finished(true);
  }
  console.log(guesses);
  return (
    <section
      className={grid === "6X6" ? "circleContainer lg" : "circleContainer"}
    >
      {board.map((item, index) => {
        const isFlipped = guesses.includes(index) || matches.includes(index);

        return (
          <div
            key={index}
            className={`
              circle
              ${isFlipped ? "active" : ""}
              ${grid === "6X6" ? "lg" : ""}
              `}
            onClick={() => {
              if (guesses.length === 2 || isFlipped) return;
              setGuesses((prev) => [...prev, index]);
            }}
          >
            {isFlipped ? item : null}
          </div>
        );
      })}
    </section>
  );
}

export default Circle;
