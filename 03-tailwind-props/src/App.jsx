import { useState } from "react";
import Card from "./components/Card";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const myBooks = {
  //   bookName: "Think Like Monk",
  //   mode: "online",
  // };

  let arr = ["ght", "234", "rtr"];
  
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-3xl mb-4">
        Tailwind Test
      </h1>
      <Card userName="meet" btnText="Visit Me" />
      <Card userName="patel" />
    </>
  );
}

export default App;
