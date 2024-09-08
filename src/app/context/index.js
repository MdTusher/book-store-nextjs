"use client";
import { createContext, useContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  return (
    <StoreContext.Provider value={{ cartData, setCartData }}>
      {children}
    </StoreContext.Provider>
  );
};
export const useStoreContext = () => {
  return useContext(StoreContext);
};
