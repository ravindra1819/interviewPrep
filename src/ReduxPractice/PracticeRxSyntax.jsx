import { useDispatch, useSelector } from 'react-redux';

// Actions
const increment = () => ({
  type: "INCREMENT"
})

const decrement = () => ({
  type: "DECREMENT"
})

// Reducers
const initialState = { count: 0 };
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Function using Redux
export function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count : {count}</h2>
      <div style={{display: "flex", gap: "10px"}}>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

    </div>
  )
}
