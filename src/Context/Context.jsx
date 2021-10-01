import {  useContext } from "react";
import { createContext, useReducer } from "react";

const TokenContext = createContext();

const TokenProvider = ({reducer, initialState , children}) => (
  <TokenContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TokenContext.Provider>
);

export const UseTokenContext = () => useContext(TokenContext);

  export default TokenProvider;