import { useContext } from 'react';
import { MyContext } from './UseContext';

// component con
export default function Child() {
  const value = useContext(MyContext); // lấy value bên trong context

  return (
    <div>
      <h1>Child</h1>
      <h4>{value}</h4>
    </div>
  );
  // kết quả hiển thị: Hello, World
}
