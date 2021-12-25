import React from 'react'
import {Link} from"react-router-dom";
export default function Nav() {
    return (<div>
      <div className='heading'> CRUD APP</div>
             <nav>

  
<ul >
  <button className='nbutton'><li className='li'><Link to="/forms">Forms </Link></li></button>
  <button className='nbutton'><li className='li'><Link to="/data">Data</Link></li></button>
</ul>
  </nav>
        </div>
    )
}
