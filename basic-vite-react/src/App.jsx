import Chai from "./Chai";

function App() {
  const userName = "meetp";
  return (
    <>
      <Chai />
      <h3>Chai aur React {2 < 3 ? "Hi" : "Bye"}</h3>
    </>
  );
}

export default App;
