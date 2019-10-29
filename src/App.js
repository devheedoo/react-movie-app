import React from 'react';
import PropTypes from "prop-types";

// "Component is a function which returns HTML."
function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} rating={dish.rating} />)}
    </div>
  );
}

function Food({ name, rating }) {
  return (
    <div>
      <h3>I like {name}!</h3>
      <p>rating: {rating} / 5.0</p>
    </div>
  );
}

const foodILike = [
  {id: 1, name: 'kimchi', rating: 4.5},
  {id: 2, name: 'ramen', rating: 5},
  {id: 3, name: 'samgiopsal', rating: 3.5}
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;
