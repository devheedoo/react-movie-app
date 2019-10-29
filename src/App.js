import React from 'react';

// "Component is a function which returns HTML."
function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} />)}
    </div>
  );
}

function Food({ name }) {
  return <h3>I like {name}!</h3>;
}

const foodILike = [
  {id: 1, name: 'kimchi'},
  {id: 2, name: 'ramen'},
  {id: 3, name: 'samgiopsal'}
];

// function renderFood(dish) {
//   return <Food name={dish.name} />;
// }

export default App;
