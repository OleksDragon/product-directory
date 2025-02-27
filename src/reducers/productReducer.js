const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "UPDATE_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

export default productReducer;
