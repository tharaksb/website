import React, { Component } from "react";
import './About.css'
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1200}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <div className="about-text">
                <h2 className="about-heading">
                About Me{' '}
                <span role="img" aria-label="lightning">
                  😄
                </span>
                </h2>
                <p className="about-point">
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>{' '}
                  A Computer Science Graduate Student at University of California, Irvine. <br />
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>{' '}
                  Actively seeking for Software Development Internship roles starting from Summer'22. <br />
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>{' '}
                  I have an overall experience of 2 years in Software Development with F5 Inc & Practo.
                </p>
              </div>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-download"></i> Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
