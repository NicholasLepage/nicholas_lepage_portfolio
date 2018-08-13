import React, { Component } from 'react'
import './intro.css'

class Intro extends Component {

  render() {
    return(
      <div className="mainIntro">
        <div className="name-and-position">
          <h1 className="mainName">Nicholas Lepage</h1>
          <h3>Full-Stack Web Developer</h3>
        </div>

        <div className="separator"></div>

        <h5 className="description">
          Techie with teaching skills. Introduced to computers at 2 years old, <br/>
          and spent majority of childhood learning about their inner workings. <br/>
          Several small games and applications were created in the early 2010s as a <br/>
          hobby. Eagerness to pursue and share knowledge led into a bachelors of <br/>
          education and an internship in a high school which developed the ability <br/>
          to act as a mentor and an orator. Switched career paths in order to pursue <br/>
          life-long passion: technology.
        </h5>
      </div>
    )
  }

}

export default Intro