import React, { useEffect, useState } from 'react';
import Child from './Child';

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  console.log('render');

  // useEffect not dependency
  /*
  useEffect(() => {
    console.log('effect not dependency');
  });

  */

  // useEffect with dependencies empty
  /*
  useEffect(() => {
    console.log('effect with dependency empty');
  }, []);
  */

  // useEffect with dependencies
  /*
  useEffect(() => {
    console.log('effect with dependency');
  }, [count]);
  */

  // demo cleanup
  /*
  useEffect(() => {
    console.log('componentDidMount');
    setTimeout(() => {
      setShouldUnmount(true);
    }, 5000);
  }, []);
  */

  return (
    <React.Fragment>
      <h1>UseEffect</h1>
      <p>count: {count}</p>
      <p>count1: {count1}</p>
      <button onClick={() => setCount(count + 1)}>set count</button>
      <button onClick={() => setCount1(count1 + 1)}>set count 1</button>

      {shouldUnmount ? (
        <p>Component đã bị unmount sau 5 giây</p>
      ) : (
        <>
          <p>Component đang hiển thị</p>
          <Child />
        </>
      )}
    </React.Fragment>
  );
}
