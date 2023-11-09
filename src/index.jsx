import React from "react";
import ReactDOMClient from "react-dom/client";
import { PoetsOrgByHtmlTo } from "./screens/PoetsOrgByHtmlTo";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PoetsOrgByHtmlTo />);
