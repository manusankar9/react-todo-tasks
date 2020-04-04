import React from 'react';
import { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../../App.css'
import { connect } from 'react-redux'
import Checkbox from '../shared/check-box';
import { bindActionCreators } from 'redux';
import { events } from '../../Actions';


class EventCalender extends Component {

    handleEvents = (e) => {
        this.props.events({ checked: e.target.checked, value: e.target.value })
    }

    render() {
        console.log(this.props)
        return (<div>
            <h4>**************2.1**********</h4>
            <div>
                <Checkbox
                    label="BILL"
                    value="bill"
                    handleEvents={this.handleEvents}
                    checkedFlg={this.props.calendercriterai.bill} />
                <Checkbox
                    label="EVENT"
                    value="event"
                    handleEvents={this.handleEvents}
                    checkedFlg={this.props.calendercriterai.event} />
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                events={this.props.calenderdata} />
        </div>)
    }
}


const filterData = (eventData, evtCategory) => eventData.filter(item => item.eventType !== evtCategory);

const filterEvents = (criteria, events) => {

    if (!criteria.bill && !criteria.event) {
        return [];
    } else if (criteria.bill && !criteria.event) {
        return filterData(events, "EVENT");
    } else if (criteria.event && !criteria.bill) {
        return filterData(events, "BILL");
    } else {
        return events
    }
}     
const mapStateToProps = state => ({
    calenderdata: filterEvents(state.fullCalender.filterCriteria, state.fullCalender.calenderEvents.events),
    calendercriterai: state.fullCalender.filterCriteria
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ events }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCalender);
