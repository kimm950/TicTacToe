import React, { Component } from 'react'

interface State {
  value?: string | null,
}

export default class Square extends Component<State> {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }

  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}
