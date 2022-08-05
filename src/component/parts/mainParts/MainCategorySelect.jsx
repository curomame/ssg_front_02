import React from 'react'
import { Link } from 'react-router-dom';

function MainCategorySelect() {

  const datas = [
    {
        id: 0,
        icon : "/",
        title : "전체"
    },
    {
        id: 1,
        icon : "/",
        title : "패션"
    },
    {
        id: 2,
        icon : "/",
        title : "뷰티잡화"
    },
    {
        id: 3,
        icon : "/",
        title : "스포츠레저"
    },
    {
        id: 4,
        icon : "/",
        title : "디지털"
    }
];

  return (
    <>
      <ul className='mainRankLink'>
        {datas.map(data => (
          <li key={data.id}>
            <Link to='/'>{data.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MainCategorySelect