import "./App.css";
import Potato from "./potato";

function Food({ name, image, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}</h4>
      <h4>{image}</h4>
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image: "대충 김치 사진",
    rating: 5,
  },
  {
    name: "물",
    image: "대충 물 사진",
    rating: 3,
  },
];

function renderFood(dish) {
  return <Food name={dish.name} image={dish.image} />;
}

Food.protoTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div className="App">
      <Potato />
      <Food name="kimchi" />
      {foodILike.map((dish) => {
        <Food name={dish.name} />;
      })}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
