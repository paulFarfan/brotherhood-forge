import ExpandableCard from "../ui/ExpandableCard";
import AnimatedSection from "../ui/AnimatedSection";
export default function FocusMode() {
  return (
    <section id="focus" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">Focus Mode</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Focus Mode is your personal development system. Track progress and
            build discipline across the areas that define who you become.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <AnimatedSection delay={0.1}>
            <ExpandableCard
              title="Mindset"
              description="Mental clarity and emotional discipline."
              image="/images/focus-mindset.webp"
            >
              <p>• Meditation sessions</p>
              <p>• Reflection journals</p>
              <p>• Focus habits</p>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ExpandableCard
              title="Body"
              description="Build strength and physical resilience."
              image="/images/focus-body.webp"
            >
              <p>• Gym training</p>
              <p>• Workout routines</p>
              <p>• Strength progress</p>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <ExpandableCard
              title="Knowledge"
              description="Sharpen your mind through study."
              image="/images/focus-knowledge.webp"
            >
              <p>• Reading lists</p>
              <p>• Philosophy discussions</p>
              <p>• Study topics</p>
            </ExpandableCard>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <ExpandableCard
              title="Social Intelligence"
              description="Understand people and relationships."
              image="/images/focus-social.webp"
            >
              <p>• Communication skills</p>
              <p>• Social awareness</p>
              <p>• Interaction challenges</p>
            </ExpandableCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
