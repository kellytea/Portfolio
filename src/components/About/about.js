import React from 'react'
import './about.css';

const about = () => {
  return (
    <section id='about'>
        <span className="AboutTitle">＞ About Me<span className="blink">|</span></span>
        <p className="desc">I am currently working towards completing my undergraduate program at <span className="ASU">Arizona State University</span>. I aim to gain more professional experience particularly in software engineering and data science. Outside of school or work, some of my interests include creating graphic designs for fun, playing video games, and trying new food spots with friends in the area.</p>
    </section>
  );
}

export default about;