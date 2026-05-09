"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-surface p-lg">
      <Link href="/" className="mb-xl flex items-center gap-2">
        <div className="h-10 w-10 rounded bg-primary flex items-center justify-center text-on-primary font-bold text-2xl">
          G
        </div>
        <span className="font-h2 text-h2 text-on-surface">GIBangladesh</span>
      </Link>

      <Card className="w-full max-w-[448px] p-xl space-y-xl shadow-xl border border-outline-variant bg-surface-container-lowest">
        <div className="text-center space-y-xs">
          <h1 className="text-h2 font-bold text-on-surface">Welcome Back</h1>
          <p className="text-body-sm text-on-surface-variant">Enter your credentials to access your account</p>
        </div>

        <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="producer@gi.com.bd" 
            required 
          />
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-label-md text-on-surface font-medium">Password</label>
              <Link href="#" className="text-label-sm text-primary hover:underline">Forgot password?</Link>
            </div>
            <Input 
              type="password" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <Button className="w-full h-11 text-label-md font-bold" type="submit">
            Sign In
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-outline-variant" /></div>
          <div className="relative flex justify-center text-label-sm uppercase"><span className="bg-surface-container-lowest px-md text-on-surface-variant/60">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-md">
          <Button variant="secondary" className="gap-2">
            <span className="material-symbols-outlined text-[18px]">google</span> Google
          </Button>
          <Button variant="secondary" className="gap-2">
            <span className="material-symbols-outlined text-[18px]">lock</span> SSO
          </Button>
        </div>

        <p className="text-center text-body-sm text-on-surface-variant">
          Don't have an account?{' '}
          <Link href="/register" className="font-bold text-primary hover:underline">
            Register now
          </Link>
        </p>
      </Card>
      
      <p className="mt-xl text-label-sm text-on-surface-variant/50">
        © 2026 GIBangladesh SaaS Platform. Secure Authentication.
      </p>
    </div>
  );
}
