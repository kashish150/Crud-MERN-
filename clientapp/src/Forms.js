import axios from 'axios';
import React,{useState,useEffect} from'react';
function Forms() {
   const [name,setname]=useState('');   
   const [password,setpass]=useState('');
const [data,setdata]=useState([]);
  const [state, setState] = useState({
      name:null,
      password: null,
    });
    function  changename(event){
      setname(event);
    }
    function  changepass(event){
      setpass(event);
    }
  

  const senddatatoserver=()=>{
    console.log(name)
    console.log(password)
    axios.post("http://localhost:9000/use/userdata",{
      name:name,
      password:password
    }).then((res)=>{
console.log(res.data)
    },(err)=>{console.log(err);})
  

    
  
  }
  

  return (<div className="ofrom">
    <div className="form">
         <h1>Forms</h1>
     <input onChange={(event)=>{changename(event.target.value)}} name="name" type="name" id="f"  ></input><label>FirstName</label><br/>
     <input onChange={(event)=>{changepass(event.target.value)}} name="password" type="password" id="p" ></input><label>Password</label><br/>
     <button onClick={senddatatoserver}>Submit</button>
     </div>
</div>
  );
}

export default Forms;
