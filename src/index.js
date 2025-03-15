import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const params = new URLSearchParams(window.location.search);
const text = params.get("text") || "Push me";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App buttonText={text} />
  </StrictMode>,
  rootElement
);
