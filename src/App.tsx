import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
// import { About } from "./pages/About";
import { Info } from "./pages/Info";
import { Intro } from "./pages/Intro";
import { Cancer } from "./pages/Cancer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/병원소개" element={<Intro />} />
        <Route path="/이용안내" element={<Info />} />
        <Route path="/암면역센터" element={<Cancer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
