import React, { Component } from "react";
import './NoteCardStyle.css'
import {ReactComponent as Delete} from '../../../Images/delete.svg'
import {ReactComponent as Edit} from '../../../Images/create-24px.svg'
import {ReactComponent as Editing} from '../../../Images/done-24px.svg'
import {ReactComponent as Cancel} from '../../../Images/clear-24px.svg'
import CreateNote from "../CreateNote";
class NoteCard extends Component {
  
  constructor(props){
    super(props)
    this.titlee = React.createRef( )
    this.text = React.createRef()
  }

  state = {
    isInEdit : false,
    title: "" + this.props.title,
    text: "" + this.props.text
  }

   
  delete(){
    const indice = this.props.indice;
    this.props.deleteNote(indice);
  }

  edit(){
    this.setState({
      isInEdit : !this.state.isInEdit
    })
  }
 
  
  render() {
    return (this.state.isInEdit ?
      <section className="insideNote">
        <header>
        <input type="text" ref={this.titlee} defaultValue={this.state.title}/> 
        </header>
        <textarea type="text" ref={this.text} defaultValue={this.props.text}/>
        <br/> 
        <Editing onClick={()=>this.setState({isInEdit:false, title:this.titlee.current.value, text: this.text.current.value})}/>
        <Cancel onClick={()=>this.setState({isInEdit:!this.state.isInEdit})}/>
      </section> 
      :
      <section className="insideNote">
        <h4>{this.props.category}</h4>
        <header>
          <h3>{this.state.title}</h3>
        </header>
        <p>{this.state.text}</p>
        <Delete onClick={this.delete.bind(this)}/>
        <Edit onClick={this.edit.bind(this)}/>
      </section>

    );
  }
}

export default NoteCard;
