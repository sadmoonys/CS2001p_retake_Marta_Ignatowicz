import React, { Component } from 'react';
import Header from '../Header/Header'
import NewNote from './NewNote/NewNote'
import ListOfNotes from './ListOfNotes/ListOfNotes'
import './CreateNoteStyle.css'
import auth from '../../Auth';

class Dashboard extends Component {
    constructor(){
        super();
        this.state =  {
            notes: []
        }
    }

    createNote(title, text){
       const newNote = {title, text};
       const newArrayNotes = [...this.state.notes, newNote];
       const newState = {
           notes: newArrayNotes
       }
       this.setState(newState)
    }

    deleteNote(index){
        let arrayNotes = this.state.notes;
        arrayNotes.splice(index,1);
        this.setState({nota:arrayNotes})
    }
       
    render() { 
        return (  
             <html>
                <Header/>
                <section className="noteBody">
                    <NewNote  className="Notes" createNote={this.createNote.bind(this)}/>
                    <ListOfNotes 
                    deleteNote={this.deleteNote.bind(this)}
                    notes={this.state.notes}/>
                    <div class="top">
                            <p>Name</p>
                            <p>Date</p>
                        </div>
                </section>
                <button onClick={()=> {
                    auth.logout(()=>{
                        this.props.history.push('/')
                    })
                }}>Log Out</button>
             </html>

        );
    }
}

export default Dashboard;