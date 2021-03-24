  
import React, { Component } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./ListOfCategoriesStyle.css"
import Categories from "../Categories";
class ListOfCategories extends Component {
 
  render() {
    return (
      <ul className="CategoryArea">
        {this.props.notes.map((category, index) => {
          return (
            <div className="categoryAlone" key={index}>

              <CategoryCard
              indice = {index}
              deleteCategory={this.props.deleteCategory()}
              updateCategory={this.props.updateCategory()}
              categories={category.title}
              id={category.id}
              //PROBLEM HERE? HELP!!!
              />
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ListOfCategories;