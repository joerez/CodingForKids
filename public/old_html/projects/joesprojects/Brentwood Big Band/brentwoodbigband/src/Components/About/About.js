import React from 'react';
import './About.css';
import './bootstrap.css';



class About extends React.Component {
  render() {
    return (
      <div id="about" className="about">
      <div className="Aboutdiv">
        <h1>About Us</h1>
        <p>The Brentwood Big Band - or B3 as it is sometimes called is a Community Jazz Band that gives back to the community.</p>
        <p>The band was formerly known as the Summerset Jazz Band.</p>

        <img class="img-fluid" height="5%" src="https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CB490723-1DD8-B71B-0B46F52194599E59.jpg?width=465&quality=90&mode=crop" />
        <br />
        <br />
        <h2>All band profits are donated to Public Schools!</h2>

      </div>
      </div>
    )
  }
}

export default About;
