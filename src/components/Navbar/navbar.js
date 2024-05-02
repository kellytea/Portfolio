import React from 'react';
import './navbar.css';
import email from '../../assets/icons8-mail-32.png';
import linkedin from '../../assets/icons8-linkedin-32 (1).png';
import github from '../../assets/icons8-github-32.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="header">Kelly Tran</div>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Experience</Link>
            <Link className="desktopMenuListItem">Projects</Link>
        </div>
        <div className="contactLinks">
            <a href="mailto:kellynhitran@gmail.com">
                <img src={email} alt="Gmail" className="links" />
            </a>
            <a href="https://www.linkedin.com/in/kellytrann">
                <img src={linkedin} alt="LinkedIn" className="links" />
            </a>
            <a href="https://github.com/kellynhitran">
                <img src={github} alt="GitHub" className="links" />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
