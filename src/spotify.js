export const authEndPoint = 'https://accounts.spotify.com/authorize';

const redirectUri = "http://localhost:3000/";

const clientId = "9b35adccec7446ed80336c26e3482b81";

//const clientId = "8765545b25344f0095aa282cbadd8093";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative"
]

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = ()=>{
    return window.location.hash
    .substring(1).split("&")
    .reduce((initial,item)=>{
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{});
}