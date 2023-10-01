import React, { Component } from 'react';

export default class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor is called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps is called');
    return {
      count: 1,
    };
  }

  componentDidMount() {
    console.log('componentDidMount is called');
  }

  render() {
    console.log('Render is called');
    console.log(this.state.count);
    return (
      <div>
        <h1>Example _Component_</h1>
      </div>
    );
  }
}
