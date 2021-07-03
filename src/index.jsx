import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"
import "./index.css"


ReactDOM.render(
    <React.StrictMode>
        <App name={prompt("Enter name", "User")} />
    </React.StrictMode>,
    document.getElementById("root"),
)
