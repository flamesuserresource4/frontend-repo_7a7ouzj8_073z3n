import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter both email and password");
      return;
    }
    setMessage("Welcome back! This is a frontend-only demo.");
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto">
      <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-indigo-900/20 p-8 md:p-10">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Sign in</h2>
          <p className="text-sm text-white/70 mt-1">Welcome to your career hub</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="group">
            <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl bg-white/10 border border-white/20 pl-10 pr-3 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300/60 focus:border-indigo-300/60 transition"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-white/80 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl bg-white/10 border border-white/20 pl-10 pr-10 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300/60 focus:border-indigo-300/60 transition"
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-white/70 hover:text-white focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-white/80">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-300/40"
              />
              Remember me
            </label>
            <button type="button" className="text-sm text-indigo-200 hover:text-white transition">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-indigo-500/30 hover:brightness-110 transition"
          >
            Continue
          </button>

          {message && (
            <p className="text-center text-sm text-emerald-200 bg-emerald-950/30 border border-emerald-400/30 rounded-xl py-2">
              {message}
            </p>
          )}
        </form>

        <p className="text-center text-sm text-white/70 mt-6">
          New to TalentSphere? <button className="text-white hover:underline">Create an account</button>
        </p>
      </div>
    </div>
  );
}
