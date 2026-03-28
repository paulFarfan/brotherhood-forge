import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavIcon from "../ui/NavIcon";
import { joinLinkProps } from "../../config/site";

const navLinks = [
  { label: "Reality", link: "#reality" },
  { label: "Focus Mode", link: "#focus" },
  { label: "Community", link: "#community" },
  { label: "Support", link: "#support" },
  { label: "Events", link: "#events" },
];

const joinClass =
  "bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition text-white font-medium text-center";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const join = joinLinkProps();

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-zinc-800"
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        <div className="shrink-0">
          <NavIcon />
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-zinc-300 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a {...join} className={joinClass}>
            Join
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-zinc-800 bg-black/95 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-zinc-300 hover:text-white transition py-1"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            {...join}
            className={`${joinClass} py-3`}
            onClick={() => setOpen(false)}
          >
            Join
          </a>
        </div>
      ) : null}
    </nav>
  );
}
