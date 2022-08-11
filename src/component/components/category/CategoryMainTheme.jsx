import React from 'react'
import CategoryMainThemeDatas from '../../../assets/datas/categoryDatas/categoryMainThemeDatas.json'

function CategoryMainTheme() {
  return (
    <>

    <div className="categoryMainTheme">
      <h2>테마추천</h2>
      <div className='categoryMainThememImgContainger'>
        
        {CategoryMainThemeDatas &&
        CategoryMainThemeDatas.map((data) => (

          <div className='categoryMainThemeImgBox' key={data.id} >  
            <div className='categoryMainThemeImg'><img src={data.src} alt="" /></div>
            <div><p>{data.title}</p></div>
          </div>

        ))
        }


        </div>
    </div>
    </>
  )
}

export default CategoryMainTheme