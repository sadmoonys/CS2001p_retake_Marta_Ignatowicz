import React, { Component } from 'react';
import Header from '../Header/Header'
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

    render() {
        return (
            <html>
                <Header />
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