import { createContext, useContext } from 'react';


export const ThemeContext = createContext({
    themeMode: "light",                 // useState nai use garnu parxa bhanni xaina yeta
    darkTheme: () => {},                 // paila hamle afai data pass login bata garethiyem 
    lightTheme: () => {}                 // aba yeta chai directly global variable ma { } object ma data xa
})

export const ThemeProvider = ThemeContext.Provider;   // Provider

                                    // yo custom hooks ho function nai ta ho custom hooks
export function useTheme(){
    return useContext(ThemeContext);// harek choti harek login, profile ma import useContext(UserContext) garnu pardaina
}      
