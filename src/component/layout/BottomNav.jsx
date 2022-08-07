import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../../assets/datas/commonDatas/mainBottomNav.json';

function BottomNav() {
    return (
        <div className="bottomNav">
           <ul>
            {NavMenu && NavMenu.map(menu => (
                   
                        <li>
                            <Link to = {menu.url} key={menu.id}>
                                <div><span className="material-icons-outlined bottonNavIconSize">{menu.icon}</span></div>
                                <div><span className="bottonNavFont">{menu.title}</span></div>
                            </Link>
                        </li>
                    
            ))}
           </ul>
        </div>
    );
}

export default BottomNav;