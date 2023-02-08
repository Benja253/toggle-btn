import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToggleBtn from './components/ToggleBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ToggleBtn />
    </div>
  )
}

export default App
