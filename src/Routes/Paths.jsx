import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../Pages/Home";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
