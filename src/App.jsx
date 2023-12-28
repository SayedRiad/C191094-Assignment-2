import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import GivenValue from './Component/GivenValue'
import List from './Component/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <GivenValue></GivenValue>
      <List></List>
    </>
  )
}

export default App
