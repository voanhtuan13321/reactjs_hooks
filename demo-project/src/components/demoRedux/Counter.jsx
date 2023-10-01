// Counter.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from './store';

const Counter = () => {
  const count = useSelector((state) => state.count); // lấy giá trị từ store bên trong redux
  const dispatch = useDispatch();

  useEffect(() => {
    // Subscribe để theo dõi sự thay đổi của trạng thái
    const unsubscribe = store.subscribe(() => {
      // Lấy giá trị mới của count sau mỗi thay đổi
      const newCount = store.getState().count;
      console.log('New count:', newCount);
    });

    // Hủy subscribe khi unmount component
    return () => {
      unsubscribe();
    };
  }, []);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h2>Redux</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
