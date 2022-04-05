import { useRef } from "react";

const Count = () => {
  const count = useRef(0);

  const incrementCount = () => {
    count.current = count.current + 1;
  };
  return (
    <button onClick={incrementCount}> You Click {count.current} times</button>
  );
};
export default Count;
