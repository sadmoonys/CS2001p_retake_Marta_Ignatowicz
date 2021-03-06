import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import Screens from "../../Images/screens.png"
import notes from "../../Images/sharenotes.png"
import { Link } from 'react-router-dom';
import "./LandingStyle.css"


class LandingIndex extends Component {
    render() {
        return (
            <section>
                <Header />
                <main >
                    <div className="firstBox">
                        <div className="box">
                            <img className="collaboration" src={notes} alt="" />
                            <div className='signUp'>
                                <Link to="/Signup" className="btn">
                                    SIGN UP HERE
                                </Link  >
                                <p>JOIN NOTWARE TODAY!</p>
                            </div>
                        </div>

                        <div className="aboutBox" >
                            <p className="what">WHAT IS NOTEWARE?</p>
                            <div className="aboutBox1">
                                <p>
                                    NOTEWARE is a notetaking app that aims to address the UN's goal to provide Quality Education for everyone.
                                <br></br>
                                    <br></br>
                                    <br></br>
                                We aim to help students connect and learn through our app. You can use our collabroative platform to create, edit and share notes as well as categorise them using hashtags to help improve your search.
                                <br></br>
                                Thanks to the app being interactive, you can use feedback left by other students to improve your notes and get the most of your time!
                            </p>
                                <br></br>
                            </div>
                        </div>
                    </div>


                    <div className="secondBox">
                        <div className="benfits"> <b></b>
                            <p> BENIFITS OF USING NOTEWARE </p>
                            <br></br>
                            <br></br>
                            <p> Notesfeed- You can share your notes with Friends  </p>
                            <br></br>
                            <p> Comment section- You can recieve feedbacks from your collegues and help them by commenting your thoughts!</p>
                            <br></br>
                            <p> Votes and Ranks- You can vote what the best notes and resumes. </p>
                        </div>

                        <img className="screens" src={Screens} alt="" />
                    </div>

                </main>
                <Footer />
            </section>
        );
    }
}

export default LandingIndex;