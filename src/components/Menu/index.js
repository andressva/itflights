import React, { useContext } from 'react';

import { AppContext } from '../../context';
import './styles.scss';

export const Menu = () => {
    const context = useContext(AppContext);
    const { menuItems, showMenu, selected, setSelected } = context;

    const handleClick = id => {
        setSelected(id);
    }


    return <div className={`menu ${!showMenu ? "hide" : ""} `}>
        <ul className='menu-list'>
            {menuItems.map(item => (
                <li 
                    onClick={() => handleClick(item)} 
                    className={`menu-list-item ${selected.id == item.id ? "selected" : ""}`}>
                        {item.name}
                </li>
            ))}
        </ul>
    </div>;
};
