import Card from "../ui/Card";
export default function Pillars() {
  return (
    <section className="py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white">The Path of Growth</h2>

        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          A platform designed for men who want to improve their body, mind and
          purpose.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        <Card
          image="/images/discipline.jpg"
          title="Discipline"
          text="Build habits that transform your life."
          delay={0.1}
        />
        <Card
          image="/images/discipline.jpg"
          title="Strength"
          text="Improve your body and physical resilience."
          delay={0.2}
        />
        <Card
          image="/images/discipline.jpg"
          title="Mind"
          text="Develop mental toughness and clarity."
          delay={0.3}
        />
        <Card
          image="/images/discipline.jpg"
          title="Brotherhood"
          text="Grow alongside men walking the same path."
          delay={0.4}
        />
      </div>
    </section>
  );
}
