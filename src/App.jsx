import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, useEffect, useState } from "react"
import Entry from "./Pages/Entry"
import EntryWithChabat from "./Pages/EntryWithChabat"
import Home from "./Pages/Home"
import HomeWithChabat from './Pages/HomeWithChabat'
import TooBig from "./Pages/TooBig"
import Fallback from './Components/Fallback'

function App() {

  const innerWidth = window.innerWidth
  const [showFallback, setShowFallback] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(() => {
        setShowFallback(false)
    }, 1000);

    return ()=> clearTimeout(timer)
  }, [])

  if (showFallback) return <Fallback />

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={innerWidth < 450 ? <Entry /> : <TooBig />} />
          <Route path="/with-chabat" element={innerWidth < 450 ? <EntryWithChabat /> : <TooBig />} />
          <Route path="/home" element={innerWidth < 450 ? <Home /> : <TooBig />} />
          <Route path="/home-with-chabat" element={innerWidth < 450 ? <HomeWithChabat /> : <TooBig />} />
        </Routes>
      </Suspense>
    </BrowserRouter> 
    </>
  )
}

export default App
