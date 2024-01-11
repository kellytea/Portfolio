import React from 'react';
import './projecs.css';
import folder from '../../assets/icons8-folder-30.png';
import gitsource from '../../assets/icons8-github-30.png';

const projects = () => {
  return (
    <section id='projects'>
        <header className="ProjTitle">＞ Projects<span className="blink">|</span></header>
        <div className="ProjContainer">
            <ul className="Grid">
              <li className="ProjCard">
                <div className="CardHeader">
                  <img src={folder} alt='foldericon' className="foldericon"/>
                  <div className="ExtLinks">
                    <a href="https://github.com/kellytea/Portfolio/tree/main">
                      <img src={gitsource} alt='giticon' className="gitsource"/>
                    </a>
                  </div>
                </div>
                <div className="CardTitle">Connect Four</div>
                <div className="CardDesc">My first mini-project using C. A program that takes in two players and prompts a visual Connect Four game. Additionally has a feature to replay the previous game. </div>
              </li>
            </ul>
        </div>
    </section>
  )
}

export default projects