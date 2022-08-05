import React from 'react';
import MainCategorySelect from '../../parts/mainParts/MainCategorySelect';
import MainHyperLink from '../../parts/mainParts/MainHyperLink';
import MainTitleSub from '../../parts/mainParts/MainTitleSub';
import Items from '../../layout/Items';


function MainBestItem() {
    return (
        <>
        <MainTitleSub title="백화점 Best Items" />
        <MainCategorySelect/>
        <Items/>
        <MainHyperLink/>
        </>
     );
}

export default MainBestItem;