import { getAccessToken } from "./GetAccessToken"


export const GetLocation = async(location) => {
    const response = await fetch(`https://geocode.maps.co/search?q=${location}&api_key=${import.meta.env.VITE_MAPS_API_KEY}`)
    if(!response.ok) throw new Error('Location not found')
    return response.json()

}

export const Search = async(lat, long) => {
    const accessToken = await getAccessToken()
    console.log(lat, long)
    const response = await fetch(`https://test.api.amadeus.com/v1/shopping/activities?longitude=${long}&latitude=${lat}&radius=10`,  {
        method: 'GET', 
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
    if(!response.ok) throw new Error('Location not found')
    return response.json()
     
}