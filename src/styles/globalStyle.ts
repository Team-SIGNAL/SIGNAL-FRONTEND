import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    user-select: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default GlobalStyle;