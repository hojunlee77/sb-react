import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Nanum Myeongjo', serif;
        font-size:12px;
        padding-top: 80px;
    }
`;

export default GlobalStyles;
