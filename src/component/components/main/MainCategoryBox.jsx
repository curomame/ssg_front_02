import React from 'react'
import { Link } from 'react-router-dom'
import datas from '../../../assets/datas/mainSqaureCategory.json'

function MainCategoryBox() {
  
// 객체로 반복시켜 진행

  return (
    <>
      <div className="mainCategoryBox">
        {datas && 
          datas.map(data => (
            <div key={data.id} >
              <Link to={data.url}>
                <img 
                  style={{"width":"100px","height":"100px"}} 
                  src={data.src} 
                  alt="img" />
                </Link>
            </div>
          ))
          }
      </div>
    </>
  )
}

export default MainCategoryBox