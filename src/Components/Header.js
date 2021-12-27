import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Typewriter from 'typewriter-effect'
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    // const description = this.props.data.description;
    const linkedinURL = this.props.data.social1.linkedin;
    const githubURL = this.props.data.social1.github;
    const twitterURL = this.props.data.social1.twitter;
    const instagramURL = this.props.data.social1.instagram;
    const leetcodeURL = this.props.data.social1.leetcode;

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
              <a className="smoothscroll" href="#portfolio">
                Works
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
                  color: '#FFFFFF',
                  fontWeight: 500,
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
                <li key="linkedin">
                  <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li key="github">
                  <a href={githubURL} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li key="instagram">
                  <a href={instagramURL} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li key="twitter">
                  <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li key="leetcode">
                  <a href={leetcodeURL} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-code"></i>
                  </a>
                </li>
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
