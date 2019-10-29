import React from 'react';

// "Component is a function which returns HTML."
function App() {
  return (
    <div>
      <h1>react-movie-app</h1>
      <p>Hello, I'm Choco.</p>
      <Food name="kimchi" />
      <Food name="ramen" />
      <Food name="samgiopsal" />
    </div>
  );
}

// function Food(props) {
//   return <h3>I like {props.name}!</h3>;
// }

// Same as above
function Food({ name }) {
  return <h3>I like {name}!</h3>;
}

export default App;
