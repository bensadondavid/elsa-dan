import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import Entry from "./Pages/Entry"
import Home from "./Pages/Home"
import TooBig from "./Pages/TooBig"
import Fallback from './Components/Fallback'

function App() {

  const innerWidth = window.innerWidth

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={innerWidth < 410 ? <Entry /> : <TooBig />} />
          <Route path="/home" element={innerWidth < 410 ? <Home /> : <TooBig />} />
        </Routes>
      </Suspense>
    </BrowserRouter> 
    </>
  )
}

export default App
