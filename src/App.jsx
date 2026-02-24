import { Provider } from "react-redux";
import { Counter , counterReducer } from "./ReduxPractice/PracticeRxSyntax";
import { legacy_createStore as createStore } from 'redux'

function App() {

  // Store
  const store = createStore(counterReducer);

  return (
    <Provider store={store}>
      < Counter />
    </Provider>
  )
}
export default App;
