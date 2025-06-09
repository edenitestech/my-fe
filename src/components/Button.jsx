import React from 'react'
export default function Button({ children, ...p }) {
  return (
    <button {...p} style={{ padding: '.5em 1em', cursor: 'pointer' }}>
      {children}
    </button>
  )
}
