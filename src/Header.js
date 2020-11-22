import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core"
import { useStateValue } from './StateProvider';

const Header = ({spotify}) => {
    const [{user}] =useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artist,Songs or Podcasts" type="text" />
            </div>
            <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;