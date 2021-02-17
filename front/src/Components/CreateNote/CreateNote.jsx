import React, { Component } from 'react';
import NewNote from './NewNote/NewNote'
import ListOfNotes from './ListOfNotes/ListOfNotes'
import HeaderAfterLogin from '../Header/HeaderAfterLogin'
import './CreateNoteStyle.css'


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
                <HeaderAfterLogin />
                <section className="noteBody">
                    <div className="FolderDiv">
                        Current folder
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