import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/features/auth/services/auth.service";

export default function SignupForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      setError("You must accept the terms and conditions");
      return;
    }

    setLoading(true);

    try {
      await registerUser({ name, email, password });
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please try again with a different email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg rounded-2xl border border-[#27272A] bg-[#111113] p-6 shadow-lg md:p-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 font-heading text-3xl font-bold tracking-tight leading-tight text-[#FAFAFA]">
          Create an account
        </h1>

        <p className="text-sm text-[#A1A1AA]">
          Sign up to get instant access to your dashboard.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mb-2 block text-left text-sm font-medium text-[#A1A1AA]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-[#09090B] border border-[#27272A] px-3 py-2.5 text-sm text-[#FAFAFA] outline-none focus:ring-2 focus:ring-[#27272A]"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-left text-sm font-medium text-[#A1A1AA]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-[#09090B] border border-[#27272A] px-3 py-2.5 text-sm text-[#FAFAFA] outline-none focus:ring-2 focus:ring-[#27272A]"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-left text-sm font-medium text-[#A1A1AA]">
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
            className="w-full rounded-xl bg-[#09090B] border border-[#27272A] px-3 py-2.5 text-sm text-[#FAFAFA] outline-none focus:ring-2 focus:ring-[#27272A]"
          />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="mb-2 block text-left text-sm font-medium text-[#A1A1AA]"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="••••••••"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-xl bg-[#09090B] border border-[#27272A] px-3 py-2.5 text-sm text-[#FAFAFA] outline-none focus:ring-2 focus:ring-[#27272A]"
          />
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2">
          <label className="flex items-center cursor-pointer">
            <input
              id="tmc"
              name="tmc"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="w-4 h-4 rounded border-[#27272A] bg-[#09090B] text-[#FAFAFA] focus:ring-[#27272A]"
            />
            <span className="ml-3 text-sm text-[#A1A1AA]">
              I accept the
            </span>
          </label>

          <a
            href="/terms"
            className="text-sm font-medium text-[#FAFAFA] hover:text-[#A1A1AA] hover:underline"
          >
            Terms and Conditions
          </a>
        </div>

        {error ? <p className="text-sm text-red-500 text-center">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#FAFAFA] !text-[#09090B] px-4 py-2.5 text-sm font-semibold tracking-wide text-[#FAFAFA] transition-all hover:bg-[#E4E4E7] focus:outline-none focus:ring-2 focus:ring-[#27272A] disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create an account"}
        </button>

        <div className="text-center text-sm text-[#A1A1AA]">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-[#FAFAFA] hover:text-[#A1A1AA] hover:underline"
          >
            Login here
          </a>
        </div>
      </form>
    </div>
  );
}