import React, { Component } from 'react';
import './ListOfCategoriesStyle.css'


class ListOfCategories extends Component {

    handlerEventInput(e) {
        if (e.keyCode == 13) {
            let categoryValue = e.target.value;
            this.props.addCategories(categoryValue);
        }
    }
    render() {
        return (
            <section>
                <ul className="List-of-categories">
                    {this.props.categories.map((categories, index) => {
                        return <li key={index}>{categories}</li>
                    })}
                </ul>
                <input
                    type="text"
                    placeholder="Add a new category"
                    onKeyUp={this.handlerEventInput.bind(this)} />
            </section>

        );
    }
}

export default ListOfCategories;