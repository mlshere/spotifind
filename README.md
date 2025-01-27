Spotifind
=========

Spotifind is a web application that allows users to search for songs, create custom playlists, and save them to their Spotify account. It utilizes the Spotify API for searching tracks and managing playlists.



![Screenshot 2025-01-27 at 21 53 21](https://github.com/user-attachments/assets/15086255-82e4-414d-9ddf-ebfed69adf56)

Features
---- 

*   Search for songs, albums, or artists on Spotify.
*   View search results and add desired tracks to a custom playlist.
*   Create and edit custom playlists.
*   Save custom playlists to your Spotify account.

Technologies Used
---- 

*   React.js: Frontend development
*   Spotify Web API: Integrating Spotify functionality
*   HTML/CSS: Styling the application
*   JavaScript: Programming logic

Getting Started
---- 

To get started with Spotifind, follow these steps:

1.  bashCopy code
  *   git clone https://github.com/mlshere/spotifind.git
2.  bashCopy code
  *  cd spotifind
  * npm install
3.  Create a Spotify Developer account and obtain your client ID:
	*   Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
	*   Create a new application and note down the client ID.
4.  Configure environment variables:
	*   Create a .env file in the root directory of the project.
	*   Add the following:
    
   		* REACT_APP_SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
		* REACT_APP_SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET
		* REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback

    		
5.  bashCopy code
  * npm start
6.  Open your browser and navigate to
  * http://localhost:3000/ to use Spotifind.

Contributing
---- 

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on GitHub or submit a pull request.

License
---- 

This project is licensed under the MIT License.
