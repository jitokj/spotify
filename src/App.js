import React, { useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useStateValue} from "./StateProvider"

const spotify = new SpotifyWebApi();

function App() {

  
  const [{user,token},dispatch] = useStateValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
     const _token = hash.access_token;
     window.location.hash = "";
   
    if(_token) {
     dispatch({
       type: "SET_TOKEN",
       token: _token
     })
      spotify.setAccessToken(_token);
      spotify.getMe()
      .then(user=>{
           dispatch({
          type: "SET_USER",
          user: user
        })
      });
      spotify.getUserPlaylists().then(playLists=>{
              dispatch({
          type: "SET_PLAYLISTS",
          playLists: playLists
        })
      })
    }

    spotify.getPlaylist("37i9dQZF1EpkBruIuTY4OH").then(response=>{
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    })
   
   
  },[]);

  
  return (
    <div className="app">

    {
      token ? (<Player spotify={spotify} />): (<Login />)
    }
    </div>
  );
}

export default App;
