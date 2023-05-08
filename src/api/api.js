// const API_KEY = '34473275-92c4bd108423fa9b9bf2a0798';
// const BASE_URL = 'https://pixabay.com/api/';
// const PICS_ON_PAGE = 12;

// export const getSearch = (searchText, page) => {
//   const params = new URLSearchParams({
//     q: searchText,
//     page: page,
//     key: API_KEY,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: PICS_ON_PAGE,
//   });

//   return fetch(`${BASE_URL}?${params}`);
// };
import axios from 'axios';

const apiKey = '34473275-92c4bd108423fa9b9bf2a0798';

const fetchImageWithKeyword = (keyword, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&page=${page}&per_page=12`
    )
    .then(response => {
      console.log(response.data);
      return response.data;
    });
};
export default fetchImageWithKeyword;
