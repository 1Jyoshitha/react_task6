import React from 'react';
import 'C:/Users/HP/Desktop/mern full stack/react project/task6/src/assets/styles/style.css';

function Header() {
    return (
      <header id="header" className="header">
        <div className="container">
          <div className="header-content">
            <h1>Jyoshitha</h1>
            <p>Web Developer</p>
            <div className="header-buttons">
              <a href="#about">
                <button>Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;