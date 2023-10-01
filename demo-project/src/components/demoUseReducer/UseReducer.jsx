import React, { useReducer } from 'react';

// create reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      const newCount = state.count - 1;
      if (newCount < 0) {
        return state;
      }
      return { count: newCount };
    default:
      return state;
  }
}

export default function UseReducer() {
  let [state, dispatch] = useReducer(reducer, { count: 0 }); // use hook

  return (
    <div>
      <h1>useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button
        onClick={() => {
          state = state + 1;
        }}
      >
        State
      </button>
    </div>
  );
}
