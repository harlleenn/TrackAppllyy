import  ThemeContext  from "./ThemeContext"; 
import React, {  useState } from "react";

export default function ThemeProvider ({children}) {
    const [theme,setTheme] = useState('light')
    const handleTheme = () => {
        setTheme((previous) =>(previous === "light" ? "dark" : "light"))
    }
    
    return (
            <>
            <ThemeContext.Provider value={{theme, handleTheme}}>
                    {children}
            </ThemeContext.Provider>
            
            </>
    )
}