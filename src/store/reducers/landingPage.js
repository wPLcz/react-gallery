export const initialState = {
  data: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COLLECTIONS": {
      return {
        state,
      };
    }
    case "FETCH_COLLECTIONS_SUCCESS":
      const data = [ ...action.params];
      return {
        state,
        data,
      };
    default:
      return state;
  }
};

// action creators
export const actions = {
  fetchCollections: () => ({ type: "FETCH_COLLECTIONS"}),
  fetchCollectionsSuccess: params => ({ type: "FETCH_COLLECTIONS_SUCCESS", params }),
};
