import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/features/auth/services/auth.service";
import { useAuth } from "@/app/providers/AuthProvider";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setSession } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginUser({ email, password })
      setSession({
        user: data.user,
        token: data.token,
        remember: rememberMe,
      })
      navigate("/dashboard", { replace: true })
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("STATUS:", err.response?.status)
        console.log("DATA:", err.response?.data)
        setError(err.response?.data?.message || "Request failed")
      } else {
        console.error(err)
        setError("Request failed")
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-12 w-full">
        <div className="border border-[#27272A] bg-[#111113] rounded-2xl p-6 max-w-md w-full mx-auto shadow-lg md:p-8 lg:mx-0 lg:ml-auto">
          <div className="mb-8 text-center">
            <h1 className="text-[#FAFAFA] font-heading text-3xl font-bold tracking-tight leading-tight mb-4">Sign in</h1>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              Sign in to your account to access your dashboard and manage your projects.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 text-[#A1A1AA] font-medium text-sm block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@readymadeui.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2.5 text-sm text-[#FAFAFA] rounded-xl bg-[#09090B] border border-[#27272A] w-full outline-none focus:ring-2 focus:ring-[#27272A]"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 text-[#A1A1AA] font-medium text-sm block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2.5 text-sm text-[#FAFAFA] rounded-xl bg-[#09090B] border border-[#27272A] w-full outline-none focus:ring-2 focus:ring-[#27272A]"
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-2">
              <label className="flex items-center cursor-pointer">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#27272A] bg-[#09090B] text-[#FAFAFA] focus:ring-[#27272A]"
                />
                <span className="ml-3 text-sm text-[#A1A1AA]">Remember me</span>
              </label>

              <a
                href="/forgotPassword"
                className="text-sm font-medium text-[#FAFAFA] hover:text-[#A1A1AA] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {error ? <p className="text-sm text-red-500">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 text-sm rounded-xl font-semibold tracking-wide text-[#FAFAFA] bg-[#FAFAFA] !text-[#09090B] hover:bg-[#E4E4E7] transition-all focus:outline-none focus:ring-2 focus:ring-[#27272A] disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="text-[#A1A1AA] text-sm text-center">
              Don't have an account?
              <a
                href="/register"
                className="text-[#FAFAFA] hover:text-[#A1A1AA] hover:underline ml-1 font-medium"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>

        <div className="hidden lg:block max-w-lg mx-auto">
          <img
            src="https://readymadeui.com/images/integration-illus.webp"
            className="w-full object-contain"
            alt="login illustration"
          />
        </div>
      </div>
    </div>
  );
}