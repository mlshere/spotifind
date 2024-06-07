import React from 'react';
import Track from '../Track/Track';
import './SearchResults.css';


const SearchResults = () => {
    return (
        <div className="SearchResults">
            <h2>SEARCH RESULTS</h2>
            <div className="TrackList">
                <Track />
        
            </div>
        </div>
    );
}

export default SearchResults;