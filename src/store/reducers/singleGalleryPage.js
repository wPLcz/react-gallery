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
  image: {},
};

export default (state = initialState, action) => {
  console.log(action);
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
      let data = [...state.data, ...action.results];

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
    case "FETCH_IMAGE_SUCCESS":
      return {
        ...state,
        image: action.params,
      };
    case "CLEAR_IMAGE_DATA":
      return {
        ...state,
        image: {},
      };
    default:
      return state;
  }
};

// action creators
export const actions = {
  fetchGallery: params => ({ type: "FETCH_GALLERY", ...params }),
  fetchGallerySuccess: params => ({ type: "FETCH_GALLERY_SUCCESS", ...params }),
  fetchImage: params => ({ type: "FETCH_IMAGE", ...params }),
  fetchImageSuccess: params => ({ type: "FETCH_IMAGE_SUCCESS", params }),
  clearImageData: params => ({ type: "CLEAR_IMAGE_DATA", ...params }),
};
