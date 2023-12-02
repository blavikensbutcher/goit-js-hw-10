import axios from "axios";
axios.defaults.headers.common["x-api-key"] = 'live_Yt50XPXfRGvu0pgFUsmjRtla5ppBKDqX0fVcX0925gWUaLlx4MISYIaZc0goVKno';
export { fetchBreeds, fetchCatByBreed }


const API_KEY = '&api_key=live_Yt50XPXfRGvu0pgFUsmjRtla5ppBKDqX0fVcX0925gWUaLlx4MISYIaZc0goVKno'



function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
        return response.data
    })
    .catch(error => {
        throw new Error("smth went wrong" + error)
    })
}

function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(cat => cat.data)
}




















/**
  |============================
  | that was fetch
  |============================
*/


// function fetchBreeds() {
    
//     return fetch('https://api.thecatapi.com/v1/breeds')
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.statusText)
//         }
//         return response.json()
//     })
// }


// function fetchCatByBreed(breedId = "abys") {


//     return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}${API_KEY}`)
// .then(response => {
//     if(!response.ok){
//         throw new Error(response.statusText)
//     }
//     return response.json()
// })
// .then(arrays => {
//     return arrays[0]
// })
// }

