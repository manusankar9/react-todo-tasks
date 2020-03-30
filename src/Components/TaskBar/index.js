import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {AddTask} from '../../Actions'

class TaskBar extends Component {
    render() {
        return (<div>
            <form>
                <input type='text' ref='task' />
                <button onClick={(e) => {
                    e.preventDefault();
                    const data = this.refs.task.value
                    return this.props.AddTask(data);
                }}>ADD</button>
            </form>
        </div>)
    }
}
const mapStateToProps = (state) => ({
    myTask: state.todo_task
})

const mapDispatchTOProps = (dispatch) => {
    return bindActionCreators({ AddTask }, dispatch)
}
export default connect(mapStateToProps, mapDispatchTOProps)(TaskBar);