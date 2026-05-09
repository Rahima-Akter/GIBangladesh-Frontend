"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-surface p-lg">
      <Link href="/" className="mb-xl flex items-center gap-2">
        <div className="h-10 w-10 rounded bg-primary flex items-center justify-center text-on-primary font-bold text-2xl">
          G
        </div>
        <span className="font-h2 text-h2 text-on-surface">GIBangladesh</span>
      </Link>

      <Card className="w-full max-w-[512px] p-xl space-y-xl shadow-xl border border-outline-variant bg-surface-container-lowest">
        <div className="text-center space-y-xs">
          <h1 className="text-h2 font-bold text-on-surface">Create an Account</h1>
          <p className="text-body-sm text-on-surface-variant">Join the network of authentic GI producers</p>
        </div>

        <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-md">
            <Input label="First Name" placeholder="Rahim" required />
            <Input label="Last Name" placeholder="Uddin" required />
          </div>

          <Input
            label="Email Address"
            type="email"
            placeholder="producer@gi.com.bd"
            required
          />

          <Input
            label="Business Name (Optional)"
            placeholder="Jamdani Artisans Ltd."
          />

          <div className="grid grid-cols-2 gap-md">
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-start gap-2 py-2">
            <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary/20" required />
            <label htmlFor="terms" className="text-body-sm text-on-surface-variant">
              I agree to the <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <Button className="w-full h-11 text-label-md font-bold" type="submit">
            Create Account
          </Button>
        </form>

        <p className="text-center text-body-sm text-on-surface-variant">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </Card>

      <p className="mt-xl text-label-sm text-on-surface-variant/50 text-center max-w-[384px]">
        By creating an account, you help preserve the legacy of Bangladesh's geographical indicators.
      </p>
    </div>
  );
}
