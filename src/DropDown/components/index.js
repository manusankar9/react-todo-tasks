import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { click } from '../Actions'

class DropDown extends Component {

    render() {
        console.log(this.props)
        return (<div>
            <button onClick={() => this.props.click(!this.props.myDropDown)}>DropDown</button>
            {this.props.myDropDown && <h4>hii welcome</h4>}
        </div>)
    }
}

const mapStateToProps = state => ({
    myDropDown: state.dropDown
})

const mapDispatchToProps = dispatch => bindActionCreators({ click }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);