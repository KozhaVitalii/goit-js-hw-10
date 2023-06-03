import './css/common.css';
// import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';


const breedSelect = new SlimSelect({
  select: '#breed-select',
  placeholder: 'Select a breed',
  settings: {
    showSearch: false,
    searchHighlight: true
  }
});


const catInfoDiv = document.querySelector('.cat-info');
// const loaderElement = document.querySelector('.loader');

breedSelect.onChange = handleBreedSelectChange;
// // breedSelect.addEventListener('change', handleBreedSelectChange);


fetchBreeds(breedSelect);

// fetchCatByBreed(breedId);


function handleBreedSelectChange() {
  const selectedBreedId = breedSelect.selected();
  console.log('Selected breed ID:', selectedBreedId);

  if (selectedBreedId) {
    fetchCatByBreed(selectedBreedId)
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
        renderCatInfo(catInfoMarkup);
        console.log('Result:', data);
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    renderCatInfo('');
  }
}

function renderCatInfo(catInfo) {
  const catInfoMarkup = catInfo;
  catInfoDiv.innerHTML = catInfoMarkup;
}





// Работает:

// import './css/common.css';
// import Notiflix from 'notiflix';
// import SlimSelect from 'slim-select';
// import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

// const breedSelect = document.querySelector('#breed-select');
// const catInfoDiv = document.querySelector('.cat-info');
// const loaderElement = document.querySelector('.loader');

// breedSelect.addEventListener('change', handleBreedSelectChange);
// fetchBreeds(breedSelect);

// function hideLoader() {
//   loaderElement.classList.add('hidden');
//   catInfoDiv.classList.remove('hidden');
// }

// function showLoader() {
//   loaderElement.classList.remove('hidden');
//   catInfoDiv.classList.add('hidden');
// }

// function showError() {
//   Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
// }

// hideLoader();

// function handleBreedSelectChange() {
//   const selectedBreedId = breedSelect.value;
  
//   showLoader();
  
//   fetchCatByBreed(selectedBreedId)
//     .then(data => {
//       const catInfoMarkup = `
//         <div class="cat-container">
//           <img src="${data.url}" alt="Cat Image" class="cat-image" width="480">
//           <div class="cat-details">
//             <h2 class="cat-breed">${data.breeds[0].name}</h2>
//             <p class="cat-description">${data.breeds[0].description}</p>
//             <p class="cat-temperament">
//               <span class="cat-temperament-key">Temperament:</span>
//               <span class="cat-temperament-value">${data.breeds[0].temperament}</span>
//             </p>
//           </div>
//         </div>
//       `;
//       renderCatInfo(catInfoMarkup);
//     })
//     .catch(error => {
//       console.error(error);
//       showError();
//     })
//     .finally(() => {
//       hideLoader();
//     });
// }

// function renderCatInfo(catInfo) {
//   const catInfoMarkup = catInfo;
//   catInfoDiv.innerHTML = catInfoMarkup;
// }

