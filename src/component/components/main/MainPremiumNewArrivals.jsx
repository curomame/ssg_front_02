import React from 'react';
import Items from '../../layout/Items';
import MainCategorySelect from '../../parts/mainParts/MainCategorySelect';
import MainHyperLink from '../../parts/mainParts/MainHyperLink';
import MainTitleSub from '../../parts/mainParts/MainTitleSub';


function MainPremiumNewArrival() {
    return ( 
        <>
        <MainTitleSub title="Premium New Arrivals" />
        <MainCategorySelect/>
        <Items/>
        <MainHyperLink/>
        </>
     );
}

export default MainPremiumNewArrival;