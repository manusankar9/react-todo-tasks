import React from 'react';
import { Component } from 'react';

class AddTodo extends Component {

      render() {
        return (<div>
            <form>
                <input type="text" ref="task" />
                <button onClick={(e) => {
                     e.preventDefault();
                    let content = this.refs.task.value;
                    this.props.addItem({ content })
                    this.refs.task.value =""
                }}>SUBMIT</button>
            </form>
        </div>)
    }

}
export default AddTodo;