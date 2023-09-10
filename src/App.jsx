import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("You clicked me!");
  }
  const showName = () => alert("Mehedi");
  const addFive = (num) => alert(num + 5);
  return (
    <>
      <h1>React Core Concepts</h1>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>handleClick</button>
      <button onClick={showName}>showName</button>
      <button onClick={() => addFive(20)}>20+5</button>
    </>
  );
}

export default App;
