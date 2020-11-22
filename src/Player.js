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
              <Body spotify={spotify} />
          </div>
           {/* footer */}
           <Footer spotify={spotify} />
        </div>
    );
};

export default Player;