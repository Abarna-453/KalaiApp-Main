import "./HeroimgStyles.css";
import React from 'react'
import IntroImg from "../assets/3.jpg"
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"src={IntroImg}alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Web: "A Cross Generation Platform"</p>
        <h1>Highlights</h1>
            <div>
                <Link to="https://artandculture.tn.gov.in/apply-post-folk-art-instructors-and-supervisors-part-time-folk-art%C2%A0training%C2%A0center-0" className="btn">
                    News
                </Link>
                <Link to="https://artandculture.tn.gov.in/event/%E0%AE%9A%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AE%AE%E0%AF%8D-%E0%AE%A8%E0%AE%AE%E0%AF%8D%E0%AE%AE-%E0%AE%8A%E0%AE%B0%E0%AF%81-%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%B5%E0%AE%BF%E0%AE%B4%E0%AE%BE-2023-24" className="btn btn-light">
                    Events
                </Link>
            </div>
      </div>
    </div>
  )
}

export default Heroimg
