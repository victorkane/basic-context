import React, { Component } from 'react'
import './App.css'

const AppContext = React.createContext()

class AppProvider extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Red />
      </AppProvider>
    )
  }
}

const Green = () => (
  <div className="green">
     <AppContext.Consumer>
        {(context) => context.number}
      </AppContext.Consumer>
  </div>
)

const Blue = () => (
  <div className="blue">
    <AppContext.Consumer>
        {(context) => <button onClick={context.inc}>INC</button>}
      </AppContext.Consumer>
    <Green />
  </div>
)

const Red = () => (
  <div className="red">
    <AppContext.Consumer>
      {(context) => context.number}
    </AppContext.Consumer>
    <Blue />
  </div>
)

export default App
