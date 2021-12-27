import React, { Component } from "react";
import { SiPython } from 'react-icons/si';
import Slide from "react-reveal";
import './Resume.css'

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skills = this.props.data.skills;
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

    function getWorkDescription(points) {
      let arr = [];
      console.log(points);
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
            {getWorkDescription(work.description)}
          </div>
        </div>
      );
    });

    function getSkills() {
      let arr = [];
      skills.forEach(skill => {
        arr.push(
        <div className="item">
          <img src={skill.image}/>
          <p style={{ textAlign: "center" }} > {skill.name} </p>
        </div>
        );
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
          <div className="row skill">
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
      </section>
    );
  }
}

export default Resume;
