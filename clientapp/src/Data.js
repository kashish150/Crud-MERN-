import React, { useState ,useEffect} from 'react'
import axios from'axios';
import {Link} from "react-router-dom";
export default function Data() {
    const [data1,setdata]=useState('');
    useEffect(() => {
       setoutput();
    }, [])
    const deletesome=(id)=>{console.log(id);
axios.delete(`http://localhost:9000/use/delete${id}`).then
((res)=>{
alert("deleted")
setoutput();
},(err)=>{
    console.log(err);
}

)
setoutput();
}
const setoutput=()=>{console.log("called");
    axios.get("http://localhost:9000/ue").then((res)=>{
        setdata(res.data)
            })
}
    
    return (
        <div className='data'>
            {data1.length>0?<div>
                <table>
                    <th>Id</th><th>UserName</th><th>PassWord</th><th>Delete</th><th>Update</th>
                {data1.map((data,index)=>{
                    data.key=index+1
                  return<tr><td>{data._id}</td> <td> {data.name}</td>
                  <td>{data.password}</td>
                  <td><button onClick={()=>{deletesome(data._id)}}>Delete</button></td>
                  <td><button><Link to={`/update/${data._id}`}>Update</Link></button></td>
                  </tr>
                }
                )}</table></div> :
            <p>data not used</p>
           
            }
            
        </div>
    )
}
