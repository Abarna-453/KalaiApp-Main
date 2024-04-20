import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import BharatanatyamNews from "../components/BharatanatyamNews";
import Work from "../components/Work";
const Dance1 = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Bharatanatyam." text="Indian classical dance"/>
      <Work/>
      <BharatanatyamNews/>
      <Footer/>
      
    </div>
  )
}

export default Dance1
