
    import Beams from '../components/BeamsBg';

export default function Home({}) 
 {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={18}
          beamNumber={20}
          lightColor="#d7b88d"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-74 text-center px-6 min-h-screen">
        <h1 className="text-7xl md:text-8xl font-semibold mb-4">
          Vivi's Portfolio
        </h1>

        <p className="text-zinc-300 max-w-md text-lg">
          A personal portfolio featuring artwork, software projects, and creative exploration.
        </p>
      </div>

    </div>
  );
}