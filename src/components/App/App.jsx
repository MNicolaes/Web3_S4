import React from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import './App.css'
import AppRouter from '../AppRouter'

// const {currentTheme, Themes} = useContext(ThemeContext) pour con
function App() {
  //currentTheme state
  //themes array
  //function setCurrentTheme
  //Mettre un state UseState pour le current theme et on passe ça au props du themeProvider
  //On définit aussi la fonction qui va agir sur le current theme ici
  var valued={theme, themes,setCurrentTheme}
  return (
    <ThemeContext value={valued}>
      <AppRouter />
    </ThemeContext>
  )
}

export default App;
