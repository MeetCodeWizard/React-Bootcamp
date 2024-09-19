import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  let [counter, setCounter] = useState(10);

  // let counter = 10;

  const incrementCounter = function () {
    counter += 1;
    setCounter(counter);
    console.log("Counter Value", counter);
  };

  const decrementCounter = function () {
    counter -= 1;
    setCounter(counter);
    console.log("Counter Value", counter);
  };

  return (
    <>
      <h1>Dopahar Aur ReactJS</h1>
      <h2>Value : {counter}</h2>

      <div>
        <button onClick={counter < 20 ? incrementCounter : null}>
          Increment Counter {counter}
        </button>
      </div>

      <br />

      <div>
        <button onClick={counter > 0 ? decrementCounter : null}>
          Decrement Counter {counter}
        </button>
      </div>

      <br />

      <div>
        <strong>Footer : </strong>
        {counter}
      </div>
    </>
  );
}

export default App;
