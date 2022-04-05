import { useRef, useState } from "react";

const buttonStyle = {
  marginRight: "0.5rem",
  background: "green",
  color: "white",
  border: "none",
  padding: "0.5rem 1.5rem",
  textTransform: "uppercase",
  outline: "0",
  borderRadius: "0.2rem",
  cursor: "pointer"
};
export default function Stopwatch() {
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const clock = useRef(null);

  const startTimeHandle = () => {
    setStartTime(Date.now());
    clock.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  };

  const stopTimeHandle = () => {
    clearInterval(clock.current);
  };

  let stopTime = (currentTime - startTime) / 1000;

  return (
    <div>
      <h1>Stop Watch : {stopTime.toFixed(3)} </h1>
      <button style={buttonStyle} onClick={startTimeHandle}>
        Start
      </button>
      <button
        style={{ ...buttonStyle, background: "red" }}
        onClick={stopTimeHandle}
      >
        Stop
      </button>
    </div>
  );
}
