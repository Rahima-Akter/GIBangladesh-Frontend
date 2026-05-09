import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-on-background/5 border-t border-outline-variant dark:border-on-surface-variant/20 py-3xl px-lg transition-colors duration-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl">
        <div className="md:col-span-1 space-y-md">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary dark:bg-primary-fixed-dim flex items-center justify-center text-on-primary dark:text-on-primary-fixed font-bold">
              G
            </div>
            <span className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface">GIBangladesh</span>
          </Link>
          <p className="text-body-sm text-on-surface-variant dark:text-outline-variant leading-relaxed">
            The official digital home for Bangladesh's Geographical Indication (GI) products. Preserving tradition, empowering artisans.
          </p>
        </div>

        <div>
          <h4 className="text-label-md font-bold text-on-surface dark:text-inverse-on-surface mb-md uppercase tracking-wider">Explore</h4>
          <ul className="space-y-sm">
            <li><Link href="/gi-products" className="text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">GI Products</Link></li>
            <li><Link href="/blogs" className="text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">Knowledge Hub</Link></li>
            <li><Link href="#" className="text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">Interactive Map</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-label-md font-bold text-on-surface dark:text-inverse-on-surface mb-md uppercase tracking-wider">Platform</h4>
          <ul className="space-y-sm">
            <li><Link href="/dashboard" className="text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">Dashboard</Link></li>
            <li><Link href="/login" className="text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">Verification Portal</Link></li>
            <li><Link href="#" className="text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors">Open Data API</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-label-md font-bold text-on-surface dark:text-inverse-on-surface mb-md uppercase tracking-wider">Newsletter</h4>
          <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mb-md">Get updates on new GI registrations.</p>
          <div className="flex gap-xs">
            <input type="email" placeholder="Email" className="bg-surface-container-lowest dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-md px-md py-xs text-body-sm dark:text-inverse-on-surface flex-1 outline-none focus:ring-1 focus:ring-primary" />
            <button className="bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed p-xs rounded-md material-symbols-outlined">arrow_forward</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-3xl pt-xl border-t border-outline-variant dark:border-on-surface-variant/20 flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-label-sm text-on-surface-variant/60 dark:text-outline-variant/60">
          © 2026 GIBangladesh SaaS Platform. A National Heritage Initiative.
        </p>
        <div className="flex gap-xl">
          <Link href="#" className="text-label-sm text-on-surface-variant/60 dark:text-outline-variant/60 hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="text-label-sm text-on-surface-variant/60 dark:text-outline-variant/60 hover:text-primary">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
