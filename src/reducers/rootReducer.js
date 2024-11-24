import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categoryFilter: categoryReducer,
});

export default rootReducer;
