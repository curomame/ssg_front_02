import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import NavMenu from '../../assets/datas/commonDatas/mainBottomNav.json';
import SearchModalState from '../../recoil/atoms/SearchModalState';

function BottomNav() {

    const [reModal, setReModal] = useRecoilState(SearchModalState);
    
    return (
        <>
          <div className="bottomNav">
            <ul>
              {NavMenu && NavMenu.map(menu => (
                <li>
                    
                    {menu.onClick ? 
                    <div className="bottonNavFont" key={menu.id} onClick={() => {setReModal(!reModal)}}>
                      <div><span className="material-icons-outlined bottonNavIconSize">{menu.icon}</span></div>
                      <div><span>{menu.title}</span></div>
                    </div>
                    : 
                    <Link className="bottonNavFont" to={menu.url} key={menu.id}>
                      <div><span className="material-icons-outlined bottonNavIconSize">{menu.icon}</span></div>
                      <div><span >{menu.title}</span></div>
                    </Link>}
                    
                    


                </li>
              ))}
          </ul>

          </div>

            
        </>
    );
}

export default BottomNav;