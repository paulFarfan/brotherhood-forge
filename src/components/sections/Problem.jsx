export default function Problem() {
  return (
    <section className="py-28 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="hero-title text-5xl mb-8">The Problem</h2>

          <p className="text-zinc-400 mb-6">
            Many men today feel lost, isolated, and without purpose. Society
            offers no clear path to strength — physical, mental, or spiritual.
          </p>

          <p className="text-zinc-400 mb-6">
            You're drowning in noise. Conflicting advice. No real community. No
            accountability. No structure.
          </p>

          <p className="text-zinc-400">
            Without guidance, many men drift through life without direction.
          </p>
        </div>

        <img src="/images/problem.jpg" className="rounded-lg" />
      </div>
    </section>
  );
}
