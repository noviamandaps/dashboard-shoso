import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <Dashboard />
    </div>
  )
}

export default App