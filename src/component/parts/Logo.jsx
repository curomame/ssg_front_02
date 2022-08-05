import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Logo() {  


  return (
    <>
      <div className='headerLogo'>
        <div><a href="https://www.ssg.com/"><h1>SSG</h1></a></div>
        <span><p>/<Link to='/'><span>신세계몰</span></Link></p></span>
        <div><span className="material-icons-outlined">arrow_drop_down</span></div>
      </div>
    </>
  )
}

export default Logo