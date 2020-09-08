import { takeEvery, call, put, select } from 'redux-saga/effects';
import { actions } from '../store/reducers/singleGalleryPage';
import * as api from '../api/singleGalleryPage';
import { executeAppCallAsync} from "./helpers";
import getSearchOptions from "../utilities/getSearchOptions";

function* fetchGalleryAsync(params) {
  const state = yield select(state => state.singleGalleryPage);
  const query = getSearchOptions({...params, ...state})
  const response = yield call(api.fetchGalleryPage, {...query});
  yield put(actions.fetchGallerySuccess(response));
}

function* fetchImageAsync(params) {
  const response = yield call(api.fetchImage, {...params});
  yield put(actions.fetchImageSuccess(response));
}

export default function* all() {
  yield takeEvery("FETCH_GALLERY", executeAppCallAsync(fetchGalleryAsync));
  yield takeEvery("FETCH_IMAGE", executeAppCallAsync(fetchImageAsync));
}
