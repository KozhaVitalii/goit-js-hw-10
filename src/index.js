import './css/common.css';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelect = document.querySelector('#breed-select');
const catInfoDiv = document.querySelector('.cat-info');
const loaderElement = document.querySelector('.loader');

breedSelect.addEventListener('change', handleBreedSelectChange);

showLoader();
hideSelect();

fetchBreeds()
  .then(breeds => {
    const breedOptions = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`);
    breedSelect.innerHTML = breedOptions.join('');
    return breeds;
  })
  .then(() => {
    new SlimSelect({
      select: '#breed-select',
      placeholder: 'Select a breed',
      settings: {
        showSearch: false,
        searchHighlight: true
      }
    });
    hideLoader();
  })
  .catch(error => {
    console.error(error);
    showError();
  });
 

function hideLoader() {
  loaderElement.classList.add('hidden');
  catInfoDiv.classList.remove('hidden');
}

function showLoader() {
  loaderElement.classList.remove('hidden');
  catInfoDiv.classList.add('hidden');
}

function hideSelect() {
breedSelect.classList.add('hidden');
}


function showError() {
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
}


function handleBreedSelectChange() {
  const selectedBreedId = breedSelect.value;

  showLoader();
 
  if (selectedBreedId) {
    fetchCatByBreed(selectedBreedId)
      .then(data => data[0])
      .then(data => {
        const catInfoMarkup = `
          <div class="cat-container">
            <img src="${data.url}" alt="Cat Image" class="cat-image" width="480">
            <div class="cat-details">
              <h2 class="cat-breed">${data.breeds[0].name}</h2>
              <p class="cat-description">${data.breeds[0].description}</p>
              <p class="cat-temperament">
                <span class="cat-temperament-key">Temperament:</span>
                <span class="cat-temperament-value">${data.breeds[0].temperament}</span>
              </p>
            </div>
          </div>
        `;
        return renderCatInfo(catInfoMarkup);
      })
      .catch(error => {
        console.error(error);
        showError();
      })
      .finally(() => {
        hideLoader();
      });
  } else {
    renderCatInfo('');
  }
}

function renderCatInfo(catInfo) {
  const catInfoMarkup = catInfo;
  catInfoDiv.innerHTML = catInfoMarkup;
}











// fetchBreeds()
//   .then(breeds => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const breedOptions = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`);
//         breedSelect.innerHTML = breedOptions.join('');
//         resolve(breeds);
//       }, 2000); // Задержка в 2000 миллисекунд (2 секунды)
//     });
//   })
//   .then(() => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         new SlimSelect({
//           select: '#breed-select',
//           placeholder: 'Select a breed',
//           settings: {
//             showSearch: false,
//             searchHighlight: true
//           }
//         });
//         hideLoader();
//         resolve();
//       }, 1000); // Задержка в 1000 миллисекунд (1 секунда)
//     });
//   })
//   .catch(error => {
//     console.error(error);
//     showError();
//   });