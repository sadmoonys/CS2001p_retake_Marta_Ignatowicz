import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import pen from "../../Images/pen.png"
import notes from "../../Images/sharenotes.png"
import { Link } from 'react-router-dom';
import "./DiscoveryStyle.css"


class DiscoveryPage extends Component {
    render() {
        return (
            <section>
                <Header />
                <div className="singUp">
                    <img className="penImg" src={pen} alt=""/>
                    <div>
                        <label className='acc' for="acc">Accomplish more with Noteware</label>
                        <Link to="/Signup" style={{ textDecoration: 'none' }} className="UP">SIGN UP HERE </Link  >
                    </div>
                </div>
                <div className="bodyD">
                    <div className="firstDiv">
                        <div className="aboutBox">
                            <p>WHAT IS NOTEWARE?</p>
                            <div className="aboutBox1">
                                <p>NOTEWARE is a notetaking app that aims to address the UN's goal to provide Quality Education for everyone.
                                    <br />
                                    <br />
                                </p>
                                <br />
                            </div>
                        </div>

                        <div className="secondDiv">
                            <img className="collaboration" src={notes} alt="" />
                            <div className="secondBox">
                                <div className="benfits"> <b></b>
                                    <p> BENIFITS OF USING NOTEWARE </p>
                                    <br></br>
                                    <br></br>
                                    <p> Store notes- Best place to keep all of your notes safe </p>
                                    <br></br>
                                    <p> Notesfeed- You can share your notes with your friends!</p>
                                    <br></br>
                                    <p> Comment section- You can receive feedbacks from your colleagues and help them by commenting your thoughts!</p>
                                    <br></br>
                                    <p> Votes and Ranks- You can vote what the best notes and resume!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default LandingIndex;

