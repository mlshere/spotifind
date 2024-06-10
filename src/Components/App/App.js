import React, {useState} from "react";
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { fetchAccessToken } from "../../auth";


function App() {
  const [accessToken, setAccessToken] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      fetchAccessToken(code).then(token => setAccessToken(token));
    }
  }, [])

  const searchSpotify = (term) => {
    if (!accessToken) {
    console.log(`Searching for ${term}`);
    return;
  }

  fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(response => response.json())
    .then(data => {
      const tracks = data.tracks.item.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.url
      }));
      setSearchResults(tracks);
    });
    };
  
  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    console.log(`Saving playlist with tracks: ${trackURIs}`);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SPOTIFIND</h1>
      </header>
      <body>
        <SearchBar onSearch={searchSpotify}/>
        <div className="App-playlist">
        <SearchResults tracks={searchResults} onAdd={addTrack} />
        <Playlist
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
        </div>
      </body>
      <footer>
        <p>Created with passion by Sherezade Maqueda</p>
      </footer>
    </div>
  );
}

export default App;
