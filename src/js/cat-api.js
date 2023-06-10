const API_KEY = 'live_5clVSpmR3DcATTc6zmmBYI7V8oKT24zFjWh3sjCCkfju0Yzfw7veF6Dz0HIykaC9';
const BASE_URL = 'https://api.thecatapi.com/v1';

// // Функция выполняет запрос к API для получения списка пород кошек.

export function fetchBreeds() {
  const options = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

  const url = `${BASE_URL}/breeds`;
 
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      return response.json();
    })
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
}