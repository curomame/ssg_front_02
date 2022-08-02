import React from 'react'
import { Link } from 'react-router-dom'

import menus from "../../datas/headerMenus.json"

function MainUpperCategory() {
  return (
    <>
    <ul className='upperCategory'>
        {
          menus && menus.map(menu=>(
            <Link to={menu.url} key={menu.id}><li>{menu.name}</li></Link>
          ))
        }
    </ul>
    </>
  )
}

export default MainUpperCategory