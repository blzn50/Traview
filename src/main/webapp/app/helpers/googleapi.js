
export function getLatLng(address){
  const encoded_address = address.replace(/ /g,"+")
  const uri = 'https://maps.googleapis.com/maps/api/geocode/xml?address='+encoded_address
  return fetch(uri)
    .then(response=>{
        return {
          latitude: response.json.results[0].geometry.location.lat,
          longitude: response.json.results[0].geometry.location.lng
        }
    })
}
