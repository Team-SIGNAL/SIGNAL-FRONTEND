import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import {
  Query,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from "@tanstack/react-query";
import { alertError } from "utils/toastify";
import axios, { AxiosError } from "axios";

const quertClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (e: unknown) => {
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError<{ message: string }>;
        alertError(axiosError.response?.data.message ?? " ");
      } else if (e instanceof Error) {
        alertError(e.message);
      }
    },
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <CookiesProvider>
      <QueryClientProvider client={quertClient}>
        <RecoilRoot>
          <ToastContainer limit={3} />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </CookiesProvider>
  </React.StrictMode>
);
