  
import React, { Component } from "react";
//import NoteCard from "../NoteCard/NoteCard";
//import "./ListOfNotesStyle.css"
class ListOfCategories extends Component {
 
  render() {
    return (
      <ul className="CategoryArea">
        {this.props.notes.map((note, index) => {
          return (
            <div className="categoriesAlone" key={index}>

              <NoteCard 
              indice = {index}
              deleteCategory={this.props.deleteCategory}
              updateCategory={this.props.updateCategory}
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