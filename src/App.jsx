
import React from 'react';
import './App.css';
import Addres from './addres';
function App() {

  var fristnameRef=React.useRef()
  var lastnameRef=React.useRef()
  var addressRef=React.useRef()
  
  React.useEffect(function(){
    fristnameRef.current.focus()
  },[])
  function focusLastname(e){
    if(e.key==="Enter"){
      lastnameRef.current.focus()
    }
  }
  function focusAddres(e){
    if(e.key==="Enter"){
      addressRef.current.focus()
    }
  }

  return (
    <div className='box'>
      <h1>details</h1>
      Fristname:  <input type="text" ref={fristnameRef} onKeyUp={(e)=>{focusLastname(e)}}/>
      <br />
     Lastname: <input type="text"  ref={lastnameRef} onKeyUp={(e)=>{ focusAddres(e)}}/>
     <br />
    
      <Addres ref={addressRef}></Addres>
    </div>
  
  );
}

export default App;
