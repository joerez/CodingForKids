import React from 'react';
import './Performances.css';
import './bootstrap.css';

let imgclass = "perfimg";
let txtclass = "txtclass"

class Performances extends React.Component {
  render() {
    return (
      <div id="performances" className="performancesSlide">
        <div className="content">

          <img className={imgclass} src="http://1.bp.blogspot.com/-equUxyMv_e4/T6s_mQLApXI/AAAAAAAACBs/F3zjYCE6guI/s1600/RobinEubanks2.jpg" />
          <h2 className={txtclass}>Performance Dates
          <br /><br />
          Day One
          <br /><br />
          <span className="careful">Info about day One</span>
          <br /><br />
          Day Two
          <br /><br />
          <span className="careful">Info about day Two</span>
          <br /><br />
          Day Three
          <br /><br />
          <span className="careful">Info about day Three</span>
          </h2>


        </div>
      </div>
    )
  }
}

export default Performances;
