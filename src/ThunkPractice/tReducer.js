const initialState = {
  loading: false,
  products: [],
  error: null,
  total: 0,
  limit: 5
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.carts,
        total: action.payload.total,
        limit: action.payload.limit
      };

    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
