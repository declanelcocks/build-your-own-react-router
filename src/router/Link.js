import React from 'react'

import { Consumer } from '.'

export default function Link({ to, children, ...props }) {
  return (
    <Consumer>
      {({ action }) => (
        <button
          className="link"
          onClick={() => action.go(to)} {...props}
        >
          {children}
        </button>
      )}
    </Consumer>
  )
}
