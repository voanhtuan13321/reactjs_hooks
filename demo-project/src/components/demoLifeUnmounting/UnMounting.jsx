import React, { Component } from 'react';
import Child from './Child';

export default class UnMounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUnmount: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({ shouldUnmount: true });
    }, 5000);
  }

  render() {
    console.log('render');
    if (this.state.shouldUnmount) {
      return <p>Component đã bị unmount sau 5 giây</p>;
    }
    return (
      <>
        <p>Component đang hiển thị</p>
        <Child />
      </>
    );
  }
}
