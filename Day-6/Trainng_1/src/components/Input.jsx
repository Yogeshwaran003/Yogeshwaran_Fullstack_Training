import React, { useState } from 'react'
import Nameone from './Name';
const Input = () => {
    const[Name,SetName]=useState("");
    function changeName(){
        var a=document.getElementById("input").value;
        SetName(a)
        document.getElementById("input").value="";
    }
  return (
    <div>
      <input type="text" id='input' placeholder='Enter the name' />
      <p> </p> 
      <button onClick={changeName}>Sumbit</button>
      <Nameone name={Name}/>
    </div>
  )
}

export default Input
