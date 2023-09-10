import React from 'react';
import {Link } from "react-router-dom";
import './MainMenu.css';


export interface IMenuItem {
    to: string;
    text: string;
    icon: string;
}
export interface IMenuItems {
    components: IMenuItem[];
}


function MainMenuItem({itemProps}: {itemProps: IMenuItem}) {

    return (
    <li className='MenuItem'>
        <Link to={itemProps.to}>
            <a className='MenuItemLink' data-text={`\u00A0${itemProps.text}`}>{`\u00A0${itemProps.text}`}</a>
        </Link>
    </li>
    );
}




export default MainMenuItem;
