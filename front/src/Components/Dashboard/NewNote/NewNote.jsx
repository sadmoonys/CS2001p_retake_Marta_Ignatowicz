import React, { Component } from "react";
import "./NewNoteStyle.css"
import {ReactComponent as Delete} from '../../../Images/delete.svg'

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
       
       <div className="createNotesDiv">
        <button className="createNoteBtn" onClick={(e)=>this.addNote(e)}>Create Note</button>
      </div>
        <div className="divNoteBloc">
        {this.state.notes.map((note, index) => {
          return (
          <div className="notesBloc" key={index}>
              <textarea 
              className="textArea"
              onChange={(e)=> this.handleChange(e, index)} 
              value={note}
              rows="10"
              cols="30"/>
              <Delete/>
          </div>);
        })}
      </div>
      
      
    </div>
    );
  }
}

export default NewNote;
