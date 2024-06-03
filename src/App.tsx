import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Info } from "./pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/병원소개" element={<About />} />
        <Route path="/이용안내" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
