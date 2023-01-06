import React from "react";
import './portfolio.css';
import dash from '../../assets/img/stocat.png'

export default function Portfolio()
    {
        return (
            <section id="porto-page">
                <div className="porto-container">
                    <div className="porto-content">
                        <div className="judul-porto">
                            <h1>My Works</h1>
                        </div>
                        <div className="porto-card">
                            <div className="project-ss">
                                <img src={dash} alt="" />
                            </div>
                            <div className="project-desc">
                                <h1>Stocat</h1>
                                <p>
                                    Stocat is a stock mamagement web, i built this website on November 2022. I use Php and Mysql to built this website, fitures in this website is; Login and Registration and simple CRUD (Create, Read, Update, and Delete).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }