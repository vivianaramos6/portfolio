import CircularGallery from "../components/CircularGallery";
import { useState } from "react";
export default function Birds() {


  const [selectedImage, setSelectedImage] = useState(null);

  
  return (


    <div className="h-screen bg-black text-white overflow-hidden  flex flex-col">
      {/* Header */}
      <div className="p-8 text-center flex flex-col items-center mt-20">
        <h1 className="text-5xl font-semibold z-10">Vivi and Birding</h1>

        <p className="text-zinc-400 mt-3 max-w-md mx-auto text-base">

      A small, fun space where I keep track of bird sightings. Nothing fancy, just a log of birds and some pictures (terrible quality...) I've taken of them!
    </p>
      </div>

      {/* Gallery fills remaining space */}
      <div className="flex-1 relative">
        <CircularGallery
          textColor="#ffffff"
          bend={6}
          borderRadius={0.15}
          scrollSpeed={1.6}
          scrollEase={0.07}

          onSelect={setSelectedImage} //added 
        />
      </div>

      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Bird"
      className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
    />
  </div>
)}
    </div>
  );
}