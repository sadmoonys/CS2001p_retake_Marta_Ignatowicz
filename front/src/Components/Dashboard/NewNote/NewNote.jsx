import React, { Component } from "react";
import "./NewNoteStyle.css"

class NewNote extends Component {
  state = {
    notes: [],
  };

  addNote(e){
    e.preventDefault();
    this.setState({notes: [...this.state.notes,""]})
  }

  handleChange(e, index){
    this.state.notes[index]= e.target.value
    this.setState({notes: this.state.notes})
  }

  render() {
    return (
     <div>
        <div className="divNoteBloc">
        {this.state.notes.map((note, index) => {
          return (
          <div className="notesBloc" key={index}>
              <textarea 
              onChange={(e)=> this.handleChange(e, index)} 
              value={note}
              rows="10"
              cols="30"/>
          </div>);
        })}
      </div>
      <button onClick={(e)=>this.addNote(e)}>Create Note</button>
    </div>
    );
  }
}

export default NewNote;
