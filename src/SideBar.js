import React from 'react';
import "./SideBar.css";
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const SideBar = () => {
    return (
        <div className="sidebar">
                <img className="sidebr__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
         alt="spotify logo"/>
         <SideBarOption Icon={HomeIcon} title="Home" />
         <SideBarOption Icon={SearchIcon} title="Search" />
         <SideBarOption Icon={LibraryMusicIcon} title="Your Library" />
         <br />
         <strong className="sidebar__title">PlayList</strong>
         <hr />
        </div>
    );
};

export default SideBar;