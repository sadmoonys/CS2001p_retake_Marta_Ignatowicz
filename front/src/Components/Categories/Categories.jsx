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

    addCategories(id, nameCategory) {
            const newCategory = {id: id, category_name:nameCategory}
            const newArrayCategory = [...this.state.categories, newCategory]
            const newState = {categories: newArrayCategory }
            this.setState(newState)
    }


    deleteCategory(index){
        let arrayCategory = this.state.categories;
        arrayCategory.splice(index, 1)
        console.log(index)
        this.setState({ categoryState: arrayCategory })
        console.log(arrayCategory)
        const config = {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };
        axios.delete(`/api/categories/delete/${index}`, config)
            .then(response => {
                console.log(response)
             })
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
                console.log(response)

                console.log(response.data.id[0])
            //   for (var i = 0; i<=response.data.length; i++){
             //       if (response.data[i].category_name != null){
             //           this.addCategories(response.data[i].id ,response.data[i].category_name)

             //       }else{
               //         return null;
                 //   }
          //      }


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
     //   let filter = this.state.categories.filter((val) => {
       //     return val.toLowerCase().includes(this.state.search.toLowerCase())
        //})
        let emptyArray= []
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
                        {emptyArray.map((categories, index) => {
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

                                <div onClick={() => this.deleteCategory(index)}>delete</div>



                            {/* <link //        <img src = {deleteButton} onClick = {this.deleteCategory(index)}/>
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