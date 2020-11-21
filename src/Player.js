import React from 'react';
import Body from './Body';
import Footer from './Footer';
import "./Player.css";
import SideBar from './SideBar';

const Player = ({spotify}) => {
    return (
        <div className="player">
          <div className="player__body">
              {/* sideBar */}
              <SideBar />
              {/* Body */}
              <Body />
          </div>
           {/* footer */}
           <Footer />
        </div>
    );
};

export default Player;