import React, { useState } from 'react'; // import hook

function UseState() {
  let [count, setCount] = useState(0); // use hook
  let [count1, setCount1] = useState('nam'); // use hook

  // phuc tap
  const [count2, setCount2] = useState({
    name: 'nam',
    age: 12,
    eat: function () {},
  });

  // logic phuc tap
  /*
  setCount2(function (pre) {
    return {
      ...pre,
      name: 'new name',
    };
  });

  setCount2({
    ...count2, -> rest
    name: 'new name',
  });
  */

  console.log('render, count:', count, ', count1: ', count1);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount1(count1 + 1);
        }}
      >
        Increment
      </button>
      {/* <button onClick={() => (count += 1)}>Increment</button> */}
    </div>
  );
}

export default UseState;
