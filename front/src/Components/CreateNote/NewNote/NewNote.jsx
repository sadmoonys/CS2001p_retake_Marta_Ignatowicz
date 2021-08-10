import React, { Component } from "react";
import axios from 'axios';
import Auth from '../../../Auth';
import "./NewNoteStyle.css"

class NewNote extends Component {
  handleChangeTitle(e) {
    e.stopPropagation();
    this.title = e.target.value;
  }

  handleChangeNote(e) {
    e.stopPropagation();
    this.text = e.target.value;
  }

  createNote(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.createNote(this.id, this.title, this.text);
    
    const formatJSON  = 
      {
        title : this.title,
        text: this.text
      }
    
    console.log(formatJSON)
    
    const config = {
      headers: { Authorization: `Bearer ${Auth.token}` }
    };
    axios.post('/api/notes/send', formatJSON, config)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <form className="noteArea"
        onSubmit={this.createNote.bind(this)}>

        <textarea
          className="inputTitle"
          type="text"
          id="" cols="60" rows="1"
          placeholder="Title"
          name="title"
          onChange={this.handleChangeTitle.bind(this)} />

        <textarea
          className="textAreaNote"
          placeholder="Write your note..."
          id="" cols="60" rows="10"
          name="text"
          onChange={this.handleChangeNote.bind(this)} />

        <button className="createNoteBtn">Save</button>
      </form>


    );
  }
}

export default NewNote;
