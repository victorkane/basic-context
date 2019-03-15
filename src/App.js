import React, { Component, useContext } from 'react'
import './App.css'

const AppContext = React.createContext()

/*
 * Now we DO need AppProvider in order to be container for state
 * 
 * Note that we could do away with Class Component
 *     and replace it with a function component if we useState()
 */
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

/*
 * We don't need no class component for App
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
// const App = () => <Red />

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div class="col-sm-4" />
        <div class="container col-sm-4">
          <Red />
        </div>
        <div class="col-sm-4" />
      </AppProvider>
    )
  }
}

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
  const context = useContext(AppContext)
  return (
    <div className="blue">
      <button onClick={context.inc}>INC</button>
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
