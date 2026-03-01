import { useContext } from "react";
import { Themecontext } from "../context";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? "#1e293b": '#ffffff')};
        margin: 0;
        padding-top: 130px;
    }

    @media (min-width: 640px) {
        body {
            padding-top: 80px;
        }
    }
`

function GlobalStyle() {
    const { theme } = useContext(Themecontext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}
export default GlobalStyle;


