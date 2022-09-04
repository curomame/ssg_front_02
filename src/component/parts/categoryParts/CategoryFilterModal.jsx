import React from 'react'

function CategoryFilterModal({filterCategory,tempFilter,setTempFilter,setOpenFilterModal}) {


  const handleChangeFilter = (filter) => {
    setTempFilter(filter);
    setOpenFilterModal(false);
  }

  return (
    <>
      <div className='categoryFilterModalContainer'>

        {filterCategory.map((filter) => {

          // console.log(filter, tempFilter)

          return <div onClick={()=>handleChangeFilter(filter)}
                    className={filter.sort === tempFilter.sort
                    ? "categoryFilterModalBoxMini filterChecked"
                    : "categoryFilterModalBoxMini"} 
                      key={filter.id} >
                  <p>{filter.desc} </p>
                </div>

        })}

        
      
      </div>
    </>
  )
}

export default CategoryFilterModal