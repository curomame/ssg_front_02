import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Logo() {  


  return (
    <>
      <div className='headerLogo'>
        <div><h1>SSG</h1></div>
        <span><p>/<Link to='/'><span>신세계몰</span></Link></p></span>
        <div><span className="material-icons-outlined">arrow_drop_down</span></div>
      </div>
    </>
  )
}

export default Logo