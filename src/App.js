
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './component/test/Test';
import Category from './pages/Category';
import Login from './pages/Login';
import Main from './pages/Main';

import {SearchModalContext} from './context/SearchModalContext'
import SearchModal from './component/parts/commonsParts/SearchModal';
import CategoryDetailTopAll from './component/components/category/CategoryDetailTopAll';
import SignUpMainBody from './component/components/signup/SignUpMainBody';
import SignUpTerms from './pages/signUpPage/SignUpTerms';
import SignUpInfo from './pages/signUpPage/SignUpInfo';
import SignUpComplete from './pages/signUpPage/SignUpComplete';


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
          

                    {/* for Test start */}
          <Route path="/signup" element={<SignUpMainBody/>}/>
          <Route path="/signup/terms" element={<SignUpTerms/>}/>
          <Route path="/signup/info" element={<SignUpInfo/>}/>
          <Route path="/signup/complete>" element={<SignUpComplete/>}/>
          {/* for Test End */}

          <Route path="/*" element={<div>nopage</div>}/>
        </Routes>
      </BrowserRouter>

    </SearchModalContext.Provider>
  );
}

export default App;
