import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "layout/Main";

import Home from "routes/Home";
import Detail from "routes/Detail";
import List from "routes/List";
import TypeList from "routes/TypeList";
import Favorites from "routes/Favorites";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="list">
          <Route index element={<List />} />
          <Route path=":slug" element={<Detail />} />
        </Route>
        <Route path="typelist" element={<TypeList />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();