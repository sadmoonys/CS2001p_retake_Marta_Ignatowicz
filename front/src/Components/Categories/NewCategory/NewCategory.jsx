import React, { Component } from "react";
import axios from 'axios';
import Auth from '../../../Auth';
import "./NewNoteStyle.css"

class NewCategory extends Component {
  handleChangeTitle(e) {
    e.stopPropagation();
    this.category_name = e.target.value;
  }


  addCategories(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.addCategories(this.category_name);
    
    const formatJSON  = 
      {
        category_name : this.category_name,
      }
    
    console.log(formatJSON)
    
    const config = {
      headers: { Authorization: `Bearer ${Auth.token}` }
    };
    axios.post('/api/categories/sendCategory', formatJSON, config)
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
        onSubmit={this.addCategories.bind(this)}>

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
