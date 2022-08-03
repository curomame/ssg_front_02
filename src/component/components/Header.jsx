import React from 'react';
import Logo from '../parts/Logo';
import SearchBar from '../parts/SearchBar';
import './Header.css'

function Header() {
  return (
    <div className='header_top'>
      <Logo/>
      <SearchBar/>
    </div>
  )
}

export default Header