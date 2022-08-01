import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


function Logo() {

    const [isTrue, setIsTrue] = useState(false);


    const openSsgModal = () => {

        setIsTrue(!isTrue);
    }

  return (
    <>
    
    
    <p><Link to=""><h1>SSG</h1></Link><span onClick={openSsgModal}>신세계몰</span><i></i></p>

    </>
  )
}

export default Logo