import './App.css'

import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header"
import Footer from './components/footer'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/services' element={<Services />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

