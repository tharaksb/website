import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Typewriter from 'typewriter-effect'
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const social = this.props.data.social;

    function getSocialMediaContacts() {
      let arr = [];
      social.forEach(element => {
        arr.push(
          <li key={element.name}>
              <a href={element.url} target="_blank" rel="noopener noreferrer">
                <i className={element.className}></i>
              </a>
          </li>
        )
      });
      return arr;
    }

    return (
      <header id="home">
        <ParticlesBg type="lines" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <h3>
              <Typewriter
                textStyle={{
                  fontFamily: 'Red Hat Display',
                  color: '#0F0F0F',
                  fontWeight: 5000,
                  fontSize: '1.5em',
                }}
                options={{
                  strings: [
                    'Graduate Student',
                    'Tech Enthusiast',
                    'Programmer at heart',
                    'Love for Systems',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 25,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h3>

            <Fade bottom duration={2000}>
              <ul className="social">
                {getSocialMediaContacts()}
              </ul>
            </Fade>
        </div>
      </div>


        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
