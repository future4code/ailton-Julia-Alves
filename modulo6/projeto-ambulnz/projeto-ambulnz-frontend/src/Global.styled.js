import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

html,
body,
#root,
* {
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
}


ul, li{
    list-style-type: none;
}
`