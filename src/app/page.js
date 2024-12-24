import React from 'react'
import Navbar from './Navbar/page'
import Hero from './Hero/page'
import About from './About/page'
import Services from './Services/page'

import Contact from './Contact/page'
import { ToastContainer } from 'react-toastify'

const page = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      
    </div>
  )
}

export default page
