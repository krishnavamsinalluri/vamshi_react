import React from "react";
import { Formik, useFormik } from "formik";
import *as Yup from "yup"
function Form(){

    var from=useFormik({
        initialValues:{firstname:"",age:"",email:""},
        onSubmit:(values)=>{
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            age: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          })
    })
    return(
        <div className="box">
            <h1>log in</h1>
         <form onSubmit={from.handleSubmit}>
           Log in ID: <input type="text" name="firstname"  onSubmit={from.handleSubmit} />
            <b>{from.touched.firstname && from.errors && from.errors.firstname}</b><br />
          Password:  <input type="text" name="email"  onSubmit={from.handleSubmit} />
            <b>{from.touched.email && from.errors && from.errors.email}</b><br />
            <button>save</button>


        </form>
        </div>
    )
}
export default Form
