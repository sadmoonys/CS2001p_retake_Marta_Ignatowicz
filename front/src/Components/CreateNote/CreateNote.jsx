import React, { Component } from 'react';
import NWLOGO from '../../Images/NWLOGO.png'
import NewNote from './NewNote/NewNote'
import ListOfNotes from './ListOfNotes/ListOfNotes'
import './CreateNoteStyle.css'
import auth from '../../Auth';
import { Link } from 'react-router-dom';

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
           
        }
    }

    createNote(title, text, category) {
        const newNote = { title, text, category };
        const newArrayNotes = [...this.state.notes, newNote];
        const newState = {
            notes: newArrayNotes
        }
        this.setState(newState)
    }
    

    deleteNote(index) {
        let arrayNotes = this.state.notes;
        arrayNotes.splice(index, 1);
        this.setState({ nota: arrayNotes })
    }

    render() {
        return (
            <html>
                <header className="classHeader">
                    <section className="header">
                        <img src={NWLOGO} alt="" className="image" />
                        <ul className="options">
                            <Link to="/">
                                <li><a className="options" href="">HOME</a></li>
                            </Link>
                            <li><a className="options" href="">DISCOVERY</a></li>
                            <li><a className="options" href="">SOCIAL</a></li>
                        </ul>
                        <div className="profLog">
                            <Link to="/UserProfile" >
                                <p>User Profile</p>
                            </Link>
                            <Link>
                                <p onClick={() => {
                                    auth.logout(() => {
                                        this.props.history.push('/')
                                    })
                                }}>Log Out</p>
                            </Link>
                        </div>
                    </section>
                </header>


                <section className="noteBody">
                    <NewNote 
                    className="Notes" 
                    categories={this.state.categories}
                    createNote={this.createNote.bind(this)}
                     />
                    <div class="top">
                        <p>Notes on this folder</p>
                    </div>
                    <main>
                        <ListOfNotes
                        deleteNote={this.deleteNote.bind(this)}
                        notes={this.state.notes} />
                    </main>
                    
                </section>
            </html>

        );
    }
}

export default CreateNote;