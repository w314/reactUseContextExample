import React from 'react'
// import useContext and the context to be used
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function FunctionalComponent() {

  // set up variable that will use the context
  const darkTheme = useContext(ThemeContext) 
  
  return (
    <div>
      <h3>Function Component</h3>
      <button>Toggle Theme</button>
      <div>I am a div with a dark and a light theme.</div>
    </div>
  )
}
