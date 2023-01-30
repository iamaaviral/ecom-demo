import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import productReducer from "./product/productReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
})

//CANNOT READ PROPERTY OF UNDEFINED

// const store = createStore(rootReducer, composeWithDevToolsDevelopmentOnly(
//     applyMiddleware(thunk)
//     // other store enhancers if any
//   ))

  const store = createStore(rootReducer, applyMiddleware(thunk))

export default store