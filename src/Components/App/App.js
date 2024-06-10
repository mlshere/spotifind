import React, {useState} from "react";
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchSpotify = (term) => {
    console.log(`Searching for ${term}`);
    const tracks = [
      { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
      { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
      { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    ];
    setSearchResults(tracks);
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
