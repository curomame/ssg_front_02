import React from 'react';

function MainBottomNav() {
    
    const Nav = [
        {
            id: 0,
            icon : "/",
            title : "카테고리"
        },
        {
            id: 1,
            icon : "/",
            title : "통합검색"
        },
        {
            id: 2,
            icon : "/",
            title : "홈"
        },
        {
            id: 3,
            icon : "/",
            title : "My"
        },
        {
            id: 4,
            icon : "/",
            title : "최근 본 상품"
        }
    ];

    const listNav = Nav.map((Nav) =>

        <li key={Nav.id}>
            <div><i>{Nav.icon}</i></div>
            <div><span>{Nav.title}</span></div>
        </li>

    );

    // 여기서 디자인 요소를 작성하되, 확인 후 css 파일로 이동시킨다.
    return (
        <div className='bottom-nav'>
           <ul style={{"display":"flex","listStyle":"none"}}>
            {listNav}
           </ul>
        </div>
    );
}

export default MainBottomNav;