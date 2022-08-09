
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './component/test/Test';
import Category from './pages/Category';
import Login from './pages/Login';
import Main from './pages/Main';

import {SearchModalContext} from './context/SearchModalContext'
import SearchModal from './component/parts/commonsParts/SearchModal';
import CategoryDetailTopAll from './component/components/category/CategoryDetailTopAll';



function App() {

  const [isModal, setIsModal] = useState(false);


  return (

    <SearchModalContext.Provider value={{isModal,setIsModal}}>
      <SearchModal/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/category" element={<Category/>}>
            {/* <Route path="/nest" element={<CategoryDetailTopAll/>}/> */}
          </Route> 
          
          <Route path="/category/:id" element={<CategoryDetailTopAll/>}/>

          <Route path="/login" element={<Login/>}/> 

          {/* <Route path="/page/:id" element={<Pages/>}/> */}
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>

    </SearchModalContext.Provider>
  );
}

export default App;
