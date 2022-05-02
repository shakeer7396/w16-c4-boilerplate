// create store here
import{applyMiddleware, legacy_createStore, combineReducers,compose } from 'redux'
import thunk from "redux-thunk"
import { getProductsDataFail, getProductsDataSuccess } from './actions'
import {reducer} from './reducer.js'
const rootReducer=combineReducers({
  products:reducer
})


const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );

export const store = legacy_createStore(rootReducer,enhancer);




// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
