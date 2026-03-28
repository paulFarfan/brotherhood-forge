import CardLink from "../ui/CardLink";
import AnimatedSection from "../ui/AnimatedSection";
export default function Experts() {
  return (
    <section id="support" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">Professional Support</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <AnimatedSection delay={0.1}>
            <CardLink
              title="Psychologists"
              description="Professional support for difficult moments."
              image="/images/psychology.webp"
              link="/experts/psychology"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <CardLink
              title="Coaches"
              description="Guidance for discipline and life direction."
              image="/images/coaching.webp"
              link="/experts/coaching"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <CardLink
              title="Mentors"
              description="Advice from men with experience."
              image="/images/mentors.webp"
              link="/experts/mentorship"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
