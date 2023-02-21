import { useState, createContext } from 'react'

export const ThemeContext = createContext(false)


const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [ darkTheme, setDarkTheme ] = useState(false)

  return (
    <ThemeContext.Provider value={false}>
      {children}
    </ThemeContext.Provider>

  )
}

export default ThemeProvider


