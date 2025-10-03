import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const Addvalue = () => {
    setCounter(counter + 1);
  };
  const SUBvalue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React Learning: {counter}</h1>
      <button onClick={Addvalue}>ADD Value: {counter}</button>
      <button onClick={SUBvalue}>SUBSTRACT Value: {counter}</button>
      <h2>counter Value:: {counter}</h2>
    </>
  );
}

export default App;
