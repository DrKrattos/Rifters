import "./index.scss";

import App  from "./app";
import React from "react";
import { createRoot } from "react-dom/client";

const root = document.querySelector("#root");
if (root) {
  createRoot(root).render(<App />);
}
