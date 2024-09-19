import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h1>Books for JS</h1>;
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "Meet Patel"

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherUser
);

ReactDom.createRoot(document.getElementById("root")).render(
  
    reactElement
  
);
