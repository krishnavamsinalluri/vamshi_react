
import React from "react"
import { Provider } from "react-redux";
import store from "./Store";
import Counter from "./Counter";
import Todolist from "./Todolist";
function App() {
  return (
    <Provider store={store}> 
        <div className="box">
          <Counter></Counter>
          <Todolist></Todolist>

   </div>
   </Provider>
 
  );
}

export default App;
