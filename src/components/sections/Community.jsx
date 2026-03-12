export default function Community() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img src="/images/community.png" className="rounded-lg" />

        <div>
          <h2 className="hero-title text-5xl mb-6">Brotherhood</h2>

          <p className="text-zinc-400 mb-6">
            Strength is not built alone. Brotherhood Forge connects men who are
            committed to growth, discipline and mutual support.
          </p>

          <p className="text-zinc-400 mb-6">
            Share struggles. Celebrate victories. Hold each other accountable.
          </p>

          <p className="text-zinc-400">
            A community of men walking the same path.
          </p>
        </div>
      </div>
    </section>
  );
}
