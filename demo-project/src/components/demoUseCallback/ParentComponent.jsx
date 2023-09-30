import { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  console.log('ParentComponent');

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('callback:', count);
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
