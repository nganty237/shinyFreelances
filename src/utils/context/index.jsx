import { createContext, useState } from "react";

export const Themecontext = createContext()

export const Themeprovider = ({children}) => {
    const [theme, setheme] = useState('light')
    const  toggleTheme = () =>{
        setheme(theme === 'light' ? 'dark' : 'light') 
    }
    return(
    <Themecontext.Provider value= {{theme, toggleTheme}}>
        {children}
    </Themecontext.Provider>
)
}
