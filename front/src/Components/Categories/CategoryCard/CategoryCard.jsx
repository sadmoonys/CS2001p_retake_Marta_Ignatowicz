import React, { Component } from "react";
import './NoteCardStyle.css'
import { ReactComponent as Delete } from '../../../Images/delete.svg'
import { ReactComponent as Edit } from '../../../Images/create-24px.svg'
import { ReactComponent as Editing } from '../../../Images/done-24px.svg'
import { ReactComponent as Cancel } from '../../../Images/clear-24px.svg'
import axios from 'axios';
import Auth from '../../../Auth';
class CategoryCard extends Component {

  constructor(props) {
    super(props)
    this.titlee = React.createRef()
 //   this.text = React.createRef()
    //What is titlee?
  }

  state = {
    isInEdit: false,
  }

  delete() {
    const indice = this.props.indice;
    this.props.deleteCategory(indice);

    const config = {
      headers: { Authorization: `Bearer ${Auth.token}` }
    };
    axios.delete(`http://localhost:8080/api/categories/delete/${this.props.id}`, config)
  }

  edit() {
    this.setState({
      isInEdit: !this.state.isInEdit
    })
  }

  submitHandler = e => {
    const indice = this.props.indice;
    this.props.updateNote(indice, this.titlee.current.value, this.text.current.value, this.props.id)


    this.setState({
      isInEdit: false,
    })
    e.preventDefault()
    
    const formatJSON =
    {
      id: this.props.id,
      title: this.titlee.current.value,
    //  text: this.text.current.value
    }

    console.log(formatJSON)
    const config = {
      headers: { Authorization: `Bearer ${Auth.token}` }
    };

    axios.post('http://localhost:8080/api/categories/updateCategory', formatJSON, config)
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    return (this.state.isInEdit ?
      <section className="insideNote">
        <header>
          <textarea
            className="changeTitle"
            type="text"
            ref={this.titlee}
            id="" rows="1"
            defaultValue={this.props.title} />
        </header>
        <br />
        <Editing
          onClick={this.submitHandler}
        />

        <Cancel onClick={() => this.setState({ isInEdit: !this.state.isInEdit })} />
      
      </section>
      :
      <section className="insideNote">
        <h4>{this.props.category}</h4>
        <header>
          <h3 className="titleNote">{this.props.title}</h3>
        </header>
      </section>

    );
  }
}

export default CategoryCard;