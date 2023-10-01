import React, { useEffect } from 'react';

export default function Child() {
  // cleanup functions
  useEffect(() => {
    return () => {
      console.log('cleanup');
    };
  }, []);

  return <div>Child</div>;
}
