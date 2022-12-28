import { PrismicProvider } from "@prismicio/react";
import React from "react";
import { prismicClient } from "../services/prismic.service";

export const App = () => {
  return (
    <React.StrictMode>
      <PrismicProvider client={prismicClient}>
        <h1>Hello World</h1>
      </PrismicProvider>
    </React.StrictMode>
  );
};
