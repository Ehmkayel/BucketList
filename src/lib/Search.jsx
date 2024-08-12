export const Search = async(location) => {
 const url = `https://airbnb45.p.rapidapi.com/api/v1/searchPropertyByLocation?location=${location}&selfCheckin=0&instantBook=0&allowsPets=0&guestFavorite=0&flexibleCancellation=0&typeOfPlace=entire_home`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'airbnb45.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  return result
} catch (error) {
	console.error(error);
}
}


export const Property = async(propertyId) => {
  const url = `https://airbnb45.p.rapidapi.com/api/v1/getPropertyDetails?propertyId=${propertyId}`;
 const options = {
   method: 'GET',
   headers: {
     'x-rapidapi-key': import.meta.env.VITE_API_KEY,
     'x-rapidapi-host': 'airbnb45.p.rapidapi.com'
   }
 };
 
 try {
   const response = await fetch(url, options);
   const result = await response.json();
   return result
 } catch (error) {
   console.error(error);
 }
 }