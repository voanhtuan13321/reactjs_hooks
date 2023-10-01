import React, { Component } from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log('Child', props);
    // props.name = 'new name'; // không được
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>{this.props.age}</p>
      </div>
    );
  }
}
