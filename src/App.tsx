import FunctionalComponent from "./FunctionalComponent"
// import ThemeProvider
import ThemeProvider from "./ThemeContext"

function App() {


  return (
    // wrap children in ThemeProvider
    // all children will be able to access ThemeContext that ThemeProvder provides
    <ThemeProvider>
      <h1>Demonstrate useContext() Hook</h1>

      <p>By clicking upon the <span>Toggle Theme</span> button you can toggle 
      regular and dark theme in the component  below.</p>

      <FunctionalComponent/>
    </ThemeProvider>
  )
}

export default App
