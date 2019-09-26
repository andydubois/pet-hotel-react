import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getOwners(action) {
    try {
        yield console.log('in getOwners Saga');
        let response = yield axios.get('/getOwners.php');
        // let output = JSON.parse(response.data[0])
        // console.log('output', output)
        console.log(response)
        yield put({
            type: 'SET_OWNERS',
            payload: response.data
        })
    } catch(err) {
        console.log('error in getOwners GET', err);
        
    }
}


function* ownerSaga() {
    yield takeLatest('GET_OWNERS', getOwners);
}

export default ownerSaga;