import { combineReducers } from 'redux';
import app from './app';
import landingPage from './landingPage';
import singleGalleryPage from './singleGalleryPage';

export default combineReducers({
  // rootPath: (state = '') => state,
  // intro,
  // landingPage,
  singleGalleryPage,
});
