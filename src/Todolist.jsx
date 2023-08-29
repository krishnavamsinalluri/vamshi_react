import React from "react";

function Toli(){
    var[tolist,setTolist]=React.useState([
        {
            title:'clear bills',
            status:false
          },
          {
            title:'Moksha School',
            status:true
          },
          {
            title:'Manas Bus Fee',
            status:false
          },
          {
            title:'Gold Bill',
            status:false
          },
          {
            title:'Current Bill',
            status:true
          },
        ])
        function  done(i){
          var tem=[...tolist]
          tem[i].status=!tem[i].status
          setTolist([...tem])
        }
        function abc(){
          var text=document.getElementById("in").value
          setTolist([...tolist,{title:text,status:true}])
        }
        
        
          return (
      
          <div>
          <input type="text" id="in" />
          <button onClick={abc}>add</button>
        
          
          {
            tolist.map((list,i)=>{return (
              <div className="box">
                <li  style={(list.status===true)?{backgroundColor:"green"}:{backgroundColor:"red"}}>{list.title} {list.status}
                <button onClick={()=>{done(i)}}>done</button>
                
                </li>
              </div>

            )})
          }

        </div>
    )
}
   export default Toli;