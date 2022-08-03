import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Logo() {  
  const [ison, setison] = useState(false);

  const dropbar = () => {
    setison(!ison)
    console.log(ison);
  }

  return (
    <div className='header_logo'>
      <Link to="/"><h1>SSG</h1></Link>
      <p>/<span>신세계몰</span></p>
      <img src="" alt="dropbar" onClick={dropbar}/>
    </div>
  )
}

export default Logo