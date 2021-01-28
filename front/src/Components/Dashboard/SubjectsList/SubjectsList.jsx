import React, { Component } from 'react';
import './SubjectsStyle.css'
import {ReactComponent as Delete} from '../../../Images/delete.svg'
class SubjectsList extends Component {
    createTasks(item){
        return <section className="listSub">
            <div className="subjects" key={item.key}> 
        {item.text}  </div> < Delete />
        </section>  
    }

    render() { 

        var subEntries = this.props.entries;
        var listItems = subEntries.map(this.createTasks);
        return ( 
            <ul className="list">
                    {listItems}
            </ul>
         );
    }
}
 
export default SubjectsList;