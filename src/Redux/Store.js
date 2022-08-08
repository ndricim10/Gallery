import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getGallery } from "./Reducers/Reducers";

const reducer = combineReducers({
    gallery: getGallery
})

const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store