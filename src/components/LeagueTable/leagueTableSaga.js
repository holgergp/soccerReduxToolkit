import { put, takeEvery, call } from 'redux-saga/effects';
import {
  fetchSampleData,
  fetchSampleDataError,
  fetchSampleDataSuccess,
} from './leagueTableSlice';
import { getSampleData } from '../../api/leagueTableApi';

function* fetchSampleDataSaga() {
  try {
    const sampleData = yield call(getSampleData);
    yield put(fetchSampleDataSuccess(sampleData));
  } catch (e) {
    yield put(fetchSampleDataError());
  }
}

export default function* watchFetchSampleData() {
  yield takeEvery(fetchSampleData().type, fetchSampleDataSaga);
}
