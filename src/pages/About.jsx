// src/pages/About.jsx
import pattern from "../assets/AboutPagePics/newbg.jpg";
import Vivi from "../assets/AboutPagePics/Vivi.jpg";
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

      <img
        src={Vivi}
        alt="Viviana"
        className="
          hidden md:block
          absolute
          right-[15%]
          top-[55%]
          -translate-y-1/2
          w-[450px]
          h-[650px]
          object-cover
          shadow-2xl
          shadow-black/90
        "
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-8 md:px-16 py-16 md:w-[60%]">
        <p className="text-sm tracking-widest text-zinc-400">ABOUT</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">
          Hello, I’m Viviana!
        </h1>

        <p className="text-zinc-300 max-w-xl mt-6 leading-relaxed">
          {/* about text */}
          A computer science and engineering student from University of Puerto Rico Mayagüez, who has always loved art
           just as much as technology. While I spend my days building my technical skills, I also find joy in drawing, painting, and experimenting with different mediums.
            Birds, portraits, and small everyday details inspire much of my work.
        </p>

        <p className="text-zinc-300 max-w-xl mt-6 leading-relaxed" > I've created this space to bring all of these interests together in one place and share them with others! </p>

        <Link
          to="/gallery"
          onClick={() => console.log("clicked gallery link")}
          className="
          inline-flex items-center gap-2 mt-10
          bg-white text-black
          px-6 py-3 rounded-full font-medium
          transition-all duration-300 transform
          hover:gap-4 hover:scale-105
        "
        >
          View Gallery
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
