import {combineReducers} from 'redux';

import petReducer from './petReducer';
import owners from './ownerReducer';

//default root reducer, this will take all reducers and export all of them
const rootReducer = combineReducers({
    petReducer,
    owners,
});

export default rootReducer;