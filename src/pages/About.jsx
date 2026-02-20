
import pattern from "../assets/AboutPagePics/newbg.jpg";
import Vivi from "../assets/AboutPagePics/Vivi.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const buttonStyle = `
  inline-flex items-center gap-2
  bg-white text-black
  px-6 py-3 rounded-full font-medium
  transition-all duration-300 transform
  hover:gap-4 hover:scale-105
`;

  return (
     <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* MOBILE:*/}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${pattern})` }}
      />

      {/* Background pattern */}
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
          h-[625px]
          object-cover
          shadow-2xl
          shadow-black/90
          rounded-2xl 
        "
      />


      <div className="relative z-10 min-h-screen px-8 md:px-16 py-16 md:w-[60%]">
        <p className="text-sm tracking-widest text-zinc-400">ABOUT</p>
        <h1 className="text-5xl md:text-6xl font-semibold mt-4">
          Hello, I’m Viviana!
        </h1>

        <p className="text-zinc-300 max-w-xl mt-6 leading-relaxed">
          A computer science and engineering student from University of Puerto
          Rico Mayagüez, who has always loved art just as much as technology.
          While I spend my days building my technical skills, I also find joy in
          drawing, painting, and experimenting with different mediums. Birds,
          portraits, and small everyday details inspire much of my work.
        </p>

        <p className="text-zinc-300 max-w-xl mt-6 leading-relaxed">
          I've created this space to bring all of these interests together in
          one place and share them with others!
        </p>

        <div className="flex gap-4 mt-10">
          <button onClick={() => setResumeOpen(true)} className={buttonStyle}>
            Resume
          </button>
          <Link
            to="/gallery"
            onClick={() => console.log("clicked gallery link")}
            className={buttonStyle}
          >
            View Gallery
            <span>→</span>
          </Link>
        </div>
      </div>

      {resumeOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="w-full max-w-4xl h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <p className="text-lg font-semibold">Resume</p>

              <button
                onClick={() => setResumeOpen(false)}
                className="text-zinc-300 hover:text-white transition text-xl"
              >
                ✕
              </button>
            </div>

            {/* PDF Viewer */}
            <iframe
              title="Resume"
              src="/06resVVRV.pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
