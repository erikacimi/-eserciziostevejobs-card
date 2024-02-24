import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../ContextProvider";
import Navbar from "@/components/Navbar";
/*import { suppressHydrationWarning } from 'styled-components';

// Disabilita l'idratazione client-side per styled-components
suppressHydrationWarning(true);*/

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
