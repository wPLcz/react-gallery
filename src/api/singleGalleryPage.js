import axios from "axios";
import UNSPLASH_URL from "../config/unsplashURL";

const { REACT_API_KEY } = process.env;

const fetchGalleryPage = (params) => {
  return axios
    .get(UNSPLASH_URL, {
      params: {
        client_id: REACT_API_KEY,
        query: 'usa',
        ...params,
      },
    })
    .then(response => response.data);
};

export { fetchGalleryPage };
