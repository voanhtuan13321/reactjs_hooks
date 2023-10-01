import React, { Component } from 'react';

export default class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount is called');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate is called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate is called');
    return 'Snapshot';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate is called');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
    console.log('Snapshot:', snapshot);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('Render is called');
    return (
      <div>
        <h1>Example Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
