import AnimatedSection from "./AnimatedSection";

export default function Card({ image, title, text, delay }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
        <img src={image} className="h-40 w-full object-cover rounded mb-4" />

        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <p className="text-zinc-400">{text}</p>
      </div>
    </AnimatedSection>
  );
}
