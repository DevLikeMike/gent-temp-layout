import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../config/ThemeConfig";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
