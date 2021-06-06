import { createGlobalStyle } from "styled-components";

export const theme = {
  body: "hsl(360, 0%, 0%)",
  text: "#FAFAFA",
  background: "#999",
  red: "hsl(360, 88%, 51%)",
  pink: "hsl(344, 84%, 51%)",
};

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
`;
