import React, { useContext } from 'react';
import Logo from '../../parts/commonsParts/Logo';
import SearchBar from '../../parts/commonsParts/SearchBar';

function Header() {



  return (
    <>
      <div className='headerLayout'>
        <Logo/>
        <SearchBar/>
      </div>
    </>
  )
}

export default Header