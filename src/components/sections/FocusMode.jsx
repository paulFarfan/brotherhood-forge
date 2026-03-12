export default function FocusMode() {
  return (
    <section className="py-28 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">War Mode</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            A system designed to help men rebuild discipline through structured
            challenges and daily action.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Discipline</h3>
            <p className="text-zinc-400">
              Build daily habits that forge mental strength.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Fitness</h3>
            <p className="text-zinc-400">
              Training programs designed for physical resilience.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Knowledge</h3>
            <p className="text-zinc-400">
              Books, philosophy and discussion to sharpen the mind.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Brotherhood</h3>
            <p className="text-zinc-400">Men holding each other accountable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
