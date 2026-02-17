"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F8F8] md:flex-row">
      {/* LEFT SIDE */}
      <div className="order-2 hidden w-1/2 items-center justify-center bg-[#F3F3F3] lg:order-1 lg:flex">
        <Image
          src="/images/signup.png"
          alt="Dashboard Illustration"
          width={550}
          height={550}
          className="object-contain"
          priority
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="order-1 flex flex-1 items-center justify-center bg-[#F8F8F8] px-4 py-10 sm:px-6 lg:order-2">
        <div className="w-full max-w-md border border-gray-100 rounded-2xl shadow-lg bg-white p-8 ">
          <h1 className="text-center font-semibold text-[25px] tracking-widest  md:py-6 text-gray-800">
            WELCOME TO HR SYSTEM
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Image
                  src="/svgs/Letter.svg"
                  alt="Email"
                  width={18}
                  height={18}
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#04499E]"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Image
                  src="/svgs/Lock Keyhole.svg"
                  alt="Password"
                  width={18}
                  height={18}
                />
              </div>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#04499E]"
                required
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="accent-[#04499E]"
                />
                Remember me
              </label>

              <button type="button" className="text-[#04499E] hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#04499E] hover:bg-blue-800 text-white text-sm font-medium transition"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-500">
            By continuing, you agree to the JobFind{" "}
            <span className="text-[#04499E] underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and the{" "}
            <span className="text-[#04499E] underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
