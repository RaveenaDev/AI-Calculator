import { useState } from 'react'
import Navbar from "./components/navbar/Navbar.jsx";
import './App.css'
import Body from "./components/body/Body.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <Body/>
    </>
  )
}

export default App
