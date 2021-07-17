import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Montseerat";
  font-weight: 400;
  font-style: normal;
  src: url("/fonts/Montserrat-Regular.woff2") format("woff2"), url("/fonts/Montserrat-Regular.woff")
        format("woff");
}

@font-face {
  font-family: "Montseerat";
  font-weight: 500;
  font-style: normal;
  src: url("/fonts/Montserrat-Medium.woff2") format("woff2"), url("/fonts/Montserrat-Medium.woff")
        format("woff");
}

@font-face {
  font-family: "Montseerat";
  font-weight: 700;
  font-style: normal;
  src: url("/fonts/Montserrat-Bold.woff2") format("woff2"), url("/fonts/Montserrat-Bold.woff")
        format("woff");
}

@font-face {
  font-family: "Montseerat";
  font-weight: 600;
  font-style: normal;
  src: url("/fonts/Montserrat-SemiBoldItalic.woff2") format("woff2"), url("/fonts/Montserrat-SemiBoldItalic.woff")
        format("woff");
}

@font-face {
  font-family: "Bitter";
  src: url("/fonts/Bitter-Regular.woff2") format("woff2"), url("/fonts/Montserrat-Bitter-Regular.woff")
        format("woff");
}

@font-face {
  font-family: "Bitter";
  src: url("/fonts/Bitter-Bold.woff2") format("woff2"), url("/fonts/Montserrat-Bitter-Bold.woff")
        format("woff");
}

  body {
      font-family: ${(props) => props.theme.font.family.default};
      font-size: ${(props) => props.theme.font.size.default};
      line-height: ${(props) => props.theme.font.lineHeight.default};
      color : ${(props) => props.theme.color.text.default};
  }
`;
export default GlobalStyle;
