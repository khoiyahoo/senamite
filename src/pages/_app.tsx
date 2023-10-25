import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@src/components/Header";
import { StrictMode } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Header />
      <Component {...pageProps} />
    </StrictMode>
  );
}
