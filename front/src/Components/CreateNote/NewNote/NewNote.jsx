import React, { Component } from "react";
import "./NewNoteStyle.css"

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.note = "";
  }

  handleChangeCategory(e){
    e.stopPropagation();
    this.category = e.target.value;
  }

  handleChangeTitle(e) {
    e.stopPropagation();
    this.title = e.target.value;
  }

  handleChangeNote(e) {
    e.stopPropagation();
    this.note = e.target.value;
  }

  createNote(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.createNote(this.title, this.note, this.category);
  }

  render() {
    return (
      <form className="noteArea"
        onSubmit={this.createNote.bind(this)}>

        <select onChange={this.handleChangeCategory.bind(this)}>
          <option >Sem Categoria</option>
          {this.props.categories.map((category => {
              return <option>{category}</option>
            }))
          }
        </select>

        <input
          className="inputTitle"
          type="text"
          placeholder="Title"
          onChange={this.handleChangeTitle.bind(this)} />

        <textarea
          className="textAreaNote"
          name=""
          placeholder="Write your note..."
          id="" cols="60" rows="15"
          onChange={this.handleChangeNote.bind(this)} />

        <button className="createNoteBtn">Create note</button>
      </form>
    );
  }
}

export default NewNote;
