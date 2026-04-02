import { createContext,useContext } from "react";

export const themecontext = createContext({
    thememode:"light",//we can give variables and the meathods also
    darkmode:()=>{},
    lightmode:()=>{}
})