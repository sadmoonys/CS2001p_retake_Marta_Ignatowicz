import React, { Component } from "react";
import "./NewNoteStyle.css"

class NewNote extends Component {
  constructor(props){
    super(props);
    this.title = "";
    this.note = "";
  }  

  handleChangeTitle(e){
    e.stopPropagation();
    this.title = e.target.value;
  }

  handleChangeNote(e){
    e.stopPropagation();
    this.note = e.target.value;
  }

  createNote(e){
    e.stopPropagation();
    e.preventDefault();
    this.props.createNote(this.title, this.note);
  }

  render() {
    return (
      <form className="noteArea" 
      onSubmit={this.createNote.bind(this)}>
      
        <input 
        className="inputTitle"
        type="text"  
        placeholder="Title" 
        onChange={this.handleChangeTitle.bind(this)}/>
        
        <textarea 
        className="textAreaNote"
        name="" 
        placeholder="Write your note..." 
        id="" cols="60" rows="15" 
        onChange={this.handleChangeNote.bind(this)}/>
        
        <button className="createNoteBtn">Create note</button>
      </form>
    );
  }
}

export default NewNote;
