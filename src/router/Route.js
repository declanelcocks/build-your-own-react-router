import React from 'react'
import pathToRegexp from 'path-to-regexp'

import { Consumer } from '.'

export default function Route(props) {
  return (
    <Consumer>
      {({ state }) => {
        const re = pathToRegexp(props.path)
        if (re.test(state.url)) return props.children
      }}
    </Consumer>
  )
}
