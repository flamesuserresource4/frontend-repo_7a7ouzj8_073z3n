import FeatureList from "./FeatureList";

export default function HeroPanel() {
  return (
    <section className="relative w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
          Land your next role faster with a premium job portal
        </h1>
        <p className="mt-4 text-white/80 text-lg">
          Discover curated opportunities from world-class companies and startups. Showcase your best work and let recruiters come to you.
        </p>
        <FeatureList />
      </div>

      <div className="relative h-[520px] md:h-[560px]">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-fuchsia-500/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.06),transparent_60%)] rounded-3xl border border-white/15" />
        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop"
            alt="Abstract office"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
