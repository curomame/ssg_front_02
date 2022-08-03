import React from 'react';
import Logo from '../parts/Logo';
import SearchBar from '../parts/SearchBar';

function Header() {
  return (
    <>
      <div style={{"dispaly":"flex","justifyContent": "space-between"}}>
        <Logo/>
        <SearchBar/>
      </div>
    </>
  )
}

export default Header