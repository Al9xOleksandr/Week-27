import React, { Component } from "react";
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import '../styles/App.css'

class App extends Component {
    inputElement = React.createRef()
    constructor(){
        super()
        this.state ={
            items: [],
            currentItem: {
                text: '',
                index: ''
            },
        }
    }
    
    handleInput = e  => {
        const itemText = e.target.value
        const currentItem = {text: itemText, index: Date.now()}
        this.setState({currentItem,})
    }

    addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if(newItem.text !== ''){
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: {text: '', index: ''},                
            })
        }
    }

    onDelete = item => {
        const newItems = [...item]
        newItems.splice(0,1)
        this.setState({
            items: newItems
        })
    }

    render() {
        return (
            <div className="App">
                <TodoList 
                    addItem={this.addItem}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                    onDelete={this.onDelete.bind(this, this.state.items)}
                />
                <TodoItems
                entries={this.state.items}
                />
            </div>
        )
    }
}

export default App;