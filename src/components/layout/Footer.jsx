export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800 bg-black text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo */}

        <div className="flex justify-center mb-6">
          <img
            src="/icons/forgebanner.webp"
            alt="THE FORGE"
            className="h-10 opacity-80 hover:opacity-100 transition"
          />
        </div>

        {/* Tagline */}

        <p className="text-zinc-500 mb-6">
          A brotherhood forging stronger men.
        </p>

        {/* Quick Links */}

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 text-sm">
          <a href="#reality" className="hover:text-white transition">
            Reality
          </a>

          <a href="#focus" className="hover:text-white transition">
            Focus Mode
          </a>

          <a href="#community" className="hover:text-white transition">
            Community
          </a>

          <a href="#support" className="hover:text-white transition">
            Support
          </a>

          <a href="#events" className="hover:text-white transition">
            Events
          </a>

          <a href="/privacy.html" className="hover:text-white transition">
            Privacy
          </a>

          <a href="/terms.html" className="hover:text-white transition">
            Terms
          </a>
        </div>

        {/* Copyright */}

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} THE FORGE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
