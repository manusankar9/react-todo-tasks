import React from 'react';
import { Component } from 'react';

class DelTodo extends Component{

     
    render(){
       const myList = this.props.state.data.length?
            (this.props.state.data.
            map(item=><div key = {item.id} 
                onClick = {()=>this.props.deleteItem(item.id)}>{item.content}</div>)):
            (<p>---oops--</p>)


        return (<div>{myList}</div>)
    }
}
export default DelTodo;