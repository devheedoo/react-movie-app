import React from 'react';

// "Component is a function which returns HTML."
function App() {
  return (
    <div>
      <h1>react-movie-app</h1>
      <p>Hello, I'm Choco.</p>
      {/* <Food name="kimchi" />
      <Food name="ramen" />
      <Food name="samgiopsal" /> */}
      {foodILike.map((food) => <Food name={food.name} />)}
    </div>
  );
}

function Food({ name }) {
  return <h3>I like {name}!</h3>;
}

const foodILike = [{name: 'kimchi'}, {name: 'ramen'}, {name: 'samgiopsal'}];

export default App;
