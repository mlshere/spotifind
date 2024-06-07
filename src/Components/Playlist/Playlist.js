import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = () => {
    return (
        <div className="Playlist">
           <h2>My Playlist</h2>
           <div className="TrackList">
                <Tracklist />
           </div>
            <button className="SavePlaylistButton">SAVE TO SPOTIFY</button>
        </div>
            
    );
}

export default Playlist;