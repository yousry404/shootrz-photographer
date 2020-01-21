import  { combineReducers} from "redux";
import login from "./views/login/reducer"
import signup from "./views/signup/reducer"
import events from "./views/events/reducer"
import event from "./views/event/reducer"
const reducers = combineReducers({
    login,
    signup,
    events,
    event
})
export default reducers;