import React, { Component } from 'react';
import HeaderAfterLogin from '../Header/HeaderAfterLogin'
import {Link} from 'react-router-dom';
import axios from 'axios'
import './CategoriesStyle.css'
import Search from './Search.js'
import Auth from "../../Auth";




class Categories extends Component {

   
    
    constructor() {
        super()
        this.state = {
            id: "",
            category_name: "",
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
        if (e.keyCode === 13) {
            var categoryValue = e.target.value;
            this.addCategories(categoryValue);

            const formatJSON  = 
            {
              category_name : categoryValue
            }
          
          console.log(formatJSON)
          
          const config = {
            headers: { Authorization: `Bearer ${Auth.token}` }
          };
          axios.post('api/categories/sendCategory', formatJSON, config)
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        }
    
    }

    addCategories(nameCategory) {
        if (nameCategory !=null){
            const newArrayCategory = [...this.state.categories, nameCategory]
            const newState = { ...this.state, categories: newArrayCategory }
            this.setState(newState)
        }else{
            console.log("Error")
        }
    }


    deleteCategory(index){
        let arrayCategory = this.state.categories;
        arrayCategory.splice(index, 1)
        console.log(index)
        this.setState({ category: arrayCategory })
    }


    updateCategory(index,categories, id){
        const updateArray= this.state.categories
        let item = {...updateArray[updateArray[index]= {id:id, categories:categories}]}
        this.setState((item))
    }

    //sendCategory post method using AXIOS



//insert axios stuff

    componentDidMount() {
        axios.get('/api/categories/loadCategory', {
            headers: {
                'Authorization': `Bearer ${Auth.token}`
            }
        })
            .then(response => {
       //         console.log(response.data[1].category_name)
                for (var i = 0; i<=response.data.length; i++){
                    if (response.data[i].category_name != null){
                        this.addCategories(response.data[i].category_name)
                    }else{
                        return null;
                    }
                }


            })
            .catch(error => {
                console.log(error)
            })
    }



//end of axios cat


    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({ search: e.target.value})
    }

    render() {  
        let filter = this.state.categories.filter((val) => {
            return val.toLowerCase().includes(this.state.search.toLowerCase())
        })
        return (
            <section>
                <HeaderAfterLogin />
                <div className="personalFolders"> 📌 Personal Folders</div>
                <div className="categoriesSection">
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

                                <Link 
                                to={{pathname:"/CreateNote", data:categories}}
                                className="renderFolders"
                                    //delete button
                                    
                                    //add the buttons (edit and delete) in here

                                style={{ textDecoration: 'none', color:'white' }}
                                >
                                    {categories}
                                </Link>


                            {/* <link // 
                            to = {{ pathname: "/CreateNote", data: categories}} 
                            className="renderFolders"
                            style={{ textDecoration: 'none' , color: 'white'}}
                            />
                                {categories}
*/}
                            </div>
                        }

                        )}


               {
                            this.state.adding ?
                                <div className="folders">
                                    <input
                                        type="text"
                                        //use this to make text
                                        placeholder="Add a new category"
                                        onKeyUp={this.handlerEventInput.bind(this)} />
                                    <div onClick={() => this.setState({ adding: false })}>cancel</div>
                                </div>
                                :
                                <div className="folders" onClick={() => { this.setState({ adding: true }) }}>
                                    +
                        </div>
                        }

                    </div>

                </div>

            </section>

        );
    }
}

export default Categories;