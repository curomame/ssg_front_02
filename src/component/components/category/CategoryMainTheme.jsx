import React from 'react'
import CategoryMainThemeDatas from '../../../assets/datas/categoryDatas/categoryMainThemeDatas.json'

function CategoryMainTheme() {
  return (
    <>

      <div><h2>title</h2></div>
      <div style={{"width":"100%", "display":"flex"}}>
        
        {CategoryMainThemeDatas &&
        CategoryMainThemeDatas.map((data) => (

          <div key={data.id} style={{"width":"50%"}} >  
            <div><img style={{"width":"100%", "margin":"auto", "borderRadius":"5%"}} src={data.src} alt="" /></div>
            <div><p>{data.title}</p></div>
          </div>

        ))
        }


        </div>
      
    </>
  )
}

export default CategoryMainTheme