import TempMachine from "./components/TempMachine";
import "./styles.css";
import Stopwatch from "./components/Stopwatch";
import Count from "./components/Count";

export default function App() {
  return (
    <div className="App">
      <h1>Temperature Machine</h1>
      <TempMachine />
      <Stopwatch />
      <hr />
      <Count />
    </div>
  );
}
