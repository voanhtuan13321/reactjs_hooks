import React, { Component } from 'react';

export default class StateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log('render');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
