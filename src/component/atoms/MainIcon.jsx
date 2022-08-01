import React, { useEffect } from 'react'

function MainIcon({contents, column}) {

  const upper = contents.slice(0,column);
  const under = contents.slice(column);

  return (
    <>

    <div className='mainGrid'>

      <div className='upperGrid'>
        {upper.map((i) => {
          return(
            <div key={i.id}>
              <div><img src={i.img} alt={i.alt} /></div>
              <div>{i.name}</div>            
            </div>
          )
        })}
      </div>

      <div className='underGrid'>
        {under.map((i) => {
                return(
                  <div key={i.id}>
                    <div><img src={i.img} alt={i.alt} /></div>
                    <div>{i.name}</div>            
                  </div>
                )
              })}
      </div>
    </div> 
    </>
  )
}

export default MainIcon