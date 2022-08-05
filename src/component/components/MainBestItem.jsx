import React from 'react';
import Items from '../layout/Items';
import MainCategorySelect from '../parts/MainCategorySelect';
import MainHyperLink from '../parts/MainHyperLink';
import MainTitleSub from '../parts/MainTitleSub';

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