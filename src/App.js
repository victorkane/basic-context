import React, { useContext } from 'react'
// import React, { Component, useContext } from 'react'
import './App.css'

const AppContext = React.createContext({
    number: 10,
  /*
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
   */
})

/*
 * We don't need no provider or state, it's all inside AppContext!
 */
/*
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
*/

/*
 * We don't need no class component
 */
/*
class App extends Component {
  render() {
    return (
      <AppProvider>
        <Red />
      </AppProvider>
    )
  }
}
*/

// App now function component
const App = () => <Red />

const Green = () => {
  // useContext() replaces the clunky Consumer wrapper
  const context = useContext(AppContext)
  return (
    <div className="green">
      {context.number}
    </div>
  )
}

const Blue = () => {
  // useContext() replaces the clunky Consumer wrapper
  // no data, since event handler cannot be used with immutable context data
  // const context = useContext(AppContext)
  return (
    <div className="blue">
    { /* including data to do away with Provider only works with immutable data */ }
    { /* <button onClick={context.inc}>INC</button> */ }
      <button>INC</button>
      <Green />
    </div>
  )
}

const Red = () => {
  // useContext() replaces the clunky Consumer wrapper
  const context = useContext(AppContext)
  return (
    <div className="red">
      {context.number}
      <Blue />
    </div>
  )
}

export default App
