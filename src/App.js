import React from 'react'
import { Component } from 'react';
import TodoApp from './Components/Title'
import TaskBar from './Components/TaskBar'
import TaskList from './Components/TaskList'

class App extends Component{

    render(){
        return (<div>
            <TodoApp />
            <TaskBar />
            <TaskList />
            </div>)
    }
}
export default App;