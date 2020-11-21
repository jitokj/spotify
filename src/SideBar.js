import React from 'react';
import "./SideBar.css";
import SideBarOption from './SideBarOption';

const SideBar = () => {
    return (
        <div className="sidebar">
                <img className="sidebr__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
         alt="spotify logo"/>
         <SideBarOption title="Home" />
         <SideBarOption title="Search" />
         <SideBarOption title="Your Library" />
        </div>
    );
};

export default SideBar;