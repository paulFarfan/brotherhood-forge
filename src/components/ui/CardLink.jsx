export default function CardLink({ title, description, image, link }) {
  return (
    <a
      href={link}
      className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition block"
    >
      <img src={image} className="h-60 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>

        <p className="text-zinc-400">{description}</p>
      </div>
    </a>
  );
}
