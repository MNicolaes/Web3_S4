import React from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import './App.css'
import AppRouter from '../AppRouter'

const {currentTheme, Themes} = useContext(ThemeContext)
function App() {
  return (
    <AppRouter />
  )
}

export default App;
