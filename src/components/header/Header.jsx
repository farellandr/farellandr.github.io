import React from "react";
import './header.css'

export default function Header()
 {
    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    <span>FARELLANDR</span>
                </div>
                <ul className="nav-link">
                    <li><a href="#home-page">
                        <span>Home</span>    
                    </a></li>
                    <li><a href="#about-page">
                        <span>About</span>    
                    </a></li>
                    <li><a href="#porto-page">
                        <span>My Works</span>    
                    </a></li>
                    <li><a href="#contact-page">
                        <span>Contact</span>    
                    </a></li>
                </ul>
                <ul className="socmed">
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/farellandr/">
                    <i class="fa-brands fa-instagram"></i>
                    </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/farell-andreano-759772256/">
                    <i class="fa-brands fa-linkedin"></i>
                </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/farellandr">
                    <i class="fa-brands fa-github"></i>    
                </a></li>
                </ul>
            </div>
        </nav>
    )
}
