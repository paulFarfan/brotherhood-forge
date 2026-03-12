import ButtonRed from "../ui/ButtonRed";
export default function CTA() {
  return (
    <section className="py-32 px-6 bg-zinc-950 text-center">
      <h2 className="text-white text-5xl font-bold mb-6">
        Become the Man You Were Meant to Be
      </h2>

      <p className="text-zinc-400 max-w-xl mx-auto mb-10">
        Join a brotherhood of men committed to discipline, strength and personal
        growth.
      </p>
      <ButtonRed text="Join the Brotherhood" />
    </section>
  );
}
