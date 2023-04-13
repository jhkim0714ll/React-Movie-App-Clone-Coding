import "./App.css";
import Potato from "./potato";

function Food(props) {
  return <h1>I like {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Potato />
      <Food name="kimchi" />
      <Food name="ramen" />
      <Food name="samgiopsal" />
      <Food name="chukumi" />
    </div>
  );
}

export default App;
