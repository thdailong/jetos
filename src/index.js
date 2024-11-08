import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ConfigProvider } from "antd";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<App />} />)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgba(26, 28, 34, 1)",
          colorBgLayout: "rgba(40, 44, 53, 1)",
        },
        components: {
          Layout: {
            siderBg: "rgba(26, 28, 34, 1)",
            headerBg: "rgba(26, 28, 34, 1)",
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
