import { useEffect, useState } from "react";
import "./Circle.sass";

interface FinishedProps {
  finished: (data: boolean) => void;
}

function Circle({ finished }: FinishedProps) {
  const [board] = useState(() => {
    const base = [1, 2, 3, 4, 5, 6, 7, 8];
    const paired = [...base, ...base];
    return paired.sort(() => Math.random() - 0.5);
  });

  const [guesses, setGuesses] = useState<number[]>([]);

  const [matches, setMatches] = useState<number[]>([]);

  useEffect(() => {
    if (guesses.length === 2) {
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
  return (
    <section className="circleContainer">
      {board.map((item, index) => {
        const isFlipped = guesses.includes(index) || matches.includes(index);

        return (
          <div
            key={index}
            className={isFlipped ? "circle active" : "circle"}
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
