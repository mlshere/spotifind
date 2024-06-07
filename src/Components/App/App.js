import React from "react";
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SPOTIFIND</h1>
      </header>
      <body>
        <SearchBar />
        <div className="App-playlist">
        <SearchResults />
        <Playlist />
        </div>
      </body>
    </div>
  );
}

export default App;
