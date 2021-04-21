import myReducer from './myReducer';
import {firebaseReducer} from 'react-redux-firebase';
import { combineReducers } from 'redux';


 export default combineReducers({
    usersState: myReducer,
   firebase: firebaseReducer,
});