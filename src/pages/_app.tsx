import { Provider, useSelector } from "react-redux";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import GlobalStyles from "../global-styles";
import { AppProps } from "next/app";

import createStore from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "@/services";

const { store, persistor } = createStore();

const App = ({ Component, pageProps }: AppProps) => {
  const darkMode = store.getState().config.darkMode;
  const theme = createTheme();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles theme={theme} />
        <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps}/>
          </AuthProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
