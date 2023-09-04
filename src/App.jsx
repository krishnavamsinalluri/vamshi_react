
import './App.css';
import React from 'react';
import Answer from './Question';
import Questions from './Data';


function App() {
  var [data,setData]=React.useState(Questions)

  return (
    <div>
      
    {
      data.map((a)=>{
        return(

          <Questions key={Questions.id} {...Questions}></Questions>


        )
      })
    }
  <Answer></Answer>
  
    </div>
  );
}

export default App;
