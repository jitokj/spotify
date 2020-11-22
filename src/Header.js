import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core"

const Header = ({spotify}) => {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artist,Songs or Podcasts" type="text" />
            </div>
            <div className="header__right">
            <Avatar src="" alt="jito" />
                <h4>Jito</h4>
            </div>
        </div>
    );
};

export default Header;