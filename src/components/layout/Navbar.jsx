import NavIcon from "../ui/NavIcon";
const navLinks = [
  { label: "Reality", link: "#reality" },
  { label: "Focus Mode", link: "#focus" },
  { label: "Community", link: "#community" },
  { label: "Support", link: "#support" },
  { label: "Events", link: "#events" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <div>
          <NavIcon />
        </div>

        {/* Navigation */}

        <div className="flex gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-zinc-300 hover:text-white transition cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action */}

        <div>
          <button className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition">
            Join
          </button>
        </div>
      </div>
    </nav>
  );
}
