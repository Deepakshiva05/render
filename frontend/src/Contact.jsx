import React, { useState } from 'react';
import Axios from 'axios';

const Contact = () => {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('')
  
    function formSubmit(e){
      e.preventDefault();
      Axios.post('http://localhost:8900/contact',{
        name:name,
        email:email
      })
    }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <p>name</p>
        <input type='text' onChange={e=>{setName(e.target.value)}}></input>
        <p>email</p>
        <input type='text' onChange={e=>{setEmail(e.target.value)}}></input>
        <input type='submit' value="submit"/>
      </form>
    </div>
  );
}

export default Contact;
