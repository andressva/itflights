import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

import { getMenuData } from './utils';
export const AppContext = React.createContext();

export const AppProvider = (props) => {
    const [selected, setSelected] = useState();
    const [menuItems, setMenuItems] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const tempData = getMenuData();
        if(!tempData) return;

        setMenuItems(tempData);
        setSelected(tempData[0])
    }, [])

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleSelected = (value) => {
        setSelected(value)
        toggleMenu()
    }

    useEffect(() => {
        console.log("Selected ", selected);
    }, [selected])


    return <AppContext.Provider value={{ 
        menuItems,
        showMenu,
        selected,
        setSelected : handleSelected,
        toggleMenu 
    }}>
        {props.children}
    </AppContext.Provider>;
};
