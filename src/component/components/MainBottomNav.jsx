import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../../datas/mainBottomNav.json';

function MainBottomNav() {
    return (
        <div className='bottom-nav'>
           <ul style={{"display":"flex","listStyle":"none"}}>
            {NavMenu && NavMenu.map(menu => (
                        <Link to = {menu.url} key={menu.id}>
                        <li>
                            <div><i>{menu.icon}</i></div>
                            <div><span>{menu.title}</span></div>
                        </li>
                    </Link>
            ))}
           </ul>
        </div>
    );
}

export default MainBottomNav;