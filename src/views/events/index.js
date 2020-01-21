import React, { useEffect } from "react"

import {Container } from "reactstrap"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getPotentailEvents, getDoneEvents, changeCurrentTab, acceptEvent, rejectEvent } from "./actions"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Link } from "gatsby"
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "Center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))
const TodoEventsList = ({ events, handleAcceptEvent, handleRejectEvent  }) =>
  events.length > 0 ? (
    events.map(event => (
      <div>
        <p>{event.date}</p>
        <p>{event.address}</p>
        <Link to={`/app/event/${event.id}`}>check event</Link>
          
        <button onClick={() => handleAcceptEvent(event.id)}>Accept</button>
        <button onClick={() => handleRejectEvent(event.id)}>Reject</button>
        
        
      </div>
    ))
  ) : (
    <NoEvents />
  )
const DoneEventsList = ({ events }) =>
  events.length > 0 ? (
    events.map(event => (
      <div>
        <p>{event.date}</p>
        <p>{event.address}</p>
        <Link to={`/app/event/${event.id}`}>check event</Link>
        <p>{event.status}</p>
        
      </div>
    ))
  ) : (
    <NoEvents />
  )
const NoEvents = () => {
  return (
    <div className="events-page__header">
      <h1 className="text-center">You don't have Events yet..</h1>
    </div>
  )
}

const Events = ({
  upcomingEvents,
  doneEvents,
  getDoneEvents,
  getPotentailEvents,
  loading,
  currentTab,
  changeCurrentTab,
}) => {
  const token = JSON.parse(localStorage.getItem("photographerToken"))
  const classes = useStyles()

  useEffect(() => {
    getPotentailEvents({ token })
    getDoneEvents({ token })
  }, [])
  const handleChangeCurrentTab = tab => {
    changeCurrentTab(tab)
  }
  const handleAcceptEvent = id => {
    // if (confirm('Are you sure?')) {
      // Save it!()
      acceptEvent({token, id})
    // } else {

    // }
  }
  const handleRejectEvent = id => {
    // if (confirm('Are you sure?')) {
      // Save it!()
      rejectEvent({token, id})
    // } else {

    // }
  }
  return (
    <div className="events-page">
      {loading ? (
        <div className={classes.root}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Container>
          <div className="d-flex justify-content-between events-page__header-full">
            <h1>My Shoots</h1>
          </div>
          <div className="d-flex">
            <div onClick={() => handleChangeCurrentTab(1)}>To do</div>
            <div onClick={() => handleChangeCurrentTab(2)}>Done</div>
          </div>
          <div>
            {currentTab === 1 ? (
              <TodoEventsList events={upcomingEvents} eventsType="todo" handleAcceptEvent={handleAcceptEvent} handleRejectEvent={handleRejectEvent} />
            ) : (
              <DoneEventsList events={doneEvents} eventsType="done" />
            )}
          </div>
        </Container>
      )}
    </div>
  )
}
const mapStateToProps = ({ events }) => ({
  loading: events.loading,
  upcomingEvents: events.upcomingEvents,
  doneEvents: events.doneEvents,
  currentTab: events.currentTab,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPotentailEvents,
      getDoneEvents,
      changeCurrentTab,
      acceptEvent,
      rejectEvent
    },
    dispatch
  )
export default connect(mapStateToProps, mapDispatchToProps)(Events)
