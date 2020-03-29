import React from 'react'
import { Component } from 'react';
import DelTodo from './todoList.js'
import AddTodo from './addTodo.js'

class App extends Component{

    state = {
        id:0,
        data:[
        ]
    }
    
    addItem = (item)=>{
        item.id = this.state.id;
        
        let data =  [...this.state.data,item];

       this.setState({data,id:this.state.id+1})

    }

    deleteItem = (id)=>{
        let data = this.state.data.filter(item=>item.id !== id);
        console.log(data)
        this.setState({...this.state,data})

    }

    render(){
        return (<div>
            <h3>TODO APP</h3>
            <DelTodo state = {this.state} deleteItem = {this.deleteItem}/>
            <AddTodo addItem = {this.addItem} />
            </div>)
    }
}
export default App;