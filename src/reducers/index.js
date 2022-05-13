import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import userReducer from "./userReducer";
import collectionReducer from "./collectionReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
    user: userReducer,
    collection: collectionReducer,
    app: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))