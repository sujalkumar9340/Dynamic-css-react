import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let arr=[12,23,45,65,67,3,4,2,8,9];
 let newarr=arr.filter((data)=>{
    return(data>27) 
 })
  console.log(newarr)
  let newa=[];
  arr.forEach((value)=>{
   if(value>10){
    newa.push(value)
   }

  })
  console.log(newa);
 const sum=arr.reduce((acc ,num)=> {
     return( (acc+num))
 });
   console.log(sum/arr.length)