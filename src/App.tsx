import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Stocks from './Pages/Stocks'
import Chart from './components/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Stocks />} />
          <Route path="/stocks/:symbol" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
