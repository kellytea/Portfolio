import React from 'react';
import './intro.css';
import ContactImg from '../../assets/icons8-paper-airplane-64.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="Hello">Hello World, I'm <span className="Kelly">Kelly</span>!</span>
            <span className="Bio">An aspiring software developer. </span>
            <p className="Desc">I'm currently a second year computer science student based in Phoenix, Arizona. I'm an avid learner with hopes of expanding my background in software development and data science. Feel free to contact me at kellynhitran@gmail.com</p>
            <a href="mailto:kellynhitran@gmail.com">
                <button className="Contact"><img src={ContactImg} alt="C" className='ContactImg'/>Let's Chat</button>
            </a>
        </div>
    </section>
  )
}

export default Intro;