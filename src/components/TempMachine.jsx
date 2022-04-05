import React, { useState } from "react";
import Msg from "./Msg";

export default function TempMachine() {
  const [celciusValue, setCelciusValue] = useState("");
  const [ForenhiteValue, setForenhiteValue] = useState("");

  const celciusHandle = (e) => {
    let celcius = e.target.value;
    setCelciusValue(celcius);
    setForenhiteValue(celcius > 0 ? (celcius * 9) / 5 + 32 : "0");
  };

  const forenhiteHandle = (e) => {
    let forenhite = e.target.value;
    setForenhiteValue(forenhite);
    setCelciusValue(forenhite > 0 ? ((forenhite - 32) * 5) / 9 : "0");
  };

  // console.log(celciusValue, ForenhiteValue)
  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <div style={{ marginBottom: "10px" }}>
        <input id="celcius" value={celciusValue} onChange={celciusHandle} />
        <label htmlFor="celcius"> Celcius</label>
      </div>
      <div>
        <input
          id="Forenhite"
          value={ForenhiteValue}
          onChange={forenhiteHandle}
        />
        <label htmlFor="Forenhite"> Forenhite</label>
      </div>
      <Msg msg={celciusValue} />
    </fieldset>
  );
}
