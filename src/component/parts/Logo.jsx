import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Logo() {  


  return (
    <>
      <div className='headerLogo'>
        <div><a href="https://www.ssg.com/"><h1>SSG</h1></a></div>
        <div><p>/<Link to='/'><span>신세계몰</span></Link></p></div>
        <div><img src="" alt="dropbar"/></div>
      </div>
    </>
  )
}

export default Logo