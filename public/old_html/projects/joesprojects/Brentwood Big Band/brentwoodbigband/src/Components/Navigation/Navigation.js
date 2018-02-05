import React from 'react';
import './Navigation.css';
import './bootstrap.css';


let navbarclass1 = 'btn btn-primary'


class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="navvy">
          <h4 className="navtext">Brentwood Big Band</h4>
          <a href="#">Home</a> |
          <a href="#about">About</a> |
          <a href="#performances">Performances</a> |
          <a href="#contact">Contact</a>
        </nav>

      </div>
    )
  }
}

export default Navigation;
