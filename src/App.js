import React from "react"
import store from "./store/store"
import { Provider } from "react-redux";
import Counter from "./counter";
function App(){

  return(
    <div className="box">
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  )
}
export default App