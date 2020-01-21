import axios from "axios"
import { baseUrl } from "../../services/api"
export const GET_POTENTIAL_EVENTS_SUCCESS = "GET_POTENTIAL_EVENTS_SUCCESS"
export const GET_POTENTIAL_EVENTS_LOADING = "GET_POTENTIAL_EVENTS_LOADING"
export const GET_POTENTIAL_EVENTS_FAILURE = "GET_POTENTIAL_EVENTS_FAILURE"
export const GET_DONE_EVENTS_SUCCESS = "GET_DONE_EVENTS_SUCCESS"
export const GET_DONE_EVENTS_LOADING = "GET_DONE_EVENTS_LOADING"
export const GET_DONE_EVENTS_FAILURE = "GET_DONE_EVENTS_FAILURE"
export const ACCEPT_EVENT_SUCCESS = "ACCEPT_EVENT_SUCCESS"
export const ACCEPT_EVENT_LOADING = "ACCEPT_EVENT_LOADING"
export const ACCEPT_EVENT_FAILURE = "ACCEPT_EVENT_FAILURE"
export const REJECT_EVENT_SUCCESS = "REJECT_EVENT_SUCCESS"
export const REJECT_EVENT_LOADING = "REJECT_EVENT_LOADING"
export const REJECT_EVENT_FAILURE = "REJECT_EVENT_FAILURE"
export const CHANGE_CURRENT_TAB = "CHANGE_CURRENT_TAB"
export const getPotentailEvents = ({ token }) => async dispatch => {
  try {
    dispatch({ type: GET_POTENTIAL_EVENTS_LOADING })
    const response = await axios.get(`${baseUrl}/photographer/potential-events`, {
      headers: { Authorization: token, "Content-Type": "application/json" },
    })
    const {
      data: { message, events },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: GET_POTENTIAL_EVENTS_FAILURE, message })
    } else {
      dispatch({ type: GET_POTENTIAL_EVENTS_SUCCESS, events })
    }
  } catch (e) {
    dispatch({ type: GET_POTENTIAL_EVENTS_FAILURE, message: "Error in logging in" })
  }
}
export const getDoneEvents = ({ token }) => async dispatch => {
  
  try {
    dispatch({ type: GET_DONE_EVENTS_LOADING })
    const response = await axios.get(`${baseUrl}/photographer/done-events`, {
      headers: { Authorization: token, "Content-Type": "application/json" },
    })
    const {
      data: { message, events },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: GET_DONE_EVENTS_FAILURE, message })
    } else {
      dispatch({ type: GET_DONE_EVENTS_SUCCESS, events })
    }
  } catch (e) {
    dispatch({ type: GET_DONE_EVENTS_FAILURE, message: "Error in logging in" })
  }
}
export const acceptEvent = ({ token, id }) => async dispatch => {  
  try {
    dispatch({ type: ACCEPT_EVENT_LOADING })
    const response = await axios.post(`${baseUrl}/photographer/accept-event`, {
      eventId: id
    },{
      headers: { Authorization: token, "Content-Type": "application/json" },
    })
    const {
      data: { message },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: ACCEPT_EVENT_FAILURE, message })
    } else {
      dispatch({ type: ACCEPT_EVENT_SUCCESS })
    }
  } catch (e) {
    dispatch({ type: ACCEPT_EVENT_FAILURE, message: "Error in logging in" })
  }
}
export const rejectEvent = ({ token, id }) => async dispatch => {  
  try {
    dispatch({ type: REJECT_EVENT_LOADING })
    const response = await axios.post(`${baseUrl}/photographer/reject-event`, {
      eventId: id
    },{
      headers: { Authorization: token, "Content-Type": "application/json" },
    })
    const {
      data: { message },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: REJECT_EVENT_FAILURE, message })
    } else {
      dispatch({ type: REJECT_EVENT_SUCCESS })
    }
  } catch (e) {
    dispatch({ type: REJECT_EVENT_FAILURE, message: "Error in logging in" })
  }
}


export const changeCurrentTab = tab => {
  return { type: CHANGE_CURRENT_TAB, tab }
}
