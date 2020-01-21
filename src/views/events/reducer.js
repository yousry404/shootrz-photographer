
import { GET_POTENTIAL_EVENTS_FAILURE, GET_POTENTIAL_EVENTS_LOADING, GET_POTENTIAL_EVENTS_SUCCESS, GET_DONE_EVENTS_FAILURE, GET_DONE_EVENTS_LOADING, GET_DONE_EVENTS_SUCCESS, CHANGE_CURRENT_TAB } from "./actions"

const initial_state = {
    loading: false,
    message: "",
    upcomingEvents: [],
    doneEvents: [],
    currentTab: 1
}


export default (state =initial_state, action) => {
    switch (action.type) {
        case GET_POTENTIAL_EVENTS_SUCCESS:
            return {...state, upcomingEvents: action.events, loading: false}
        case GET_POTENTIAL_EVENTS_LOADING:
            return {...state, loading: true}
        case GET_POTENTIAL_EVENTS_FAILURE:
            return {...state, loading: false, message: action.message}
        case GET_DONE_EVENTS_SUCCESS:
            return {...state, doneEvents: action.events, loading: false}
        case GET_DONE_EVENTS_LOADING:
            return {...state, loading: true}
        case GET_DONE_EVENTS_FAILURE:
            return {...state, loading: false, message: action.message}
        case CHANGE_CURRENT_TAB:
            return {...state, currentTab: action.tab}
        default:
            return state;
    }
}