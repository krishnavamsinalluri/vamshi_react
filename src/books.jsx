import React from "react"
import axios from "axios"
function Data(){
    var [books,setBooks]=React.useState([])
    var [newbook,setNewbook]=React.useState({title:"",auther:""})
  React.useEffect(()=>{
    getbooks()
   },[])
    function addbook(){
        axios.post("http://localhost:4000/students",newbook).then((res)=>{
            console.log(res)
            getbooks()
        })
    }
    function getbooks(){
        axios.get("http://localhost:4000/students").then((res)=>{console.log(res.data)
        setBooks([...res.data])
    })
    }
    function del(id){
        axios.delete("http://localhost:4000/students",id).then((res)=>{console.log(res.data)})
    }
   return(
    
        <div>
            <input type="text" onChange={(event)=>{setNewbook({...newbook,title:event.target.value})}}/><br></br>
            <input type="text" onChange={(event)=>{setNewbook({...newbook,auther:event.target.value})}}/>
            <br>
            </br>
            <button onClick={addbook}>add book</button>
            {
                books.map((a)=>{
                    return(<div className="box">
                    <div className="content">
                    <h1>{a.title}</h1>
                        <b>{a.auther}</b>
                        <button onClick={()=>{del(books.id)}}>delete</button>
                    </div>
                        </div>)
                })
            }
        </div>
    )
}
export default Data