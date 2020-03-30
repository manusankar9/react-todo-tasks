import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DeleteTask } from '../../Actions'


class TaskList extends Component {

    render() {

        return (<div>
            {
                !this.props.myTaskList.data.length && (<p>---ooooppppsss----</p>)
            }
            {
                this.props.myDropDown &&
                (this.props.myTaskList.data.map(task => <p
                    key={task.id} onClick={() => this.props.DeleteTask(task.id)}
                >{task.id}::{task.data}</p>))

            }
        </div>)
    }
}
const mapStateToProps = state => ({
    myTaskList: state.app,
    myDropDown: state.dropDown
})


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ DeleteTask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);