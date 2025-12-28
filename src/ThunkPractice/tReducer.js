const initialState = {
  loading : false,
  products: [],
  error: ""
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case "Fetch_Users_Request":
      return{
        ...state,
        loading : true};
     
    case "Fetch_Users_Success":
      return{
        loading: false,
        products: action.payload,
        error: ""};
    
    case "Fetch_Users_Failure":
      return{
        loading: false,
        products: [],
        error: action.payload};
    
    default:
      return state;
  }
}