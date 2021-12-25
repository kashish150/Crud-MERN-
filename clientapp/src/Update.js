import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from"react-router-dom";
export default function Update() {
    const {id}=useParams()
    const [name,setname]=useState('');   
    const [password,setpass]=useState('');
    
    function changename(name){
     setname(name)
    }
    function changepass(name){
        setpass(name)
       }
     
     const update=()=>{
     axios.put(`http://localhost:9000/use/update/${id}`,{},{
         params:{
             name:name,
             password:password
         }
     }).then((res)=>{alert(res.data)
        }
     
     ,()=>{}

     )
     }
    return (
        <div className='ofrom'>
    <div className="form">
         <h1>Change value</h1>
     <input onChange={(event)=>{changename(event.target.value)}} value={name} name="name" type="name" id="f"  ></input><label>FirstName</label><br/>
     <input onChange={(event)=>{changepass(event.target.value)}} value={password} name="password" type="password" id="p" ></input><label>Password</label><br/>
     <button onClick={update}>Update</button>
     </div>
</div>
    )
}
