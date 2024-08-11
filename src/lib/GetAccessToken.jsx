
export async function getAccessToken() {
    const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': import.meta.env.VITE_API_KEY,
            'client_secret': import.meta.env.VITE_API_SECRET,
        }),
    });

    const data = await response.json();
return data.access_token;
}