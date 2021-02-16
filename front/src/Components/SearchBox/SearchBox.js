

import React, { useState } from "react";



 class SearchBox extends React.Component{
     state = {
         names: [
'Maths',
'Computer Science',
'English',
'History',
        
         ],
         searchTerm: ''
     }

     editSearchTerm =(e) => {
         this.setState({searchTerm: e.target.value})
     }

     dynamicSearch = () => {
         return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
     }
     
     render() {
         return (
            <div className="">
                        
            <input 
            type="text"
            names ={this.dynamicSearch()} 
            value= {this.state.searchTerm}
            placeholder="Search for Folder here" 
            onChange={this.editSearchTerm}

            />

        </div>

         )
     }
 }
        
    export default SearchBox;