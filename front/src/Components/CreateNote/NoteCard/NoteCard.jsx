import React, { Component } from "react";
import './NoteCardStyle.css'
import {ReactComponent as Delete} from '../../../Images/delete.svg'
class NoteCard extends Component {
  
  delete(){
    const indice = this.props.indice;
    this.props.deleteNote(indice);
  }
  
  render() {
    return (
      <section className="insideNote">
        <header>
          <h3>{this.props.title}</h3>
        </header>
        <p>{this.props.text}</p>
        <Delete onClick={this.delete.bind(this)}/>
      </section>
    );
  }
}

export default NoteCard;