export default function Features() {
  return (
    <section className="py-28 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">Platform Features</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Tools designed to help men rebuild discipline, strength and purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Community Discussions</h3>
            <p className="text-zinc-400">
              Share experiences and learn from other men.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Book & Film Analysis</h3>
            <p className="text-zinc-400">Discussions that sharpen thinking.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Discipline Challenges</h3>
            <p className="text-zinc-400">
              Structured challenges to rebuild habits.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Personal Progress</h3>
            <p className="text-zinc-400">Track growth and personal goals.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Mentorship</h3>
            <p className="text-zinc-400">Guidance from experienced men.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Accountability</h3>
            <p className="text-zinc-400">
              Stay committed with community support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
