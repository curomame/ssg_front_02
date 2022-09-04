import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import menus from "../../../assets/datas/mainCategory.json"

function MainUpperCategory() {
  
  const [selectMenu,setSelectMenu] = useState([true])

  return (
    <>
    <div className='upperCategoryContainer' >
      <ul className='upperCategory'>
          {
            menus && menus.map((menu,idx)=>(
              <div key={menu.id} className={selectMenu[idx] ? "menuChecked" : null}>
              <Link to={menu.url}><li>{menu.name}</li></Link>
              </div>
            ))
          }
      </ul>
    </div>
    </>
  )
}

export default MainUpperCategory