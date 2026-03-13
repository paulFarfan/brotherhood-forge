import CountUp from "react-countup";

export default function StatsCard({ number, title, description, suffix }) {
  return (
    <div className="bg-zinc-900 p-8 rounded-lg text-center hover:bg-zinc-800 transition">
      <h3 className="text-5xl font-bold text-red-500 mb-4">
        <CountUp
          end={number}
          duration={3}
          suffix={suffix}
          enableScrollSpy
          scrollSpyOnce
        />
      </h3>

      <p className="text-xl font-semibold mb-2">{title}</p>

      <p className="text-zinc-400 text-sm">{description}</p>
    </div>
  );
}
