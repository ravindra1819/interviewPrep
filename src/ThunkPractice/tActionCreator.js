export const fetchUsers = (page = 1, limit = 5) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });

    try {
      const skip = (page - 1) * limit;
      const response = await fetch(
        `https://dummyjson.com/carts?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();

      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: {
          carts: data.carts,
          total: data.total,
          limit
        }
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error.message
      });
    }
  };
};
