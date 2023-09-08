import React from "react";
import {Formik}from "formik";
import *as Yup from "yup"


let FormsSchema = Yup.object({
    fristnamename: Yup.string().required("please fill the fristname").min("please enter more than 3letters"),
    lastname:Yup.string().required("please fill the lastname"),
    age:Yup.number().required("Age must be filled"),
 });
function Forms(){
    return(
        <div>
            <Formik
            initialValues={{fristname:"",lastname:"",age:""}}
            onSubmit={(values)=>{

                console.log(values)
            }}
            validationSchema={FormsSchema}
        
   >
                   {
            (fobj)=>{
                console.log(fobj.touched)
                return(
                    
                        <form onSubmit={fobj.handleSubmit}>
                          Fristname:  <input type="text"  name="fristname"  onChange={fobj.handleChange} onBlur={fobj.handleBlur}></input>
                            <b>{fobj.touched.fristname && fobj.errors && fobj.errors.fristname} </b><br />
                          Lastname:  <input type="text" name="lastname"  onChange={fobj.handleChange} onBlur={fobj.handleBlur} />
                            <b>{fobj.touched.lastname && fobj.errors && fobj.errors.lastname}</b><br />
  
                          Age:  <input type="text" name="age" onChange={fobj.handleChange}  onBlur={fobj.handleBlur}/> 
                            <b>{fobj.touched.age&& fobj.errors && fobj.errors.age}</b><br />
                            <button>add</button>
                        </form>
                    
                )
            }
        }
              
            </Formik>
        </div>
    )

}
export default  Forms