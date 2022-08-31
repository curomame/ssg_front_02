import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import mainicongrid from '../../../assets/datas/mainicongrid.json'

function MainIcon({type,Indatas,Incolumn}) {

  // 상위 프롭스에서 img data(json) 그리고 column만 넘기면 됨
  // 아이콘 그리드를 받아오는 로직 완성!

  const datas = Indatas.slice();
  const column = datas.length/Incolumn;

  // console.log(column);

  const [newArr, setNewArr] = useState([])


  useEffect(() => {
    const dummyArr = [];
    const testArr = datas.slice();
    for(let i=0; i<datas.length; i+= column){
      dummyArr.push(testArr.slice(i,i+column))
    }
    setNewArr(dummyArr)
  },[])

  return (
  
  <>

    
      {newArr[0] ?
        <div className={type} >
          
          {newArr.map((grids,i) => (

          <div key={i} style={{"display":"flex","justifyContent":"space-between"}}>
            {grids.map((grid,k) => (
              
              <div key={k} style={{"width":`${100/column}%`}}>
                <Link to='/'>
                  <div><img style={{"width":"100%"}} src={grid.src} alt="" /></div>
                  <div style={{"textAlign":"center"}}><p>{grid.name}</p></div>
                </Link>
              </div>
              
            ))}
          </div>            


          ))}

        </div>
      :
        null
      
      }

  </>
  )
}

export default MainIcon