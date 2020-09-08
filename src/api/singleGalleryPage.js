import axios from "axios";
import { FETCH_GALLERY_URL, FETCH_IMAGE_URL } from "../config/unsplashURL";

const { REACT_API_KEY } = process.env;

const fetchGalleryPage = (params) => {
  return axios
    .get(FETCH_GALLERY_URL, {
      params: {
        client_id: REACT_API_KEY,
        query: 'right',
        ...params,
      },
    })
    .then(response => response.data);
};

const fetchImage = (params) => {
  return axios
    .get(`${FETCH_IMAGE_URL}/${params.id}`, {
      params: {
        client_id: REACT_API_KEY,
      },
    })
    .then(response => response.data);
};


export { fetchGalleryPage, fetchImage };
