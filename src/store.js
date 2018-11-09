import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import steem from '@whaleshares/wlsjs';
import auth from './reducers/auth';
import appLocale from './reducers/appLocale';

const reducers = combineReducers({
  auth,
  appLocale,
});

if (process.env.WLSD_URL) {
  steem.api.setOptions({ url: process.env.WLSD_URL });
}

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk),
);

export default store;
