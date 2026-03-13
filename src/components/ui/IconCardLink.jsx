export default function IconCardLink({ title, description, icon, link }) {
  return (
    <a
      href={link}
      className="group bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition block text-center"
    >
      {/* icon container */}
      <div
        className="w-40 h-40 flex items-center justify-center bg-zinc-800 rounded-lg mb-6 mx-auto
                   group-hover:bg-zinc-700 transition"
      >
        <img src={icon} className="w-28 h-28 object-contain invert" />
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-zinc-400">{description}</p>
    </a>
  );
}
