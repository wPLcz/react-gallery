import axios from "axios";
import { FETCH_COLLECTIONS_URL } from "../config/unsplashURL";

const { REACT_API_KEY } = process.env;

const fetchCollections = () => {
  return axios
    .get(FETCH_COLLECTIONS_URL, {
      params: {
        client_id: REACT_API_KEY,
      },
    })
    .then(response => response.data);
};



export { fetchCollections };
