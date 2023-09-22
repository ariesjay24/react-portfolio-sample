import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import routes from "./Views/routes.jsx";
import Header from "./Views/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Views/Footer/Footer.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route, index) => {
          console.log(index);
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            ></Route>
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
