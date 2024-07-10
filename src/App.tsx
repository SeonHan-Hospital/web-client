import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Intro } from "./pages/Intro";
import { Cancer } from "./pages/Cancer";
import { Care } from "./pages/Care";
import { Community } from "./pages/Community";
import { Create } from "./pages/Create";
import { QnA } from "./pages/QnA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/병원소개" element={<Intro />} />
        <Route path="/이용안내" element={<Info />} />
        <Route path="/암면역센터" element={<Cancer />} />
        <Route path="/재활치료센터" element={<Care />} />
        <Route path="/커뮤니티" element={<Community />} />
        <Route path="/글쓰기" element={<Create />} />
        <Route path="/QnA/:id" element={<QnA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
