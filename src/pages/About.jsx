// src/pages/About.jsx
import pattern from "../assets/newbg.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Right pattern panel */}
      <div
        className="absolute top-0 right-0 h-full w-[40%] hidden md:block"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-8 md:px-16 py-16 md:w-[60%]">
        <p className="text-sm tracking-widest text-zinc-400">ABOUT</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">Hello, I’m Viviana!</h1>

        <p className="text-zinc-300 max-w-xl mt-6 leading-relaxed">
          {/* your about text */}
          mimimi
        </p>

        <Link
        to="/gallery"
          onClick={() => console.log("clicked gallery link")}
        className="
          inline-flex items-center gap-2 mt-10
          bg-white text-black
          px-6 py-3 rounded-full font-medium
          transition-all duration-300 transform
          hover:gap-4 hover:scale-105
        ">
        View Gallery
        <span>→</span>
        </Link>
      </div>
    </div>
  );
}