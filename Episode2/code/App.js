import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "this ia an h1 tag created with core react"
);
const heading2 = React.createElement(
  "h1",
  { id: "heading" },
  "this ia an h2 tag created with core react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//nested react elements

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
root.render(container);
