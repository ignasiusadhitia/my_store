import React from "react";
import { createRoot } from "react-dom/client";
import MyStoreApp from "./MyStoreApp";

// import style
import "./assets/css/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<MyStoreApp />);
