import './App.css'

import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header"
import Footer from './components/footer'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import Projects from './pages/projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

