import React, { Component } from 'react';
import HeaderAfterLogin from '../Header/HeaderAfterLogin'
import {Link} from 'react-router-dom';
import axios from "axios";
import './CategoriesStyle.css'

class Categories extends Component {
    constructor() {
        super()
        this.state = {
            categories: [],
            adding: false
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

    deleteCategory(index){
        let arrayCategory = this.state.categories;
        arrayCategory.splice(index, 1)
        console.log(index)
        this.setState({ category: arrayCategory })
    }

    render() {
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

                    <div className="renderFolders">
                        {this.state.categories.map((categories, index) => {
                            return <div className="folders" key={index}>
                                <Link 
                                to={{ pathname:"/CreateNote", data:categories}}
                                className="renderFolders"
                                style={{ textDecoration: 'none', color:'white' }}
                                >
                                    {categories}
                                </Link>

                            </div>
                        })}
                        {
                            this.state.adding ?
                                <div className="folders">
                                    <input
                                        type="text"
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

                </section>

            </html>

        );
    }
}

export default Categories;