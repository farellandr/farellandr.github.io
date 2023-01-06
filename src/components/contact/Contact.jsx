import React, {useState} from "react";
import './contact.css';

export default function Contact()
    {

        const [formState, setFormState] = useState({})

        const changeHandler = (event) => {
            setFormState({...formState, [event.target.name] : event.target.value});
        }

        return (
            <section id="contact-page">
                <div className="contact-container">
                    <div className="judul-contact">
                        <h1>Get In Touch</h1>
                        <p>Feel free to contact me!</p>
                    </div>
                    <div className="contact-form">
                        <form action="">
                            <div className="input">
                                <div className="inputs">
                                    <div className="forms">
                                        <label htmlFor="email">Email*</label>
                                        <span className="form">
                                            <i class="fa-solid fa-envelope"></i>
                                            <input  type="email" name="email" id="email" placeholder="Enter your email ..." onChange={changeHandler}/>
                                        </span>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <div className="forms">
                                        <label htmlFor="phone">Phone*</label>
                                        <span className="form">
                                            <i class="fa-solid fa-mobile"></i>
                                            <input  type="text" name="phone" id="phone" placeholder="Enter your phone ..." onChange={changeHandler}/>
                                        </span>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <div className="forms">
                                        <label htmlFor="email">Subject*</label>
                                        <span className="radio">
                                            <input type="radio" name="radio" id="general" value="general"/>
                                            <label htmlFor="general">General</label>
                                            <input type="radio" name="radio" id="hire" value="hire"/>
                                            <label htmlFor="hire">Hire Me</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="txtarea">
                                <div className="forms">
                                    <label htmlFor="message">Message*</label>
                                    <textarea name="message" id="message" placeholder="Your message here ..."></textarea>
                                    <input className="submit" type="submit" value="Send Now" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
