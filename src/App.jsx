import React from 'react';
import './App.css';


function App() {
    var[like,setLike]=React.useState(0)
    var[dislike,setDislike]=React.useState(0)

  return (
    <div>
      <button onClick={()=>{setLike(like+1)}}>like</button>{like}
      <button onClick={()=>{setDislike(dislike+1)}}>Dislike</button>{dislike}
    

    
    </div>
  );
}

export default App;
