import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducers/product-reducer";
import data from "../db/products.json";
const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    console.log("Here");
    dispatch({ type: "GET_PRODUCTS", payload: data.products });
    console.log(data.products);
  }, []);

  const sortByPrice_LowToHigh = () => {
    dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" });
  };

  const sortByPrice_HighToLow = () => {
    dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" });
  };

  const clear_Filters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const update_Filters = (category, value) => {
    dispatch({ type: "UPDATE_FILTERS", payload: { category, value } });
  };

  return <ProductContext.Provider value={{ ...state, sortByPrice_LowToHigh, sortByPrice_HighToLow, clear_Filters, update_Filters }}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => useContext(ProductContext);
