import React from 'react';
import './experience.css';
import Java from '../../assets/icons8-java-32.png';
import Python from '../../assets/icons8-python-32.png';
import CPlus from '../../assets/icons8-c-32.png';
import HTML from '../../assets/icons8-html-32.png';
import Node from '../../assets/icons8-node-js-32.png';
import Rct from '../../assets/icons8-react-js-32.png';
import Type from '../../assets/icons8-typescript-32.png';
import Next from '../../assets/nextjs-icon-svgrepo-com.png';

const experience = () => {
  return (
    <section id='experience'>
        <header className="ExpTitle">＞ Experience<span className="blink">|</span></header>
        <div className="tablist">
            <div className="tabs">

            </div>
        </div>
        <div className="skill">Technical Skills
          <div className="Languages">
            <p className="LangDesc">These are the languages that I am proficient in, but some more than others I often use for personal projects or have practiced in my academic studies.</p>
            <div className="LangIcon">
              <div className="LangTitle"><img src={Java} alt="Jav" className='LangImg'></img> Java</div>
            </div>
            <div className="LangIcon">
              <div className="LangTitle"><img src={Python} alt="Py" className='LangImg'></img> Python</div>
            </div>
            <div className="LangIcon">
              <div className="LangTitle"><img src={CPlus} alt="Cp" className='LangImg'></img> C++</div>
            </div>
          </div>
          <br></br>
          <div className="Development">
            <p className="DevDesc">These are a few technologies that I am most comfortable with in terms of full-stack development. For web development, I have adaquete experience with react and typescript frameworks.</p>
            <div className="DevIcon">
              <div className="DevTitle"><img src={HTML} alt="html" className="DevImg"></img> HTML/CSS</div>
            </div>
            <div className="DevIcon">
              <div className="DevTitle"><img src={Node} alt="node" className="DevImg"></img> Node.js</div>
            </div>
            <div className="DevIcon">
              <div className="DevTitle"><img src={Rct} alt="rct" className="DevImg"></img> React.js</div>
            </div>
            <div className="DevIcon">
              <div className="DevTitle"><img src={Next} alt="nxt" className="DevImg"></img> Next.js</div>
            </div>
            <div className="DevIcon">
              <div className="DevTitle"><img src={Type} alt="type" className="DevImg"></img> TypeScript</div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default experience