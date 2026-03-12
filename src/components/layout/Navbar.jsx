export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white hero-title text-2xl tracking-widest">
          BROTHERHOOD FORGE
        </h1>

        <div className="flex gap-6">
          <a className="text-zinc-300 hover:text-white cursor-pointer">
            Community
          </a>

          <a className="text-zinc-300 hover:text-white cursor-pointer">
            Growth
          </a>

          <a className="text-zinc-300 hover:text-white cursor-pointer">
            Events
          </a>
        </div>
      </div>
    </nav>
  );
}
