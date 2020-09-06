import { takeEvery, call, put, select } from 'redux-saga/effects';
// import { executeAppCallAsync } from './helpers';
// import { actions as onePageMergeActions } from '../reducers/onePageMerge';
// import { actions, types } from '../reducers/onePageMergeDetails';
// import * as api from '../services/api/onePageMergeDetails';

function* loadProductIdsAsync({ productIds, sorting, masterProductId }) {
  // const response = yield call(api.fetchDetails, { productIds, sorting });
  // if (masterProductId) {
  //   response.master = response.data.filter(item => item.id === masterProductId).pop();
  // }
  // yield put(actions.fetchDetailsSuccess(response));
}

function mapToDetailsPropertyName(sortBy) {
  // switch (sortBy) {
  //   case 'mainImageMappedDominantColors':
  //     return 'Product.MainImageMappedDominantColors';
  //   case 'mainImageDominantColors':
  //     return 'Product.MainImageDominantColors';
  //   case 'productMeta.styleId':
  //     return 'Product.StyleId';
  //   case 'lastMergedAt':
  //     return 'Product.LastMergedAt';
  //   default:
  //     return sortBy;
  // }
}

function* loadDetailsAsync() {
  // yield call(ensureAllReferenceDataInStore);
  // const state = yield select(s => s.onePageMerge);
  // const productIds = Object.keys(state.checked);
  // const sorting = [...state.sorting].map(sortDef => ({
  //   ...sortDef,
  //   sortBy: mapToDetailsPropertyName(sortDef.sortBy),
  // }));
  // if (productIds.length > 0) {
  //   if (state.master) {
  //     yield call(loadProductIdsAsync, {productIds, sorting, masterProductId: state.master.id });
  //   } else {
  //     yield call(loadProductIdsAsync, {productIds, sorting});
  //   }
  // } else {
  //   yield call(ensureLocationReplaced, `/${window.location.search}`);
  // }
}

function* backAsync() {
  // yield call(ensureLocationReplaced, `/${window.location.search}`);
}

export default function* all() {
  // yield takeEvery(types.FETCH_DETAILS, backAsync);
}
