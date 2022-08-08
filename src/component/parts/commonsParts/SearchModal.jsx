import React, { useContext, useState } from 'react'
import {SearchModalContext} from '../../../context/SearchModalContext'


function SearchModal() {

  const {isModal, setIsModal} = useContext(SearchModalContext);


  return (
    <>

      <div style={ {"top":"0","left":"0","botton":"0","right":"0", height:"100vh","backgroundColor":"skyblue", "zIndex":9999 , position:"fixed","display": isModal ? "block": "none"}}>
        <div >
          
          <div className='headerRight' style={{"display":"flex", justifyContent:"space-between"}}>
            
            <div onClick={() => {setIsModal(!isModal)}}><span class="material-icons-outlined">chevron_left</span></div>
            
            <div style={{"display":"flex", "alignItems": "center"}}>
              <div className='headerSearchBar'>
                <input type="text" style={{"width":"100%"}}/>
                <span className="headerSearchIcon material-icons-outlined">search</span>
              </div>
              <div><span style={{"margin":"auto"}} class="material-icons-outlined">shopping_cart</span></div>
            </div>
          </div>
          
          <div>
            최근검색어
          </div>

          <div>
            추천 태그
          </div>

        </div>
      </div>

    </>
  )
}

export default SearchModal