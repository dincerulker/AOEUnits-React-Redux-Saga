import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureAll } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./layout/Homepage";
import SelectionArea from "./layout/SelectionArea";
import UnitDetails from "./layout/UnitDetails";
import NotFoundPage from "./layout/NotFoundPage";
import "./styles/main.scss";

const store = configureAll();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/units" element={<SelectionArea />} />
            <Route path="/details">
              <Route path=":unitId" element={<UnitDetails />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
