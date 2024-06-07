import React from 'react';
import './Track.css';

const Track = () => {
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{/* Track name */}</h3>
                <p>{/* Artist */} | {/* Album */}</p>
            </div>
            <button className="Track-action">{/* + or - button */}</button>
        </div>
    );
}

export default Track;