import { combineReducers } from 'redux';
import singleGalleryPage from './singleGalleryPage';
import landingPage from './landingPage';

export default combineReducers({
  landingPage,
  singleGalleryPage,
});
