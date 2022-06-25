import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import { PATHS } from "./utils/constants";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<About />} path={PATHS.ABOUT} />
        <Route element={<Home />} path={PATHS.HOME} />
        <Route element={<Error />} path={PATHS.ERROR} />
      </Routes>
    </div>
  );
};

export default App;
