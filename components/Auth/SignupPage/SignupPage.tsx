'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-[poppins] md:flex-row">
      {/* Left Side - Illustration */}
      <div
        className="hidden lg:flex w-1/2 items-center justify-center"
        style={{ backgroundColor: '#F6F6F6' }}
      >
        <div className="w-full h-full flex items-center justify-center p-8">
          <Image
            src="/images/signup.png"
            alt="HR System Illustration"
            width={520}
            height={520}
            className="object-contain max-w-full max-h-full"
            priority
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 items-center justify-center bg-white px-4 py-10 sm:px-6 [&_input::placeholder]:text-[#757575]">
      <div className="w-full max-w-md border border-gray-100 rounded-2xl shadow-lg bg-white p-8">         
          <h1
            className="text-center font-bold text-[23px]  py-4 tracking-widest"
            style={{ color: '#1a1a2e', letterSpacing: '0.08em' }}
          >
            WELCOME TO HR SYSTEM
          </h1>

          <form onSubmit={handleSignUp} className="space-y-4 mt-4">
            {/* Google Sign Up Button */}
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign Up with Google
            </button>
 
           
              <div className=" flex justify-center text-xs py-2">
                <span className="bg-white px-3 text-gray-400">OR</span>
              </div>
         

            {/* User Name Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Image
                  src="/svgs/user.svg"
                  alt="User"
                  width={16}
                  height={16}
                />
              </div>
              <input
                type="text"
                placeholder="User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2.5 text-sm placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#04499E] focus:border-transparent transition"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Image
                  src="/svgs/Letter.svg"
                  alt="Email"
                  width={16}
                  height={16}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2.5 text-sm placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#04499E] focus:border-transparent transition"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Image
                  src="/svgs/Lock Keyhole.svg"
                  alt="Password"
                  width={16}
                  height={16}
                />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2.5 text-sm placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#04499E] focus:border-transparent transition"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-[#04499E] data-[state=checked]:bg-[#04499E]"
              />
              <Label
                htmlFor="remember"
                className="text-sm font-normal cursor-pointer text-gray-600"
              >
                Remember me
              </Label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-md text-white text-sm font-semibold transition-colors"
              style={{ backgroundColor: '#04499E' }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor = '#04499E')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor = '#04499E')
              }
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="text-[#04499E] font-medium hover:underline"
              >
                Sign in
              </button>
            </p>
          </form>

          {/* Footer */}
          <p className="mt-5 text-center text-[17px] text-gray-500 font-[opensans]">
            By continuing, you agree to the JobFind{' '}
            <a href="#" className="text-[#04499E] underline">
              Terms of Service
            </a>{' '}
            and the{' '}
            <a href="#" className="text-[#04499E] underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
