import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../Pages/Home";
import Teste from "../Pages/Teste";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testes" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
