import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPets(action) {
    try{
        yield console.log('in getOwners Saga');
        let response = yield axios.get('/getPets.php');
        yield put({
            type: 'SET_PETS',
            payload: response.data
        })
    } catch(err) {
        console.log('error in getPets GET', err);
        
    }
}


function* petSaga() {
    yield takeLatest('GET_PETS', getPets);
}

export default petSaga;