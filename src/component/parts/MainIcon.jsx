import React, { useEffect, useState } from 'react'

function MainIcon({contents, column}) {
  
  //contents 아이콘 이름 (str)
  //column 행길이 (int)

  // const [grid,setGrid] = useState([]);

  // const makeGrid = () => {

  //   let _column = column;
  //   let _length = contents.length
  //   let _temp = 0;

  //   console.log(1);

  //   while(_temp !== _length){


  //     _temp += _column;
  //   }

  //   console.log(_temp);

  // }



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