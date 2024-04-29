import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// core styles are required for all packages
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

// const theme = createTheme({
//     fontFamily: "Open Sans, sans-serif",
//     fontSizes: { md: "18px" },
// });

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <MantineProvider theme={theme} defaultColorScheme="dark">
    <React.StrictMode>
        <App />
    </React.StrictMode>
    // </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
