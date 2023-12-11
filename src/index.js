import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './Aboutus';
import Canner from './Course';
import Api from './Country';
import Counytrydetails from './Countrydetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      
        {
          path: "/aboutus",
          element: <Aboutus></Aboutus>
        },
        {
          path:"/canner",
          element:<Canner></Canner>
        },
        {
          path:"/Country",
          element:<Api></Api>,
          children:[
            {
              path:"/Country/details/:cname",
              element:<Counytrydetails></Counytrydetails>
            }
          ]
        }
      
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />


    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
