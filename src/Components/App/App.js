import React from "react";
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


function App() {

  const tracks = [
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>SPOTIFIND</h1>
      </header>
      <body>
        <SearchBar />
        <div className="App-playlist">
        <SearchResults tracks={tracks} />
        <Playlist />
        </div>
      </body>
      <footer>
        <p>Created with passion by Sherezade Maqueda</p>
      </footer>
    </div>
  );
}

export default App;
