import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot, useRecoilValue } from "recoil";

import { darkTheme, lightTheme } from "../theme";
import { darkThemeSelectedState } from "../store/darkThemeSelectedState";

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
        <Component {...pageProps} />
      </MyApp>
    </RecoilRoot>
  );
};

export default App;
