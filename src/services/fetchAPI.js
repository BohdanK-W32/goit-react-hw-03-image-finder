import axios from 'axios';

const fetchAPI = ({ API_KEY, queryString, page, photosPerPage }) => {
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${queryString}&page=${page}&per_page=${photosPerPage}&key=${API_KEY}`,
  );
};

export const fetchAPIdata = ({ API_KEY, queryString, page, photosPerPage }) => {
  return fetchAPI({ API_KEY, queryString, page, photosPerPage }).then(
    data => data.data.hits,
  );
};

export default fetchAPI;
