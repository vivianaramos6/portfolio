
// import StaggeredMenu from "../components/StaggeredMenu";

export default function Home({setMenuOpen}) {

  // console.log("setMenuOpen is", setMenuOpen);
  // //  const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "About me", link: "/about" },
    { label: "Gallery", ariaLabel: "Art gallery", link: "/gallery" },
    { label: "Birds", ariaLabel: "Bird log", link: "/birds" },
  ];


  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-7xl font-semibold mb-4">
        Vivi's Portfolio
      </h1>

          <p className="text-zinc-400 max-w-md">
       A personal portfolio featuring artwork, software projects, and creative exploration.
      </p>
      

      <p className="mt-8 text-zinc-500">
  Use the menu to explore →
</p>

     
    </div>
  );
}