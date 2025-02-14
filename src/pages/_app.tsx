import App, { AppContext, AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../styles/globalStyle";
import { theme } from "@/src/ui-library/theme";
import FontLayout from "@/src/components/fonts";
import { alertNotSupportDesktop } from "@/src/utils/common";
import DarkModeToggle from "@/src/components/commons/headers/headerBtns/darkModeToggle";
import { DarkModeProvider } from "@/src/context/themeContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  alertNotSupportDesktop(pageProps.isMobile);

  return (
    <ThemeProvider theme={theme}>
      <DarkModeProvider>
        <DarkModeToggle />
        <Global styles={globalStyles} />
        <FontLayout>
          <Component {...pageProps} />
        </FontLayout>
      </DarkModeProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const initialProps = await App.getInitialProps(appContext);

  const userAgent = appContext.ctx.req?.headers["user-agent"];

  const mobile = userAgent?.indexOf("Mobile");

  initialProps.pageProps.isMobile = mobile !== -1 ? true : false;

  return { ...initialProps };
};
