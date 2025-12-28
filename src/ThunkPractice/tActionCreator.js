export const fecthUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "Fetch_Users_Request" });

    try {
      const response = await fetch("https://dummyjson.com/carts");
      const data = await response.json();

      dispatch({
        type: "Fetch_Users_Success",
        payload: data
      });
    } catch(error){
      dispatch({
        type: "Fetch_Users_Failure",
        payload: error.message
      });
    }
  }
}