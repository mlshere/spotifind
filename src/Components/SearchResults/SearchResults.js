import React from 'react';
import Track from '../Track/Track';
import './SearchResults.css';


const SearchResults = ( {tracks} ) => {
    return (
        <div className="SearchResults">
            <h2>SEARCH RESULTS</h2>
            <ul className="TrackList">
                {tracks.map(track => (
                    <li key={track.id}>
                        <div>
                            <strong>{track.name}</strong>
                            <p>{track.artist} | {track.album}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;