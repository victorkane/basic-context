import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <Red />
    )
  }
}

const Green = (props) => (
  <div className="green">
        {props.number}
  </div>
)

const Blue = (props) => (
  <div className="blue">
    <Green number={props.number} />
  </div>
)

class Red extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
  }
  render() {
    return (
      <div className="red">
        {this.state.number}
        <Blue number={this.state.number} />
      </div>
    )
  }
}

export default App
