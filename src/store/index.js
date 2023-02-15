import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import config from './reducers/config.reducer';
import qr from './reducers/qr.reducer';

const persistConfig = {
  key: 'root',
  storage,
  /* Usar una de las dos 'whitelist' or 'blacklist' */
  blacklist: ['drawerCollapse'],
  /* whitelist: [''], */
};

const reducers = combineReducers({
  /* user: persistReducer(persistConfig, user),
  post, */
  config: persistReducer(persistConfig, config),
  qr,
});

export default () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};