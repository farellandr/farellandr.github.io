import React from "react";
import './about.css';
import User from '../../assets/img/itsme.jpeg'

export default function About()
    {
        return (
            <section id="about-page">
                <div className="about-container">
                    <div className="about-content photo">
                        <div className="my-photo">
                            <img src={User} alt="konzz" />
                        </div>
                    </div>
                    <div className="about-content my-info">
                        <h1>About Me</h1>
                        <p>My full name is Farell Andreano, im a hard working person, love to work in a team, i have good communication and im a loyal person.</p>
                        <table>
                        <tr>
                                <td>Address</td>
                                <td className="auto-padding">:</td>
                                <td>Dewi Sartika, Bekasi.</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className="auto-padding">:</td>
                                <td>farellandreano@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td className="auto-padding">:</td>
                                <td>+62 813-8301-3229</td>
                            </tr>
                            <tr>
                                <td>Birthdate</td>
                                <td className="auto-padding">:</td>
                                <td>03/05/2006</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        )
    }