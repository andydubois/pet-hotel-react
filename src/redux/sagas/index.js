import {all} from 'redux-saga/effects';
import petSaga from './petSaga';
import ownerSaga from './ownerSaga';

//default root saga, sagas will go in here
export default function* rootSaga() {
    yield all([
        petSaga(),
        ownerSaga(),
    ]);
};