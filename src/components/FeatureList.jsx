import { Award, Sparkles, Search, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Curated Matches",
    desc: "AI-enhanced suggestions tailored to your skills and ambitions.",
  },
  {
    icon: Search,
    title: "Power Search",
    desc: "Filter roles by seniority, compensation, tech stack, and more.",
  },
  {
    icon: Shield,
    title: "Private by Default",
    desc: "Your profile visibility is always under your control.",
  },
  {
    icon: Award,
    title: "Top Employers",
    desc: "Work with leading brands and high-growth startups globally.",
  },
];

export default function FeatureList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
      {features.map(({ icon: Icon, title, desc }) => (
        <li key={title} className="flex gap-3 items-start">
          <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center text-white/90">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-white font-medium">{title}</p>
            <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
