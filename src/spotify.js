export const savePlaylistToSpotify = async (accessToken, playlistName, trackURIs) => {
    try {
        // Retrieve the user's Spotify username
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const userData = await response.json();
        const userId = userData.id;

        //  Create a new playlist
        const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: playlistName,
                description: 'Created with Jammming'
            })
        });
        const playlistData = await createPlaylistResponse.json();
        const playlistId = playlistData.id;

        //  Add tracks to the new playlist
        await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uris: trackURIs
            })
        });

        console.log('Playlist saved successfully!');
    } catch (error) {
        console.error('Error saving playlist:', error);
    }
};
