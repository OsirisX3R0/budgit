import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo } from "react";

import useLocalStorage from "../src/hooks/useLocalStorage";
// import { CouponProvider } from "../src/context/CouponContext";
// import { GlobalProvider } from "../src/context/GlobalContext";
import Header from "../src/components/core/Header";
import FooterNav from "../src/components/core/FooterNav";
import { red, green } from "@mui/material/colors";
// import App from "next/app";
import "../src/utils/dayjs";

const MyApp = ({ Component, pageProps }) => {
  // const [colorTheme, setColorTheme] = useLocalStorage(
  //   "boupon.settings.theme",
  //   "light"
  // );

  const theme = useMemo(
    () =>
      createTheme({
        spacing: 8,
        palette: {
          // type:
          //   colorTheme === "dark" //||
          //     ? // (colorTheme === "default" && prefersDarkMode)
          //       "dark"
          //     : "light",
          primary: {
            main: "#118c4f",
          },
          secondary: {
            main: "#b39c0c",
          },
          // success: {
          //   main: green[100],
          //   contrastText: "#f5f5f5",
          // },
          // error: {
          //   main: red[100],
          //   contrastText: "#f5f5f5",
          // },
          light: {
            main: "#eee",
          },
          dark: {
            main: "#333",
          },
        },
        typography: {
          fontFamily: ["Montserrat"].join(","),
          h1: {
            color: "#eee",
            textTransform: "uppercase",
            fontSize: "2.5rem",
            fontWeight: 600,
            textAlign: "center",
            margin: "1rem 0",
          },
          h2: {
            fontSize: "2rem",
            fontWeight: 400,
            textAlign: "center",
            margin: "2rem 0",
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: 500,
            textAlign: "center",
            margin: ".5rem 0",
          },
          h4: {
            fontSize: "1.25rem",
            fontWeight: 500,
            textAlign: "center",
            margin: ".5rem 0",
          },
          h5: {
            fontSize: "1.15rem",
            fontWeight: 500,
            textAlign: "center",
            margin: ".5rem 0",
          },
        },
        overrides: {
          MuiBottomNavigation: {
            root: {
              width: "100%",
              position: "fixed",
              bottom: 0,
            },
          },
          MuiInputBase: {
            input: {
              fontSize: ".8rem",
              textAlign: "center",
            },
          },
        },
      }),
    []
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>budgit</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline />
        <GlobalProvider colorTheme={colorTheme} setColorTheme={setColorTheme}>
          <CouponProvider> */}
        <Header />
        <Component {...pageProps} />
        <FooterNav />
        {/* </CouponProvider>
        </GlobalProvider>*/}
      </ThemeProvider>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
