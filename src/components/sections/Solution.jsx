export default function Solution() {
  return (
    <section className="py-28 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img src="/images/solution.webp" className="rounded-lg" />

        <div>
          <h2 className="hero-title text-5xl mb-8">The Solution</h2>

          <p className="text-zinc-400 text-lg mb-6">
            Brotherhood Forge exists to help men reclaim control of their lives.
          </p>

          <p className="text-zinc-400 text-lg mb-6">
            In a world where many men feel isolated, directionless and
            unsupported, we provide the structure, guidance and brotherhood
            needed to rebuild discipline, strength and purpose.
          </p>

          <p className="text-zinc-400 text-lg mb-10">
            This is more than a platform. It is a forge — where men work
            together to become the strongest version of themselves.
          </p>

          {/* Benefits */}

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="#focus"
              className="bg-zinc-900 p-1 rounded-lg hover:bg-zinc-800 transition block"
            >
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Structure</h3>
                <p className="text-zinc-400 text-sm">
                  A system that helps men build discipline and track their
                  progress.
                </p>
              </div>
            </a>
            <a
              href="#community"
              className="bg-zinc-900 p-1 rounded-lg hover:bg-zinc-800 transition block"
            >
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Brotherhood</h3>
                <p className="text-zinc-400 text-sm">
                  A community of men supporting each other in growth.
                </p>
              </div>
            </a>
            <a
              href="#support"
              className="bg-zinc-900 p-1 rounded-lg hover:bg-zinc-800 transition block"
            >
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Guidance</h3>
                <p className="text-zinc-400 text-sm">
                  Access to mentors, coaches and professional support.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
