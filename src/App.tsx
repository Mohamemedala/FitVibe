// App.tsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import './App.css'
import Logo from './Components/Logo'
import About from './Components/About'
import Counter from './Components/Counter'
import Pricing from './Components/Pricing'
import Textandimg from './Components/Textandimg'
import CalorieCalculator from "./Components/CalorieCalculator"
import TrainersSection from "./Components/TrainersSection"
import HowItWorkss from "./Components/HowItWorkss"
import CTA from './Components/CTA'
import Testimonials from './Components/Testimonials'
import AboutUs from "./Components/pages/AboutUs/AboutUs"
import Pricingpage from "./Components/pages/Pricing/Pricingpage"
import Contactpage from './Components/pages/Contact/Contactpage'
import ProgramsPage from './Components/pages/Programs/ProgramsPage'

import Footer from './Components/Footer'


const Home = () => {
  return (
    <>
      <Hero />
      <Logo />
      <About />
      <Counter />
      <Textandimg />
      <CalorieCalculator />
      <HowItWorkss />
      <TrainersSection />
      <CTA />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/Programs" element={<ProgramsPage />} />
        
        
      </Routes>
    </>
  )
}

export default App
