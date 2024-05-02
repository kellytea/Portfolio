import React from 'react';
import './intro.css';
import photo from '../../assets/photo copy.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <div className="introText">
          <div className="wrapper">
            <span className="Hello">Hello World, I'm Kelly!</span>
          </div>
            <span className="Bio">An aspiring software developer. </span>
            <p className="Desc">I'm currently a second year computer science student based in Phoenix, Arizona. I'm an avid learner with hopes of expanding my background in software development and data science. Feel free to contact me at kellynhitran@gmail.com</p>
        </div>
        <img src={photo} alt="profile" className="Photo"/>
      </div>
  </section>
  )
}

export default Intro;