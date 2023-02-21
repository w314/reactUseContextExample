import { useState, createContext } from 'react'

export const ThemeContext = createContext(true)


const ThemeProvider = ({children}: {children: React.ReactNode}) => {

  // create state 
  const [ darkTheme, setDarkTheme ] = useState(false)

  return (
    // pass the current value of the state variable darkTheme as context value
    <ThemeContext.Provider value={darkTheme}>
      {children}
    </ThemeContext.Provider>

  )
}

export default ThemeProvider


