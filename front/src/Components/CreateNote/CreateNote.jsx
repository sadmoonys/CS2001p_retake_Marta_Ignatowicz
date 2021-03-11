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
            id:"",
            title:"",
            text:""
        }
    }

    createNote(id, title, text) {
        const newNote = {id:id, title:title, text:text};
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

    updateNote(index, title, text, id){
    const updateArray = this.state.notes;
        let item = {...updateArray[updateArray[index]= {id: id, title:title, text:text}]}
        this.setState(item)
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
            <>
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
                        <ListOfNotes
                            deleteNote={this.deleteNote.bind(this)}
                            updateNote={this.updateNote.bind(this)}
                            notes={this.state.notes} 
                            title={this.state.title}/>
                    </main>
                </section>
                <footer>
                    <Link className="returnFolder" to="/Categories">
                         Return to folders
                    </Link>
                </footer>
            </>

        );
    }
}

export default CreateNote;