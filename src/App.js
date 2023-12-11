import store from "./Store";
import { Provider } from "react-redux";
import Counter from "./counter";
function App(){

  return(
    <div>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  )
}
export default App