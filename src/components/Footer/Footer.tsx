import { useEffect, useState } from "react";
import "./Footer.sass";

interface FooterProps {
  startTimer: boolean;
  moves: number;
}

function Footer({ startTimer, moves }: FooterProps) {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    if (!startTimer) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
      if (seconds >= 59) {
        setMinutes((prev) => prev + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTimer, moves, seconds, minutes]);
  return (
    <footer>
      <div className="content">
        <p>Time</p>
        <span>
          {minutes >= 10 ? minutes : `0` + minutes}:
          {seconds >= 10 ? seconds : `0` + seconds}
        </span>
      </div>
      <div className="content">
        <p>Moves</p>
        <span>{moves}</span>
      </div>
    </footer>
  );
}

export default Footer;
