
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './component/test/Test';
import Main from './pages/Main';
import Pages from './pages/Pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/page/:id" element={<Pages/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
