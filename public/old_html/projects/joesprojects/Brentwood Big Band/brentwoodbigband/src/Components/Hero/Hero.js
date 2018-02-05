import React from 'react';
import './Hero.css';
import './bootstrap.css';


let herobtn = "button";
let heroclass = "herocontain";

let texts = "herop"

class Hero extends React.Component {
  render() {
    return (
      <div className={heroclass}>
        <div className="hero-image">
          <div className="hero-text">
            <div className="herop">
              <h1> We Are The Brentwood Big Band! </h1>
              <p> We bring Jazz to Brentwood, CA! </p>
            </div>
            <a href="#contact"><button className={herobtn}>Contact Us!</button></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
