import React, { useEffect, useState } from 'react';
import Items from '../layout/Items';
import MainCategorySelect from '../parts/MainCategorySelect';
import MainHyperLink from '../parts/MainHyperLink';
import MainTitleSub from '../parts/MainTitleSub';


function MainBestItem() {
  
    

    // const [datas,setDatas] = useState({});

    // useEffect((

    //     setDatas()

    // ),[datas])

    // 사진 url, 제목, 설명, 가격, discountrate, start, count

    return (
        <>
        <MainTitleSub title="Best Items" />
        <MainCategorySelect/>

        {/* {datas ? datas.map((data)=>(

            <Items
                title={data.title}
                sub={data.sub}/>

        )) : "xxxx"} */}

        
        <MainHyperLink/>
        </>
     );
}

export default MainBestItem;