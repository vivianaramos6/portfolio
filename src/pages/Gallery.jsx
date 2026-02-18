import { Link } from "react-router-dom";


const pieces = [
  {
    title: "Piece Title 1",
    description: "Optional short caption",
    image: piece1,
    slug: "piece-title-1",
  },
  {
    title: "Piece Title 2",
    description: "Optional short caption",
    image: piece2,
    slug: "piece-title-2",
  },
];



export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-14">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold">Gallery</h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">
          A curated selection of work — hover to reveal the title.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Intro tile (first grid cell) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs tracking-widest text-zinc-400">COLLECTION</p>
            <h2 className="text-2xl font-semibold mt-3">Selected pieces</h2>
            <p className="text-zinc-300 mt-3 leading-relaxed">
              Mini description like the reference site — quick context about the series,
              mediums, or what you’re exploring.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/about"
                className="inline-flex items-center rounded-full px-5 py-2 bg-white text-black font-medium hover:scale-[1.02] transition"
              >
                About
              </Link>
              <a
                href="#grid"
                className="inline-flex items-center rounded-full px-5 py-2 border border-white/15 text-white hover:bg-white/10 transition"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Art tiles */}
          {pieces.map((p) => (
            <Link
              key={p.slug}
              to={`/gallery/${p.slug}`} // you can change this to a modal later
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              id="grid"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}