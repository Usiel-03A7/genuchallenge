import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Starting project</h2>
      <p className='bg-blue-500'>Tailwind installed</p>
    </>
  )
}

export default App
