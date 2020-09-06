import { all } from 'redux-saga/effects';

import singleGalleryPage from './singleGalleryPage';
import landingPage from './landingPage';

export default function* rootSaga() {
  yield all([
    singleGalleryPage(),
    landingPage(),
  ]);
}
