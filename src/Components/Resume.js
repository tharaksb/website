import React, { Component } from "react";
import {Card} from 'react-bootstrap';
import Slide from "react-reveal";
import './Resume.css'
import ieeeImage from './images/802.11ah-wifi-halow-FI.png'
import evcImage from './images/3gpp.png'

class Resume extends Component {

  render() {
    if (!this.props.data) return null;

    const skills = this.props.data.skills;
    const projects = this.props.data.projects;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    function getDescription(points) {
      let arr = [];
      points.forEach(element => {
        arr.push(<p className="workDescPoints"> {element} </p>);
      });
      return arr;
    }

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <div className="workDesc"> 
            {getDescription(work.description)}
          </div>
        </div>
      );
    });

    function getSkills() {
      let arr = [];
      skills.forEach(skill => {
        arr.push(
        <div className="item">
          <img src={skill.image} alt={skill.name}/>
          <p style={{ textAlign: "center" }} > {skill.name} </p>
        </div>
        );
      })
      return arr; 
    }

    function getProjects() {
      let arr = [];
      projects.forEach(element => {
        arr.push(
          <div >
          <h1>{element.title}</h1>
          <div className="workDesc"> 
            {getDescription(element.description)}
          </div>
        </div>
        )
      })
      return arr;
    }

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="container">
                {getSkills()}
              </div>

            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Publications</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="publs-container">
                <div className="item">
                  <a href={"https://ieeexplore.ieee.org/document/9279391"} target="_blank" rel="noopener noreferrer" color="white">
                    <Card border="light" style={{ width: '27rem' }}>
                      <Card.Img variant="top" src={ieeeImage}/>
                      <Card.Body>
                        <Card.Title>{"Dynamic Channel Access Scheme"}</Card.Title>
                      </Card.Body>
                    </Card>
                  </a>
                </div>

                <div className="item">
                <a href={"https://link.springer.com/chapter/10.1007/978-981-15-2612-1_13"} target="_blank" rel="noopener noreferrer" color="white">
                  <Card border="light" style={{ width: '27rem' }}>
                    <Card.Img variant="top" src={evcImage}/>
                    <Card.Body>
                      <Card.Title>{"Seven Stage Speech Classifier"}</Card.Title>
                    </Card.Body>
                  </Card>
                </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>

            <div className="nine columns main-col">{getProjects()}</div>
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
