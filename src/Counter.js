// Counter.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch({ type: 'INCREMENT' });
  }

  function handleDecrement() {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;