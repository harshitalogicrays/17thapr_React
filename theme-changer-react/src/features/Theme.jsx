import React, {  useState } from 'react'
export const myTheme = React.createContext()

const Theme = ({children}) => {
    const [themeMode,setThemeMode]=useState("light")
    let darkTheme=()=>setThemeMode("dark")
    let lightTheme=()=>setThemeMode("light")

    let ThemeStyle = {
        backgroundColor:themeMode=="light"?"#fff":"#666",
        color:themeMode=="light"?"#000":"#fff",
        height:"100%",
        transition:"all 0.3s ease"
    }
  return (
    <myTheme.Provider value={{themeMode,darkTheme,lightTheme}}>
        <div style={ThemeStyle} >{children}</div>
    </myTheme.Provider>
  )
}

export default Theme

