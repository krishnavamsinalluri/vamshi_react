import React, { useEffect, useState } from "react";
import axios from "axios"
function Marks(){

                 var [student,setStudent]=useState([])
                 var [newstudent,setNewstudent]=useState({name:"",age:""})
                 var [editoption,setEditoption]=useState(false)
                 var [select,setSelect]=useState(null)
                 useEffect(function()
                 {
                  genStudents()
                   },[]) 


                    function genStudents(){

                    axios.get("http://localhost:4000/students").then((response)=>{
                      console.log(response.data)
                      setStudent([...response.data])
                     })
    
                   }
                  function add(){
                    axios.post("http://localhost:4000/students",newstudent).then((response)=>{
                      console.log(response)
                      
                    }).catch(()=>{})
                  }          
                  function del(id){
                    axios.delete("http://localhost:4000/students/"+id)
                      genStudents()
                    }
                    function edit(a){
                      setEditoption(true)
                      setSelect({...a})
                    }
                    function updat(){
                      axios.put("http://localhost:4000/students/"+select.id,select).then(()=>{
                        alert("update..")
                        genStudents()
                      })
                      

                    }
                  
                
                  return(

                  <div>
                      {
                          !editoption &&(
                      <div>
                        <input type="text" placeholder="name"   onChange={(event)=>{setNewstudent({...newstudent, name:event.target.value})}}/> <br />
                        <input type="text"  placeholder="age" onChange={(event)=>{setNewstudent({...newstudent,age:event.target.value})}}/>    
                        <button onClick={()=>{add()}}>add</button>
                      </div>)
                      }
                      {
                          editoption &&(
                       <div> 
                          <input type="text" placeholder="name" value={select.name}  onChange={(event)=>{setSelect({...newstudent, name:event.target.value})}}/> <br />
                          <input type="text"  placeholder="age"  value={select.age} onChange={(event)=>{setSelect({...newstudent,age:event.target.value})}}/>    
                          <button onClick={()=>{updat()}}>update</button>
                         </div>)
                        }
                          
                  <ul id="inbox" >        
                  {
                    student.length>0 &&  student.map((a)=>{
                       return <li >
                                <h1> {a.id}{a.name}</h1>
                                <h4>{a.age}</h4>
                                <h4>{a.subjects}</h4>
                                <h4>{a.marks}</h4>
                                <button onClick={()=>{del(a.id)}}>Delete</button>
                                <button onClick={()=>{edit(a)}}>Edit</button>
                       
                           </li>
                 })
               }
                 </ul>
   
               </div>
               
  
                )

}
export default Marks