import React, { Component } from 'react';
import Child from './Child';

export default class Props extends Component {
  render() {
    return (
      <>
        <h1>Props</h1>
        <Child
          name='tuan'
          age={13}
        />
      </>
    );
  }
}
