import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Lecturer from "./Lectureres/Lecture3";
import Lecture4 from "./Lectureres/Lecture4";
import Lecture5 from "./Lectureres/Lecture5";
import Lecture6 from "./Lectureres/Lecture6";
import Lecture7 from "./Lectureres/Lecture7";
import Lecture8 from "./Lectureres/Lecture8";
import Lecture9 from "./Lectureres/Lecture9";
import Lecture10 from "./Lectureres/Lecture10";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
