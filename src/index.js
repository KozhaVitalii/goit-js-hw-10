// Работает:

import './css/common.css';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelect = document.querySelector('#breed-select');
const catInfoDiv = document.querySelector('.cat-info');
const loaderElement = document.querySelector('.loader');

breedSelect.addEventListener('change', handleBreedSelectChange);
fetchBreeds(breedSelect);


function showLoader() {
  loaderElement.classList.remove('hidden');
  catInfoDiv.classList.add('hidden');
}

function hideLoader() {
  loaderElement.classList.add('hidden');
  catInfoDiv.classList.remove('hidden');
}

function hideSelect() {
breedSelect.classList.add('hidden');
}

function showSelect() {
  breedSelect.classList.remove('hidden');
}


// function showCatInfo() {
//   catInfoDiv.classList.remove('hidden');
// }

// function hideCatInfo() {
//   catInfoDiv.classList.add('hidden');
// }

function showError() {
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
}

// showLoader()
  // hideSelect();

function handleBreedSelectChange() {
  const selectedBreedId = breedSelect.value;
  
  showLoader();
  // hideSelect();
  
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
      new SlimSelect({
          select: '#breed-select',
          placeholder: 'Select a breed',
            settings: {
              showSearch: false,
              searchHighlight: true
            }
      });
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
// new SlimSelect({
//   select: '#breed-select',
//   placeholder: 'Select a breed',
//   settings: {
//     showSearch: false,
//     searchHighlight: true
//   }
// });

//     })
//     .catch(error => {
//       console.error(error);
//       showError();
//     })
//     .finally(() => {
//       hideLoader();
//     });
// }




// import './css/common.css';
// // import Notiflix from 'notiflix';
// import SlimSelect from 'slim-select';
// import { fetchBreeds, fetchCatByBreed } from './js/cat-api';


// const catInfoDiv = document.querySelector('.cat-info');

// fetchBreeds().then(breeds => {
//   const breedSelect = new SlimSelect({
//     select: '#breed-select',
//     placeholder: 'Select a breed',
//     settings: {
//       showSearch: false,
//       searchHighlight: true
//     },
//     data: breeds.map(breed => ({ value: breed.id, text: breed.name }))
//   });

//   breedSelect.onChange = handleBreedSelectChange;
// }).catch(error => {
//   console.error(error);
// });

// function handleBreedSelectChange() {
//   const breedSelect = document.querySelector('#breed-select');
//   const selectedBreedId = breedSelect.selected();
//   console.log('Selected breed ID:', selectedBreedId);

//   if (selectedBreedId) {
//     fetchCatByBreed(selectedBreedId)
//       .then(data => {
//         const catInfoMarkup = `
//           <div class="cat-container">
//             <img src="${data.url}" alt="Cat Image" class="cat-image" width="480">
//             <div class="cat-details">
//               <h2 class="cat-breed">${data.breeds[0].name}</h2>
//               <p class="cat-description">${data.breeds[0].description}</p>
//               <p class="cat-temperament">
//                 <span class="cat-temperament-key">Temperament:</span>
//                 <span class="cat-temperament-value">${data.breeds[0].temperament}</span>
//               </p>
//             </div>
//           </div>
//         `;
//         renderCatInfo(catInfoMarkup);
//         console.log('Result:', data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   } else {
//     renderCatInfo('');
//   }
// }

// function renderCatInfo(catInfo) {
//   const catInfoMarkup = catInfo;
//   catInfoDiv.innerHTML = catInfoMarkup;
// }



// const breedSelect = new SlimSelect({
//   select: '#breed-select',
//   placeholder: 'Select a breed',
//   settings: {
//     showSearch: false,
//     searchHighlight: true
//   }
// });

// Получяем ссылку на элемент с классом "cat-info" в переменную catInfoDiv. 
// const catInfoDiv = document.querySelector('.cat-info');
// // const loaderElement = document.querySelector('.loader');

// // Устанавиваем обработчик события onChange для объекта breedSelect, который будет вызывать функцию 
// // handleBreedSelectChange при изменении выбранного значения в селекте породы.
// breedSelect.onChange = handleBreedSelectChange;
// // breedSelect.addEventListener('change', handleBreedSelectChange);

// // Вызываем функцию fetchBreeds с передачей объекта breedSelect в качестве аргумента.
// fetchBreeds(breedSelect);



// function handleBreedSelectChange() {
//   const selectedBreedId = breedSelect.selected(); // получаем из селекта выбранный идентификатор породы
//   console.log('Selected breed ID:', selectedBreedId);

//   if (selectedBreedId) {
//     fetchCatByBreed(selectedBreedId)
//       .then(data => {
//         const catInfoMarkup = `
//           <div class="cat-container">
//             <img src="${data.url}" alt="Cat Image" class="cat-image" width="480">
//             <div class="cat-details">
//               <h2 class="cat-breed">${data.breeds[0].name}</h2>
//               <p class="cat-description">${data.breeds[0].description}</p>
//               <p class="cat-temperament">
//                 <span class="cat-temperament-key">Temperament:</span>
//                 <span class="cat-temperament-value">${data.breeds[0].temperament}</span>
//               </p>
//             </div>
//           </div>
//         `;
//         renderCatInfo(catInfoMarkup);
//         console.log('Result:', data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   } else {
//     renderCatInfo('');
//   }
// }

// function renderCatInfo(catInfo) {
//   const catInfoMarkup = catInfo;
//   catInfoDiv.innerHTML = catInfoMarkup;
// }