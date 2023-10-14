import React from 'react';
import "C:/Users/HP/Desktop/mern full stack/react project/task6/src/assets/styles/style.css";
import exampleImage from 'C:/Users/HP/Desktop/mern full stack/react project/task6/src/assets/images/profile.jpg';

function About() {
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src={exampleImage} alt="jyoshitha" />
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Welcome to my portfolio! I am a passionate web developer with a strong
                background in React, JavaScript, and other web technologies. I enjoy
                creating interactive and user-friendly web applications that make a
                difference.
              </p>
              <p>
                Feel free to explore my work, and don't hesitate to get in touch if you
                have any questions or project ideas.
              </p>
              <div className="about-buttons">
                <a href="#contact">
                  <button>Contact Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default About;
