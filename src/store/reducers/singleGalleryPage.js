export const initialState = {
  data: [],
  sorting: {
    latest: true,
    oldest: false,
    popular: false,
  },
  paging: {
    pageSize: 30,
    page: 0,
  },
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GALLERY": {
      const paging = { ...state.paging, ...action.paging };
      paging.page += 1;

      const sorting = action.sorting || state.sorting;

      return {
        ...state,
        paging,
        sorting: action.sorting || sorting,
      };
    }
    case "FETCH_GALLERY_SUCCESS":
      let data;
      if (action.sorting === state.sorting) data = [ ...state.data, ...action.results];
      else data = [...action.results];

      const paging = {
        pageSize: (action.paging && action.paging.pageSize) || state.paging.pageSize,
        page: (action.paging && action.paging.page) || state.paging.page,
      };
      return {
        ...state,
        data,
        sorting: action.sorting || state.sorting,
        paging,
      };
    default:
      return state;
  }
};

// action creators
export const actions = {
  fetchGallery: params => ({ type: "FETCH_GALLERY", ...params }),
  fetchGallerySuccess: params => ({ type: "FETCH_GALLERY_SUCCESS", ...params }),
};
