import { useContext } from "react";
import { Themecontext } from "../context";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {

        background-color: ${({ isDarkMode }) => (isDarkMode ? "#1f2937": 'white')};
        margin: 0;  
    }
`

function GlobalStyle() {
    const { theme } = useContext(Themecontext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}
export default GlobalStyle;