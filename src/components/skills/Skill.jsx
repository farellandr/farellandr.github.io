import React from "react";
import './skill.css';

export default function Skill()
    {
        return (
            <section id="skill-page">
                <div className="skill-container">
                    <div className="skill-content">
                        <div className="judul-skill">
                            <h1>Education</h1>
                        </div>
                        <div className="skill-list">
                            <ul>
                                <li className="iconed smp">SMPN 2 Bekasi City - Junior High School</li>
                                <li className="year">2017 - 2020</li>
                            </ul>
                            <ul>
                                <li className="iconed smk">SMKN 1 Bekasi City - Software Engineering</li>
                                <li className="year">2021 - 2024</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-content">
                        <div className="judul-skill">
                            <h1>Certificate</h1>
                            </div>
                            <div className="skill-list">
                                <ul>
                                    <li className="iconed certi">Java Fundamentals - Oracle Academy</li>
                                    <li className="year">2022</li>
                                </ul>
                            </div>
                        </div>
                    <div className="skill-content">
                        <div className="judul-skill">
                            <h1>Skill</h1>
                        </div>
                        <div className="skill-list">
                            <ul>
                                <li className="iconed gaps tml">HTML & CSS</li>
                                <li className="iconed gaps masql">MySQL</li>
                                <li className="iconed gaps riek">React</li>
                                <li className="iconed gaps lvrl">Laravel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

