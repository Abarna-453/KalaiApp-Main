import"./BharathNewsStyles.css";
import React from "react";
import {Link} from "react-router-dom";

const BharatanatyamNews = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>Articles</h3>
                <span className="bar"></span>
                <p className="btc">Narthaki</p>
                <p>Card title 1</p>
                <p>Article 1</p>
                <Link to="https://narthaki.com/info/articles/article35.html#:~:text=Historically%2C%20Bharatanatyam%20is%20the%20dance,other%20parts%20of%20the%20country." className="btn">Source</Link>
                </div>
                <div className="card">
                <h3 >Articles</h3>
                <span className="bar"></span>
                <p className="btc">Pranavam</p>
                <p>Card title 2</p>
                <p>Article 2</p>
                <Link to="https://www.pranavamschoolofdance.com/bharathanatyam-dance-and-its-cultural-significance/" className="btn">Source</Link>
                </div>
                <div className="card">
                <h3>Articles</h3>
                <span className="bar"></span>
                <p className="btc">Fobes5</p>
                <p>Card title 13</p>
                <p>Article 3</p>
                <Link to="https://www.forbes5.pitt.edu/article/effect-indian-social-structure-perception-and-development-bharatanatyam" className="btn">Source</Link>
                </div>
            </div>
            
            
            
      
    </div>
  )
}

export default BharatanatyamNews
