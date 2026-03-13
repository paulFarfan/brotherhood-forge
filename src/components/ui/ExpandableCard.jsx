import { useState } from "react";

export default function ExpandableCard({
  title,
  description,
  image,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-zinc-900 rounded-lg overflow-hidden cursor-pointer hover:bg-zinc-800 transition"
    >
      <img src={image} className="h-40 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <p className="text-zinc-400 mb-4">{description}</p>

        {open && (
          <div className="text-zinc-500 text-sm space-y-2">{children}</div>
        )}
      </div>
    </div>
  );
}
