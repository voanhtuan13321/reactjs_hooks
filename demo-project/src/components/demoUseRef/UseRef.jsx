import React, { useRef, useState } from 'react';

export default function UseRef() {
  // giá trị
  const counterRef = useRef(0);

  // tham chiếu đối tượng DOM
  const h1Ref = useRef(null);

  const [count, setCount] = useState(0);

  const increment = () => {
    counterRef.current += 1;
    console.log(counterRef.current);
  };

  const chageColor = () => {
    console.log(h1Ref.current);
    h1Ref.current.style = 'color: red';
  };

  return (
    <div>
      <h1 ref={h1Ref}>Use Ref</h1>
      <p>Count: {counterRef.current}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={chageColor}>Chage color</button>

      <p>Count state: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(counterRef.current);
        }}
      >
        set state
      </button>
    </div>
  );
}
