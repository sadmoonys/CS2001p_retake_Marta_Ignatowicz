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
                <div className="singUp">
                    <div>
                        <label className='acc' for="acc">Accomplish more with Noteware</label>
                        <Link to="/Signup" style={{ textDecoration: 'none' }}className="UP">SIGN UP HERE </Link  >

                    </div>
                </div>
                <main>
                    <div className="firstBox">
                        <div className="box">
                            <img className="collaboration" src={notes} alt="" />

                        </div>

                        <div className="aboutBox" >
                            <p className="what">WHAT IS NOTEWARE?</p>
                            <div className="aboutBox1">
                                <p>
                                    NOTEWARE is a notetaking app that aims to address the UN's goal to provide Quality Education for everyone.
                                <br></br>
                                    <br></br>
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
                            <p> Store notes- Best place to keep all of your notes safe </p>
                            <br></br>
                            <p> Notesfeed- You can share your notes with your friends!</p>
                            <br></br>
                            <p> Comment section- You can receive feedbacks from your colleagues and help them by commenting your thoughts!</p>
                            <br></br>
                            <p> Votes and Ranks- You can vote what the best notes and resume!</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </section>
        );
    }
}

export default LandingIndex;

//<div className="firstBox">
//<div className="box">
//<img className="collaboration" src={notes} alt="" />
//<div className='signUp'>
  //  <Link to="/Signup" className="btn">
 //       SIGN UP HERE
 //   </Link  >
 //   <p>JOIN NOTWARE TODAY!</p>
//</div>
//</div>