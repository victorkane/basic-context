import React, { Component } from 'react'
import './App.css'

const AppContext = React.createContext()

class App extends Component {
  render() {
    return (
      <Red />
    )
  }
}

class AppProvider extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
  }
  render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
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

class Red extends Component {
  render() {
    return  <AppProvider> 
        <div className="red">
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
          <Blue />
        </div>
    </AppProvider>
  }
}

export default App
