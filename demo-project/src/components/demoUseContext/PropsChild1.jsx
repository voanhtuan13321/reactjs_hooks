import React from 'react';
import PropsChild2 from './PropsChild2';

export default function PropsChild1({ name }) {
  return (
    <>
      <div>PropsChild1</div>
      <PropsChild2 name={name} />
    </>
  );
}
