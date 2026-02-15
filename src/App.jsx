import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Birds from "./pages/Birds";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/birds" element={<Birds />} />
      </Routes>
    </BrowserRouter>
  );
}