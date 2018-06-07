/**
 * React.createContext is passed an initial value, and returns an
 * Object with a Provider and Consumer.
 *
 * Provider is a component used higher in the component tree and
 * accepts a prop called `value`, which can be anything.
 *
 * Consumer is a component used anywhere inside a Provider and
 * accepts a prop called `children`. This prop must be a function
 * that returns a React element (JSX).
 *
 * Goal:
 * <Route path="/"><HomePage /></Route>
 * <Route path="/products"><ProductPage /></Route>
 * <Link path="/products">Products</Link>
 */
import React, { createContext } from 'react'
import history from 'browser-history'

import Route from './Route'
import Link from './Link'

const initialState = {
  url: window.location.pathname,
}

// Create a Router Context
const RouterContext = createContext()
// Extract the Provider and Consumer from the Router Context
const { Provider, Consumer } = RouterContext

class Router extends React.Component {
  state = initialState

  action = {
    go: (url) => this.setState(
      state => ({ ...state, url }),
      () => history(url)
    )
  }

  componentDidMount() {
    history((e, url) =>
      this.setState(state => ({
        ...state, url
      })
    ))
  }

  render() {
    return (
      <Provider value={{ state: this.state, action: this.action }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  Router,
  Consumer,
  Route,
  Link,
}
