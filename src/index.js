import Notiflix from "notiflix";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
export { selectors }


const selectors = {
    select: document.querySelector('.breed-select'),
    body: document.querySelector('body'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    info: document.querySelector('.cat-info')
}

    selectors.select.addEventListener('change', onChange)

fetchBreeds()
    .then(breeds => {

    const cats = breeds.map(({id, name}) => `
    <option value=${id}>${name}</option>
    `).join('');
    selectors.select.insertAdjacentHTML('beforeend', cats)
})


function onChange(e) {  
    selectors.loader.style.display = 'block';
    selectors.info.style.display = 'none'

    fetchCatByBreed(`${selectors.select.value}`)
    .then(cat => {
        const image = cat[0].url;
        const name = cat[0].breeds[0].name;
        const description = cat[0].breeds[0].description;
        const temperament = cat[0].breeds[0].temperament;

        const catInfo = `
        <img src=${image} width="500">
        <h2>${name}</h2>
        <h2>Temperament:</h2><p>${temperament}</p>
        <p>${description}</p>
        `
        selectors.info.innerHTML = catInfo
        selectors.info.style.display = 'block'
        selectors.loader.style.display = 'none';
    })
    .catch(error => {
        Notiflix.Report.failure("Something went wrong", String(error), "OK")
    })
}







































/**
  |============================
  | that was fetch
  |============================
*/



// function addOptions() {
//     fetchBreeds()
//     .then(items => {
//         const options = []
        
//         items.map(({id, name, description, temperament}) => options.push(`<option value=${id}>${name}</option>`))
        
//         selectors.select.insertAdjacentHTML('beforeend', options)

//     }
//     )

// }
// addOptions()

// selectors.select.addEventListener('change', handleInput)

// function handleInput() {
//     console.log(selectors.select.value)
// }


// console.log(fetchBreeds());

