import  styled from '@emotion/styled'
// import useContext and the context to be used
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function FunctionalComponent() {

  // set up variable that will use the context
  const darkTheme = useContext(ThemeContext) 

  // STYLED COMPONENTS
  const Div = styled.div({
    margin: '20px',
    padding: '20px',
    // set colors based on darkThem variable
    backgroundColor: darkTheme ? '#000' : 'lightgray',
    color: darkTheme ? 'white' : 'black',
  })



  return (
    <div>
      <h3>Function Component</h3>
      <button>Toggle Theme</button>
      <Div>I am a div with a {darkTheme ? 'DARK' : 'LIGHT'} THEME.</Div>
    </div>
  )
}

