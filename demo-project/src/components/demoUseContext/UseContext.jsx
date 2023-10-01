import React from 'react';
import Child from './Child';

// create context
const MyContext = React.createContext();

export default function UseContext() {
  // Provider bao bọc những component muốn sử dụng context
  return (
    <MyContext.Provider value='Hello, World!'>
      <h1>Paren</h1>
      <Child />
    </MyContext.Provider>
  );
}

export { MyContext };
