const initialState = {
  products: [],
  sortBy: "",
  filters: {
    brand: [],
    size: [],
    idealFor: [],
  },
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        sortBy: "",
        filters: {
          brand: [],
          size: [],
          idealFor: [],
        },
      };
    case "UPDATE_FILTERS":
      const { category, value } = action.payload;
      console.log(category, value);
      return {
        ...state,
        filters: {
          ...state.filters,
          [category]: state.filters[category].includes(value) ? state.filters[category].filter((item) => item !== value) : state.filters[category].concat(value),
        },
      };
    default:
      return state;
  }
};

export { initialState, productReducer };
