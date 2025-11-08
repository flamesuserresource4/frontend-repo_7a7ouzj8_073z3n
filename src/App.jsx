import BrandHeader from "./components/BrandHeader";
import FeatureList from "./components/FeatureList";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[540px] w-[540px] rounded-full bg-gradient-to-br from-indigo-600/30 via-violet-600/30 to-fuchsia-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[620px] w-[620px] rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-violet-600/20 to-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_0%,rgba(99,102,241,0.12),transparent),radial-gradient(800px_300px_at_90%_100%,rgba(168,85,247,0.10),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <BrandHeader />

        <main className="grid md:grid-cols-2 gap-12 items-center py-10 md:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Trusted by senior professionals worldwide
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Sign in to accelerate your job search
            </h1>
            <p className="text-white/80 text-lg mt-4">
              Access curated roles, priority recruiter outreach, and private opportunities tailored to your profile.
            </p>
            <FeatureList />
          </div>

          <LoginForm />
        </main>

        <footer className="py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} TalentSphere. All rights reserved.
        </footer>
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"
      />
    </div>
  );
}

export default App;
