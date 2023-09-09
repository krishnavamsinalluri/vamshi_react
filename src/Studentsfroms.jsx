import React from "react";
import {Formik, useFormik}from "formik";
import *as Yup from "yup"

function Forms(){
    
         var fobj=useFormik({
            initialValues:{fristname:"",lastname:"",age:""},
            onSubmit:(values)=>{
                console.log(values)
            },
            //yup npm
            validationSchema:Yup.object({
                fristnamename: Yup.string().required("please fill the fristname"),
                lastname:Yup.string().required("please fill the lastname"),
                age:Yup.number().required("Age must be filled"),
                 }),
                })
    
                return(
                        <div className="box">
                          <h1>Students from</h1>
                        <form onSubmit={fobj.handleSubmit}>
                          Firstname:  <input type="text"  name="fristname"  onChange={fobj.handleChange} onBlur={fobj.handleBlur}/>
                         <b>{fobj.touched.fristname && fobj.errors && fobj.errors.fristname} </b><br />
                          Lastname:  <input type="text" name="lastname"  onChange={fobj.handleChange} onBlur={fobj.handleBlur} />
                            <b>{fobj.touched.lastname && fobj.errors && fobj.errors.lastname}</b><br />
                          Age:  <input type="text" name="age" onChange={fobj.handleChange}  onBlur={fobj.handleBlur}/> 
                            <b>{fobj.touched.age&& fobj.errors && fobj.errors.age}</b><br />
                            <button>add</button>
                        </form>
                        </div>
                )
            
        }
              
    
        
    


export default  Forms