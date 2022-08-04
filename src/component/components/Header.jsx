import React from 'react';
import Logo from '../parts/Logo';
import SearchBar from '../parts/SearchBar';

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