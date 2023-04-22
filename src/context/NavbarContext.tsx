import { createContext } from "react";

export const navbarContext = createContext({
    navbarContext: '',
    setNavbarContext: (newValue: string) => {},
  });

export default navbarContext;
