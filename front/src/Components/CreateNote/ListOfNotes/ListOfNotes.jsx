  
import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./ListOfNotesStyle.css"
class ListOfNotes extends Component {
 
  render() {
    return (
      <ul className="NotesArea">
        {this.props.notes.map((note, index) => {
          return (
            <li className="notesAlone" key={index}>
              <NoteCard 
              indice = {index}
              deleteNote={this.props.deleteNote}
              editNote={this.props.editNote}
              title={note.title} 
              text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListOfNotes;