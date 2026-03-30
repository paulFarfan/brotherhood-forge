export default function Section({ children, id }) {
  return (
    <section id={id} className="py-28 text-white scroll-mt-24">
      {children}
    </section>
  );
}
