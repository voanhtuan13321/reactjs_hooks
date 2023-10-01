import React, { Component } from 'react';

export default class Child extends Component {
  componentWillUnmount() {
    console.log('unmounting child');
  }

  render() {
    return <h1>Child</h1>;
  }
}
