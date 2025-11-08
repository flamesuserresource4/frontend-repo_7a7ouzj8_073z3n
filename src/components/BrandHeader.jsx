import { Briefcase, ShieldCheck, Crown } from "lucide-react";

export default function BrandHeader() {
  return (
    <header className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30 grid place-items-center text-white">
          <Briefcase className="h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">TalentSphere</p>
          <p className="text-xs text-white/70 -mt-0.5">Premium Job Portal</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6 text-white/80">
        <div className="flex items-center gap-2 text-white/80">
          <ShieldCheck className="h-4 w-4" />
          <span className="text-sm">Enterprise-grade security</span>
        </div>
        <div className="flex items-center gap-2 text-amber-300">
          <Crown className="h-4 w-4" />
          <span className="text-sm">Premium Access</span>
        </div>
      </div>
    </header>
  );
}
