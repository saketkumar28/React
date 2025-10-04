import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-red-500">Vite with Tailwind</h1>
      <Card username="Saket" skill="Python and js" />
      <Card />
    </>
  );
}

export default App;
