
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './component/test/Test';
import Category from './pages/Category';
import Login from './pages/Login';
import Main from './pages/Main';

import {SearchModalContext} from './context/SearchModalContext'
import SearchModal from './component/parts/commonsParts/SearchModal';
import CategoryDetailTopAll from './component/components/category/CategoryDetailTopAll';
import SignUp from './pages/signUpPage/SignUpMain';



function App() {

  const [isModal, setIsModal] = useState(false);


  return (

    <SearchModalContext.Provider value={{isModal,setIsModal}}>
      <SearchModal/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/category/:id" element={<CategoryDetailTopAll/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/*" element={<div>nopage</div>}/>
        </Routes>
      </BrowserRouter>

    </SearchModalContext.Provider>
  );
}

export default App;
