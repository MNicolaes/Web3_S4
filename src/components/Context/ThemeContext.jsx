import React, { Children } from "react";

const ThemeContext = React.createContext({
    currentTheme: 'grey',
    themes:['grey', 'green', 'black']
});

const ThemeConsumer = ThemeContext.Consumer
const ThemeProvider = (props)=>{
    return(
        <ThemeContext.Provider value={props}>
            {Children}
        </ThemeContext.Provider>
    );
}

export {ThemeConsumer, ThemeContext, ThemeProvider}