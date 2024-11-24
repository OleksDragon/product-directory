import { createStore, combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categoryFilter: categoryReducer,
});

const store = createStore(rootReducer);

export default store;
