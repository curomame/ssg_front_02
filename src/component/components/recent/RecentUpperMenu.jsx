import React from 'react'

function RecentUpperMenu({datas}) {


  return (
    <>

      <div className='recentUpperMenuContainer'>
        {datas.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default RecentUpperMenu;