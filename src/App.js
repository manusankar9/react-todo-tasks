import React from 'react'
import { Component } from 'react';
import TodoApp from './React-redux-todo/Components/Title'
import TaskBar from './React-redux-todo/Components/TaskBar'
import TaskList from './React-redux-todo/Components/TaskList'
import DropDown from './DropDown/components';
import EventCalender from './fullCalender/Components/calender-filters'


class App extends Component{

    render(){
        return (<div>
            <TodoApp />
            <TaskBar />
            <TaskList />
            <DropDown />
            <EventCalender />
            </div>)
    }
}
export default App;