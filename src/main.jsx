import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Original template stylesheets (asset URLs rewritten to /assets/...)
import "./styles/themify-icons.css";
import "./styles/font-awesome.min.css";
import "./styles/flaticon.css";
import "./styles/bootstrap.min.css";
import "./styles/animate.css";
import "./styles/slick.css";
import "./styles/slick-theme.css";
import "./styles/style.css";
import "./styles/responsive.css";
// Small additions that replace jQuery plugin behaviour
import "./styles/react-overrides.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
