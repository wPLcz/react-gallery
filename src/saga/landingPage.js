import { takeEvery, call, put } from 'redux-saga/effects';
import { actions } from '../store/reducers/landingPage';
import * as api from '../api/landingPage';
import { executeAppCallAsync} from "./helpers";

function* fetchCollectionsAsync() {
  const response = yield call(api.fetchCollections);
  yield console.log(response);
  yield put(actions.fetchCollectionsSuccess(response));
}

export default function* all() {
  yield takeEvery("FETCH_COLLECTIONS", executeAppCallAsync(fetchCollectionsAsync));
}
