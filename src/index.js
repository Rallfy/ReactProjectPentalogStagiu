import React from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

const root = document.getElementById("root");

const main = createRoot(root);

main.render(
  <ConfigProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
