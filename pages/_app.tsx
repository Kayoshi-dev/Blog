import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "./layout/MainLayout";
import ThemeProvider from "../contexts/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
