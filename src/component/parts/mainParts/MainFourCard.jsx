import React from 'react'
import { Link } from 'react-router-dom'

function MainFourCard() {

  // src, link

  return (
    <>
      <div className='MainItemsRight'>

        <div  className='MainItemLeftParts'>
          <Link to='/'><img src="https://sitem.ssgcdn.com/13/59/06/item/1000057065913_i1_500.jpg" alt="Rimg1" /></Link>
        </div>
        <div className='MainItemRightParts'>
          <div><Link to='/'><img src="https://sitem.ssgcdn.com/13/59/06/item/1000057065913_i1_500.jpg" alt="Limg1" /></Link></div>
          <div><Link to='/'><img src="https://sitem.ssgcdn.com/13/59/06/item/1000057065913_i1_500.jpg" alt="Limg2" /></Link></div>
          <div><Link to='/'><img src="https://sitem.ssgcdn.com/13/59/06/item/1000057065913_i1_500.jpg" alt="Limg3" /></Link></div>
          <div><Link to='/'><img src="https://sitem.ssgcdn.com/13/59/06/item/1000057065913_i1_500.jpg" alt="Limg4" /></Link></div>
        </div>

      </div>
    </>
  )
}

export default MainFourCard