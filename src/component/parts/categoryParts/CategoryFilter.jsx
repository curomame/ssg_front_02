import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import CategoryFilterModal from './CategoryFilterModal';

function CategoryFilter({tempFilter,setTempFilter,filterCategory}) {

  const location = useLocation();



  const [openFilterModal, setOpenFilterModal] = useState(false);


  return (
    <>
    <div className='categoryFilterContainer'>

      <div className='categoryFilterGray'> </div>
      <div onClick={()=>setOpenFilterModal(!openFilterModal)} className='categoryFilterBox'>
        <div><p>{tempFilter.desc}</p></div>
        <div><span className="material-icons-outlined">import_export</span></div>
      </div>
      <div className='categoryFilterUnder'> </div>


      {openFilterModal 
        ? <CategoryFilterModal
            filterCategory={filterCategory}
            tempFilter={tempFilter}
            setTempFilter={setTempFilter}
            setOpenFilterModal={setOpenFilterModal}
            /> 
        : null}
    </div>

    </>
  )
}

export default CategoryFilter