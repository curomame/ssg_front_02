import React from 'react'
import { Link } from 'react-router-dom';
import categoryMainDatas from '../../../assets/datas/categoryDatas/categorymainDatas.json'

function CategoryMainGrid() {
  return (
    <>
    


    <div style={{"width":"100%", "display":"flex", "flexWrap": "wrap"}}>

      
    {/* {categoryMainDatas && 
    
    categoryMainDatas.map((data) => (

      <div key={data.id} style={{"display":"flex", "flexDirection":"column", "width":"25%"}}>
        <div><img style={{"width":"100%", "margin":"auto"}} src='https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e' alt="" /></div>
        <div style={{"margin":"auto"}}><h2>{data.category}</h2></div>
      </div>

      ))

    } */}


      <div style={{"display":"flex", "flexDirection":"column", "width":"25%"}}>
        <div><img style={{"width":"100%", "margin":"auto"}} src='https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e' alt="" /></div>
        <div style={{"margin":"auto"}}><h2>카테고리</h2></div>

      <div style={{ "background":"red", "position":"relative", "width":"400%", display:"none", flexWrap:"wrap"}}>
        <div style={{"background":"skyblue", "width":"50%"}}>hi</div>
        <div style={{"background":"skyblue", "width":"50%"}}>hi</div>
        <div style={{"background":"skyblue", "width":"50%"}}>hi</div>
        <div style={{"background":"skyblue", "width":"50%"}}>hi</div>
        <div style={{"background":"skyblue", "width":"50%"}}>hi</div>
        <div style={{"background":"skyblue", "width":"50%"}}>hi</div>
        <div style={{"background":"skyblue", "width":"50%"}}>hi</div>
        <div style={{"background":"skyblue", "width":"50%"}}>hi</div>
      </div>

      </div>



      </div>




    </>
  )
}

export default CategoryMainGrid