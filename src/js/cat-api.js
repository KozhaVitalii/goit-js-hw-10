
const API_KEY = 'live_5clVSpmR3DcATTc6zmmBYI7V8oKT24zFjWh3sjCCkfju0Yzfw7veF6Dz0HIykaC9';
const BASE_URL = 'https://api.thecatapi.com/v1';

// // function hideLoaderSelect() {
// //   loaderElement.classList.add('hidden');
// //   breedSelect.classList.remove('hidden');
// // }

// // function showLoaderSelect() {
// //   loaderElement.classList.remove('hidden');
// //   breedSelect.classList.add('hidden');
// // }



// // Функция выполняет запрос к API для получения списка пород кошек.

export function fetchBreeds(breedSelect) {
  const options = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  const url = `${BASE_URL}/breeds`;

    // showLoader();
    // hideBreedSelect();
    
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      return response.json();
    })
    .then(breeds => {
      populateBreedsSelect(breeds, breedSelect);
      //   hideLoader();
      // showSelect();
    })
    .catch(error => {
      console.error(error);
      showError();
    });
    // .finally(() => {
    //   hideLoader();
    //   showSelect();
    // });
}

function populateBreedsSelect(breeds, breedSelect) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}


// // Функция fetchCatByBreed(breedId) выполняет запрос к API для получения информации о коте определенной породы по Id: 
export function fetchCatByBreed(breedId) {
  const options = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  const url = `${BASE_URL}/images/search?breed_ids=${breedId}`;
    
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      return response.json();
    })
    .then(data => {
      return data[0];
    })
    .catch(error => {
      console.error(error);
      showError();
    });
  // .finally(() => {
  //     hideLoader();
  //     showSelect();
  //   });
}



// const API_KEY = 'live_5clVSpmR3DcATTc6zmmBYI7V8oKT24zFjWh3sjCCkfju0Yzfw7veF6Dz0HIykaC9';
// const BASE_URL = 'https://api.thecatapi.com/v1';


// // Функция выполняет запрос к API для получения списка пород кошек.
// export function fetchBreeds(breedSelect) {
//   const options = {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   };

//   const url = `${BASE_URL}/breeds`;

//   return fetch(url, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch breeds');
//       }
//       return response.json();
//     })
//     .then(breeds => {
//       breedSelect.setData(breeds.map(breed => ({ value: breed.id, text: breed.name })));
//       console.log(breeds);
//     })
//     .catch(error => {
//       console.error(error);
//     })
//     .finally(() => {
//       hideLoader();
//       showSelect();
//     });
//     }


// export function fetchBreeds() {
//   const options = {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   };

//   const url = `${BASE_URL}/breeds`;

//   return fetch(url, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch breeds');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }


// Функция fetchCatByBreed(breedId) выполняет запрос к API для получения информации о коте определенной породы по Id: 
// export function fetchCatByBreed(breedId) {
//   const options = {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   };

//   const url = `${BASE_URL}/images/search?breed_ids=${breedId}`;
    
//   return fetch(url, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch breeds');
//       }
//       return response.json();
//     })
//       .then(data => {
//         console.log('Response data:', data);
//         return data[0]; 
        
//     })
//     .catch(error => {
//       console.error(error);
//         showError();
//     });
// }


// fetchCatByBreed('abys')
//   .then(result => {
//     console.log('Result:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });