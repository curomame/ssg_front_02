import React from 'react'
import { Link } from 'react-router-dom'

import menus from "../../datas/mainCategory.json"

function MainUpperCategory() {
  return (
    <>
    <ul className='upperCategory' style={{"justifyContent":"space-between"}}>
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