import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

const Tracklist = ({ tracks, onAdd, onRemove, isRemoval }) => {
    return (
        <div className="TrackList">{
            tracks.map(track => (
                <Track 
                    key={track.id} 
                    track={track} 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    isRemoval={isRemoval} 
                />
            ))}       
        </div>
    );
};

export default Tracklist;