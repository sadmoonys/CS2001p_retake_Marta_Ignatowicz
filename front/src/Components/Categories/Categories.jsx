import React, { Component } from 'react';
import HeaderAfterLogin from '../Header/HeaderAfterLogin'
import './CategoriesStyle.css'
import Search from './Search.js'




class Categories extends Component {

   
    
    constructor() {
        super()
        this.state = {
            categories: [],
            adding: false,
            search: ''
           
          
        }
        
        
   
    }
     
  
    handleChangeCategory(e) {
        e.stopPropagation();
        this.category = e.target.value;
    }

    handlerEventInput(e) {
        e.preventDefault();
        if (e.keyCode == 13) {
            let categoryValue = e.target.value;
            this.addCategories(categoryValue);
        }
    }

    addCategories(nameCategory) {
        const newArrayCategory = [...this.state.categories, nameCategory]
        const newState = { ...this.state, categories: newArrayCategory }
        this.setState(newState)
    }
    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({ search: e.target.value})
    }

    render() {  
        let filter = this.state.categories.filter((val) => {
            return val.toLowerCase().includes(this.state.search.toLowerCase())
        })
        return (
            <html>
                <HeaderAfterLogin />
                <div className="personalFolders"> 📌 Personal Folders</div>
                <section className="categoriesSection">
                    {/* <select onChange={this.handleChangeCategory.bind(this)}>
                        <option>Sem Categoria</option>
                        {this.state.categories.map((category => {
                            return <option>{category}</option>
                        }))
                        }
                    </select> */}

                    <Search handleSearch={this.handleSearch} />

                    <div className="renderFolders">
                        {filter.map((categories, index) => {
                            return <div className="folders" key={index}>
                            <link
                            to = {{ pathname: "/CreateNote", data: categories}}
                            className="renderFolders"
                            style={{ textDecoration: 'none' , color: 'white'}}
                            />
                                {categories}
                            </div>
                        })}


               {
                            this.state.adding ?
                                <div className="folders">
                                    <input
                                        type="text"
                                        placeholder="Add a new category"
                                        onKeyUp={this.handlerEventInput.bind(this)} />
                                    <div onClick={()=>this.setState({adding:false})}>cancel</div>
                                </div>
                                :
                                <div className="folders" onClick={()=>{this.setState({adding:true})}}>
                                    +
                        </div>
                        }

                    </div>

                </section>

            </html>

        );
    }
}

export default Categories;