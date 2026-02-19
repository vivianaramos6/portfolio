import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Birds from "./pages/Birds";


import StaggeredMenu from "./components/StaggeredMenu";


export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Gallery", link: "/gallery" },
     { label: "Birds", link: "/birds" },
  ];
  return (
    <BrowserRouter>
    <StaggeredMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        isFixed
        position="right"
        items={menuItems}
        socialItems={[
          { label: "GitHub", link: "https://github.com/vivianaramos6" },
          { label: "LinkedIn", link: "https://linkedin.com" },
        ]}
        displaySocials
        displayItemNumbering
        colors={["#ed5f12ff", "#ff8c27ff"]}
        accentColor="#ff7a66"
      />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/" element={<Home  />} />
      </Routes>
    </BrowserRouter>
  );
}