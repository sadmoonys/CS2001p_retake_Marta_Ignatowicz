import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import SubjectsList from "./SubjectsList/SubjectsList"
import './DashboardStyle.css'

class Dashboard extends Component {
    
   constructor(props){
        super(props); 
        
        this.state={
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(event){
        if (this._inputElement.value !== ""){
            var newItem = {
                text:this._inputElement.value,
                Key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });
        }

        this._inputElement.value = "";
        console.log(this.state.items);
        event.preventDefault();
    }

    deleteItem(){
        console.log("deletar")
    }

    render() { 
        return (  
             <html>
                 <Header/>
                <form onSubmit={this.addItem}>
                        <input type="text" placeholder="Insert your subject"  ref={(a) => this._inputElement = a}/>
                        <button class="button">Create</button>
                        <div class="top">
                            <p>name</p>
                            <p>date</p>
                        </div>
                        <br/>
                        <br/>
                        <SubjectsList 
                        delete = {this.deleteItem.bind(this)}
                        entries={this.state.items} />
                </form>
                 <Footer/>
             </html>

        );
    }
}
 
export default Dashboard;