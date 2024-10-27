import { combineReducers } from 'redux';
import racerReducer from './RacerReducer';
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
    racerState: racerReducer,
    authState: authReducer,
});

export default rootReducer;