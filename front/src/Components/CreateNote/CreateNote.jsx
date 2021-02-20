import React, { Component } from 'react';
import NewNote from './NewNote/NewNote'
import ListOfNotes from './ListOfNotes/ListOfNotes'
import HeaderAfterLogin from '../Header/HeaderAfterLogin'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Auth from '../../Auth';
import './CreateNoteStyle.css'


class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        }
    }

    createNote(id, title, text) {
        const newNote = { id, title, text};
        const newArrayNotes = [...this.state.notes, newNote];
        const newState = {
            notes: newArrayNotes
        }
        this.setState(newState)
    }

    deleteNote(index) {
        let arrayNotes = this.state.notes;
        arrayNotes.splice(index, 1);
        console.log(index)
        this.setState({ nota: arrayNotes })
    }

    componentDidMount() {
        axios.get('/api/notes/load', {
            headers: {
                'Authorization': `Bearer ${Auth.token}`
            }
        })
            .then(response => {
                for (var n = 0; n <= response.data.length; n++) {
                    this.createNote(response.data[n].id, response.data[n].title, response.data[n].text)
                }


            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { data } = this.props.location
        return (
            <html>
                <HeaderAfterLogin />
                <section className="noteBody">
                    <div className="FolderDiv">
                        {data}
                    </div>
                    <NewNote
                        className="Notes"
                        categories={this.state.categories}
                        createNote={this.createNote.bind(this)}
                    />
                    <div className="FolderDiv">
                        Notes on this folder
                    </div>
                    <main>

                        <div>
                          

                        </div>
                        <ListOfNotes
                            deleteNote={this.deleteNote.bind(this)}
                            notes={this.state.notes} />
                    </main>
                </section>
                <footer>
                    <Link className="returnFolder" to="/Categories">
                        <p className="btnBlue">&lt;</p>  Return to folders
                    </Link>
                </footer>
            </html>

        );
    }
}

export default CreateNote;