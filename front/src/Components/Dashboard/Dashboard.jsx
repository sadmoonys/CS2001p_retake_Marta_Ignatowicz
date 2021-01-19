import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import SubjectsList from "./SubjectsList/SubjectsList"
import NewNote from './NewNote/NewNote'

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

    render() { 
        return (  
             <html>
                 <Header/>
                <form >
                    <NewNote/>
                </form>
                
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
                        entries={this.state.items} />
                </form>
                 <Footer/>
             </html>

        );
    }
}
 
export default Dashboard;