export default function Experts() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="hero-title text-5xl mb-6">Professional Support</h2>

          <p className="text-zinc-400 mb-6">
            Some battles require expert guidance. Brotherhood Forge connects
            members with psychologists, coaches and mentors.
          </p>

          <p className="text-zinc-400">
            Whether you're facing a crisis, rebuilding discipline or searching
            for direction, help is available.
          </p>
        </div>

        <img src="/images/experts.jpg" className="rounded-lg" />
      </div>
    </section>
  );
}
