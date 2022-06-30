import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot, useRecoilValue } from "recoil";
import { Global, css } from "@emotion/react";
import { darkTheme, lightTheme } from "../theme";
import { darkThemeSelectedState } from "../store/darkThemeSelectedState";

import "../global.scss";

function MyApp({ children }: any) {
  const darkThemeSelected = useRecoilValue(darkThemeSelectedState);

  return (
    <ThemeProvider theme={darkThemeSelected ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <MyApp>
        <Global
          styles={css`
            @font-face {
              font-family: inter;
              src: url("./assets/fonts/Inter-Regular.ttf");
            }
            body {
              font-family: inter;
            }
          `}
        />
        <Component {...pageProps} />
      </MyApp>
    </RecoilRoot>
  );
};

export default App;
