  
import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./ListOfNotesStyle.css"
class ListOfNotes extends Component {
 
  render() {
    return (
      <ul className="NotesArea">
        {this.props.notes.map((note, index) => {
          return (
            <div className="notesAlone" key={index}>

              <NoteCard 
              indice = {index}
              deleteNote={this.props.deleteNote}
              title={note.title} 
              text={note.text}
              id={note.id}
              />
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ListOfNotes;