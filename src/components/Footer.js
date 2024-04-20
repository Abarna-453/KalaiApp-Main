import "./FooterStyles.css";
import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container"></div>
      <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        </div>
        <p>
            KalaiAttam @ 2024
        </p>
        <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        +91 93609 59577</h4>
        
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",
            marginRight:"2rem"}}/>
            afrid.24it@licet.ac.in</h4>
        
            </div>
      </div>
      <div className="right"></div>
      <h4>WHY KALAI ATTAM ?</h4>
      <p>"Explore Tamil Nadu's unique dance heritage from engaging articles to interactive quizzes, our platform provides cross-generational connections,
         preserving the rich culture."</p>
         <div className="social">
         <FaFacebook size={20} style={{color:"#fff",
            marginRight:"1rem"}}/>
         <FaTwitter size={20} style={{color:"#fff",
            marginRight:"1rem"}}/>   
         <FaLinkedin size={20} style={{color:"#fff",
            marginRight:"1rem"}}/>
         </div>
    </div>
  )
}

export default Footer
