import React from 'react'
import { Component } from 'react';
import TodoApp from './React-redux-todo/Components/Title'
import TaskBar from './React-redux-todo/Components/TaskBar'
import TaskList from './React-redux-todo/Components/TaskList'
import DropDown from './DropDown/components'

class App extends Component{

    state = {
        id:0,
        data:[]
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
            <TodoApp />
            <TaskBar />
            <TaskList />
            <DropDown />
            </div>)
    }
}
export default App;