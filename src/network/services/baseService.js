import {API_URL} from "../env/config";

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com',
// 		'X-RapidAPI-Key': '5ce72fcc3bmshb9f82ff04cc2c4dp11ec1cjsnffba98ee069f'
// 	}
// };

  export const baseService = {
    get: async (url) => {
        let response = [];
        await fetch(API_URL+url, {
            method: 'GET',
            headers: {
            'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com',
            'X-RapidAPI-Key': '5ce72fcc3bmshb9f82ff04cc2c4dp11ec1cjsnffba98ee069f'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                response = data
            })
        return response;
    }
  }