import AnimatedSection from "../ui/AnimatedSection";
import IconCardLink from "../ui/IconCardLink";
export default function Community() {
  return (
    <section id="community" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">Community</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Brotherhood Forge is built around interaction between members. Share
            knowledge, support each other and build real connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <AnimatedSection delay={0.1}>
            <IconCardLink
              title="Training Groups"
              description="Find partners for gym routines, workout plans and physical challenges."
              icon="/icons/Training.webp"
              link="/community/training"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <IconCardLink
              title="Books & Film Discussions"
              description="Debates and analysis of books, philosophy and meaningful films."
              icon="/icons/Discussions.webp"
              link="/community/books"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <IconCardLink
              title="Life Conversations"
              description="Share experiences, challenges and perspectives about life."
              icon="/icons/Conversations.webp"
              link="/community/life"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <IconCardLink
              title="Event Groups"
              description="Create groups to organize activities and local meetups."
              icon="/icons/Event.webp"
              link="/community/events"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <IconCardLink
              title="Support Circles"
              description="Members helping each other with mental health, discipline and nutrition."
              icon="/icons/Support.webp"
              link="/community/support"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <IconCardLink
              title="Business & Networking"
              description="Connect with other members to collaborate and build projects."
              icon="/icons/Networking.webp"
              link="/community/business"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
