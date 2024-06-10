import React, {useState} from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({ playlistTracks, onRemove, onNameChange, onSave}) => {
    const [playlistName, setPlaylistName] = useState('New Playlist')
    
    const handleNameChange = (e) => {
        setPlaylistName(e.target.value);
        onNameChange(e.target.value);
    };
    
    return (
        <div className="Playlist">
           <h2>My Playlist</h2>
           <input 
                value={playlistName}
                onChange={handleNameChange} />
           <div className="TrackList">
                <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
           </div>
            <button className="SavePlaylistButton" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
            
    );
};

export default Playlist;