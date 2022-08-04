import React from 'react'
import { Link } from 'react-router-dom'
import datas from '../../datas/mainSqaureCategory.json'

function MainCategoryBox() {
  
// 객체로 반복시켜 진행

  return (
    <>
      <div className="mainCategoryBox">
        {datas && 
          datas.map(data => (
            <div key={data.id} >
              <Link to={data.url}><img style={{"width":"100px","height":"100px"}} src="https://sui.ssgcdn.com/cmpt/banner/202207/2022072216460396994225724522_92.png" alt="img" /></Link>
            </div>
          ))
          }
      </div>
    </>
  )
}

export default MainCategoryBox