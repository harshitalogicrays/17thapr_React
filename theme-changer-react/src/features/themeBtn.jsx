import React, { useContext } from 'react'
import { myTheme } from './Theme'

const ThemeBtn = () => {
    const {themeMode,darkTheme,lightTheme} = useContext(myTheme)
    let handleClick=()=>{
        if(themeMode=="light"){darkTheme()}
        else lightTheme()
    }
  return (
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" onClick={handleClick}
    checked={themeMode=="dark"}/>
  </div>
  )
}

export default ThemeBtn
