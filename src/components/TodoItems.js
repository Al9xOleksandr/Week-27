import React, { Component } from "react";

class TodoItems extends Component {
    createTasks = item => {
        return (
            <div className="wrapper">
                <li index={item.index}>
                    {item.text}
                </li>

            </div>

            
        )
    }
    
    render(){
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
        
        return <ul className="theList" >{listItems}</ul>
    }
}
export default TodoItems