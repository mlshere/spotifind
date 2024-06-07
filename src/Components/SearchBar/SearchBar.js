import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(''); // Declare searchTerm state variable and initialize it to an empty string

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);

    }
    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Enter A Song, Album, or Artist" 
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit" className="SearchButton">SEARCH</button>
            </form>
        </div>
    )
}

export default SearchBar;