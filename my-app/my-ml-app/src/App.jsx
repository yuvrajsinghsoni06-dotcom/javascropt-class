import { useState } from 'react'
import './App.css'
import Sample from './component/Sample'
import HomePage from './component/HomePage'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <Sample count={count} setCount={setCount}/>
      <HomePage/>
    </>
  )
}

export default App