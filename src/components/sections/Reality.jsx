import StatsCard from "../ui/StatsCard";

export default function Reality() {
  return (
    <section id="reality" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}

        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">
            The Reality Men Face Today
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Across the world, millions of men struggle with isolation, lack of
            purpose and broken support systems. These numbers reveal a growing
            crisis.
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-10">
          <StatsCard
            number={80}
            suffix="%"
            title="Male Suicide Rate"
            description="Nearly 80% of suicides worldwide are men."
          />

          <StatsCard
            number={50}
            suffix="%"
            title="Divorce Rate"
            description="Many marriages end in divorce."
          />

          <StatsCard
            number={33}
            suffix="%"
            title="Male Loneliness"
            description="A growing number of men report chronic loneliness."
          />
        </div>

        {/* Future note */}

        <p className="text-center text-zinc-500 mt-12 text-sm">
          Future versions of the platform will track global trends and
          statistics by country over time.
        </p>
      </div>
    </section>
  );
}
