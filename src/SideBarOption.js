import React from 'react';
import "./SideBarOption.css";

const SideBarOption = ({title,Icon}) => {
    return (
        <div className="sidebarOption">
           <p>{title}</p> 
        </div>
    );
};

export default SideBarOption;