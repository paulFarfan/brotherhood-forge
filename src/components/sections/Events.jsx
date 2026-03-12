export default function Events() {
  return (
    <section className="py-28 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">Real World Brotherhood</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Connect with men in your city through events and meetups.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Training Meetups</h3>
            <p className="text-zinc-400">
              Group workouts and physical challenges.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Brotherhood Gatherings</h3>
            <p className="text-zinc-400">
              Discussions, networking and support.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Outdoor Activities</h3>
            <p className="text-zinc-400">
              Hiking, riding and shared experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
