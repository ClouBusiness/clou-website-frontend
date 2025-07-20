import { BrowserRouter, Route, Routes } from "react-router";

import Cards from "../Components/Cards";
import Home from "../Pages/Home";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testes" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
