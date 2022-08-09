import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function useScrollUp() {
  
  const {pathname} = useLocation()

    useEffect(() => {
      console.log('up!')
      window.scrollTo(0,0);
    })
  
    return null;
}

export default useScrollUp