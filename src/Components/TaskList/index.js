import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {DeleteTask} from '../../Actions'


class TaskList extends Component{

    render(){
        return(<div>
            {
                this.props.myTaskList.data.length?
                (this.props.myTaskList.data.map(task=><p 
                key = {task.id} onClick = {()=>this.props.DeleteTask(task.id)}
                >{task.id}::{task.data}</p>)):
                (<p>---ooooppppsss----</p>)

            }
        </div>)
    }
}
const mapStateToProps = (state)=>({
    myTaskList:state.todo_task
})

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({DeleteTask},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);