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
      })
    }
   
    window.location.hash = "";
  },[]);

  console.log("👦",user);
  console.log("👽",token);
  return (
    <div className="app">

    {
      token ? (<Player />): (<Login />)
    }
    </div>
  );
}

export default App;
