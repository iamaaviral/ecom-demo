import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./product/productReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
})


const store = createStore(rootReducer, composeWithDevToolsDevelopmentOnly(
    applyMiddleware()
    // other store enhancers if any
  ))

export default store