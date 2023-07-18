import { createStore, combineReducers } from "redux";
import BaiTapDatVeReducer from "./baitapdatvereducer";
const rootReducer =combineReducers({BaiTapDatVeReducer})
export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())