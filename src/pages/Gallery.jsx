import { Link } from "react-router-dom";
import Walter from "../assets/GalleryPics/walter.jpeg";
import Leia from "../assets/GalleryPics/leia.jpeg";
import portrait2 from "../assets/GalleryPics/portrait2Digital.jpeg";
import portrait1 from "../assets/GalleryPics/portrait1Lapiz.jpeg";
import buhoPintura from "../assets/GalleryPics/buhoPintura.jpeg";
import Cardinal from "../assets/GalleryPics/cardinal.jpeg";
import mamiLapiz from "../assets/GalleryPics/mamiLapiz.jpeg";
import SideProfile from "../assets/GalleryPics/sideProfilePastel.jpg";
import HeadShot from "../assets/GalleryPics/headshotpastel.jpg";
import Backpic from "../assets/GalleryPics/backpic.jpg";
import dPortrait from "../assets/GalleryPics/dportrait.jpg"; 
import gafasPastel from "../assets/GalleryPics/gafasPastel.jpeg";
import bodyStudies from "../assets/GalleryPics/bodyStudies.jpg";
import sketchPortrait from "../assets/GalleryPics/sketchPortait.jpg";

import { useState } from "react";

const pieces = [
   { title: "Tipa con Guantes",
 description: "Oil Pastel on Paper, 2026",
  image: Backpic,
  },
  {
    title: "Walter",
    description: "Digital Illustration, 2025",
    image: Walter,
  },
  {
    title: "Leia",
    description: "Acrylic on Canvas, 2020",
    image: Leia,
  },
  {
    title: "Tipa Digital",
    description: "Digital Illustration, 2020",
    image: portrait2,
  },

  {
    title: "Tipa Mirando para el lado",
    description: "Colored Pencil on Paper, 2020",
    image: portrait1,
  },
  {
    title: "Barn Owl",
    description: "Acrylic on Canvas, 2020",
    image: buhoPintura,
  },
  {
    title: "Cardinal",
    description: "Acrylic on Canvas, 2020",
    image: Cardinal,
  },
  {
    title: "Mami",
    description: "Pencil on Paper, 2020",
    image: mamiLapiz,
  },
  {
    title: "Tipa mirando para el otro lado",
    description: "Pastel on Paper, 2021",
    image: SideProfile,
  },
  { title: "Otra Tipa",
   description: "Pastel on Paper, 2024",
    image: HeadShot,
  },
  { title: "3D Portrait",
   description: "Markers on Paper, 2022",
    image: dPortrait,
  },
  { title: "Gafas Pastel",
   description: "Pastel on Paper, 2025",
    image: gafasPastel,
  },
  { title: "Body Studies",
    description: "Alcohol markers on Paper, 2024",
    image: bodyStudies,
  },
  { title: "Sketch Portrait",
    description: "Pencil on Paper, 2023",
    image: sketchPortrait,
  },
 
];



export default function Gallery() {

  const [activePiece, setActivePiece] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-14">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold">Gallery</h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">
          A curated selection of work - hover to reveal the title.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Intro tile (first grid cell) */}
         {/* Intro tile */}
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 h-72">
  <p className="text-xs tracking-widest text-zinc-400">
    COLLECTION
  </p>

  <h2 className="text-2xl sm:text-3xl font-semibold mt-3">
    Vivi's Favorites
  </h2>

  <p className="text-zinc-300 mt-3 leading-relaxed text-sm sm:text-base">
    This collection brings together some of my proudest works created using a variety of
    mediums, including paint, oil pastels, colored pencils, and digital illustration.
    Each piece reflects experimentation with color, texture, and different ways of
    expressing ideas visually.
  </p>
</div>
         

          {/* Art tiles */}
          {pieces.map((p, idx) => (
              <button
              key={`${p.title}-${idx}`}
              type="button"
              onClick={() => setActivePiece(p)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 text-left"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
                draggable={false}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300" />

              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                <p className="text-lg font-semibold">{p.title}</p>
                {p.description && (
                  <p className="text-sm text-zinc-200/90 mt-1">{p.description}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activePiece && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setActivePiece(null)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <p className="text-lg font-semibold">{activePiece.title}</p>
                {activePiece.description && (
                  <p className="text-sm text-zinc-400 mt-1">{activePiece.description}</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActivePiece(null)}
                className="text-zinc-300 hover:text-white transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <img
                src={activePiece.image}
                alt={activePiece.title}
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}