const clientId = '14cb9a4af0344425976a6c6a19546848';
const redirectUri = 'http://localhost:3000/';
const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist=modify-public',
    'playlist-modify-private',
];

export const getSpotifyAuthUrl = () => {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const queryParams = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: scopes.join(' '),
        response_type: 'code',
        show_dialog: true
    });
    return `${authEndpoint}?${queryParams}`;
};

export const fetchAccessToken = async (code) => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${clientId}:`)
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri
        })
    });

}

