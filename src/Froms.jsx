import React from "react";
import { Formik, useFormik } from "formik";
import *as Yup from "yup"
function Data(){
    var from=useFormik({
        initialValues:{ email: '', password: '' },
        onSubmit:(values)=>{
            console.log(values)
        },
    
    validationSchema: Yup.object({
        email: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
        
      })
})



return (
    <div>
    <form onSubmit={from.handleSubmit}>
      Email:  <input type="text"  onSubmit={from.handleSubmit}/>
        <b>{from.touched.email && from.errors && from.errors.email}</b> <br />
     password:   <input type="text"  onSubmit={from.handleSubmit}/>
        <b>{from.touched.password && from.errors && from.errors.password}</b>

    </form>
    </div>
)
}
export default Data