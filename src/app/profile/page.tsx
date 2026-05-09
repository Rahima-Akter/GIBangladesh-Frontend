import { IconArrowRight } from "@tabler/icons-react";

export default function ProfilePage() {
  return (
    <main className="flex-1 lg:ml-64 p-xl overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-xl">
        {/* <!-- Page Header --> */}
        <div className="flex justify-between items-end gap-3">
          <div>
            <h1 className="font-h1 md:text-h1 text-h2 text-on-surface whitespace-nowrap">Profile Info</h1>
          </div>
          <button className="bg-primary text-on-primary px-md md:px-xl py-sm rounded-lg font-label-md text-label-md flex items-center gap-sm transition-all hover:opacity-90 active:scale-[0.98]">

            <span className="material-symbols-outlined text-[14px] md:text-[20px] whitespace-nowrap" data-icon="edit">
              edit
            </span>

            Edit Profile
          </button>
        </div>
        {/* <!-- Bento Grid Layout --> */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          {/* <!-- Profile Card (Main) --> */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
            <div className="h-32 bg-primary-container relative">
              <div className="absolute -bottom-12 left-md">
                <img alt="Ariful Islam Profile" className="w-24 h-24 rounded-full border-4 border-surface-container-lowest object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA" />
              </div>
            </div>
            <div className="pt-16 px-lg pb-lg">
              <div className="flex md:flex-row flex-col justify-between items-start">
                <div>
                  <h2 className="font-h3 text-h3 text-on-surface">Ariful Islam</h2>
                  <p className="text-primary font-label-md text-label-md">@ariful_gib_dev</p>
                </div>

                <div className="flex items-center gap-xs px-sm py-xs bg-surface-container-high rounded-full border border-outline-variant mt-3 md:mt-0">
                  <span className="material-symbols-outlined text-[10px] md:text-[16px] text-on-surface-variant" data-icon="calendar_today">calendar_today</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Joined Jan 2024</span>
                </div>

              </div>
              <div className="mt-md space-y-sm">
                <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  Strategic developer focused on the GI Products ecosystem in Bangladesh. Passionate about empowering local artisans through SaaS solutions and data-driven storytelling.
                </p>
                <div className="flex flex-wrap gap-md mt-lg">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]" data-icon="location_on">location_on</span>
                    <span className="font-body-sm text-body-sm">Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]" data-icon="link">link</span>
                    <a className="font-body-sm text-body-sm text-primary hover:underline" href="#">gibangladesh.com/ariful</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Stats Card --> */}
          <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg space-y-lg">
            <h3 className="font-label-md text-label-md font-bold text-on-surface border-b border-outline-variant pb-sm">Account Overview</h3>
            <div className="space-y-md">
              <div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
                <div className="flex items-center gap-md">
                  <div className="p-xs bg-secondary-container/20 rounded-lg">
                    <span className="material-symbols-outlined text-secondary" data-icon="article">article</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface-variant">Total Blogs</span>
                </div>
                <span className="font-h3 text-h3 text-on-surface">24</span>
              </div>
              <div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
                <div className="flex items-center gap-md">
                  <div className="p-xs bg-tertiary-fixed/20 rounded-lg">
                    <span className="material-symbols-outlined text-tertiary" data-icon="bookmark">bookmark</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface-variant">Saved Items</span>
                </div>
                <span className="font-h3 text-h3 text-on-surface">156</span>
              </div>
              <div className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
                <div className="flex items-center gap-md">
                  <div className="p-xs bg-primary-container/20 rounded-lg">
                    <span className="material-symbols-outlined text-primary" data-icon="forum">forum</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface-variant">Comments</span>
                </div>
                <span className="font-h3 text-h3 text-on-surface">89</span>
              </div>
            </div>
            <button className="w-full py-sm border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-colors">View Analytics</button>
          </div>
          {/* <!-- Recent Activity Section --> */}
          <div className="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
            <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low/30">
              <h3 className="font-label-md text-label-md font-bold text-on-surface">Recent Contributions</h3>
              <a className="text-primary font-label-sm text-label-sm hover:underline" href="#">View All</a>
            </div>
            <div className="divide-y divide-outline-variant">
              <div className="p-lg flex items-center gap-lg hover:bg-surface-container-low transition-colors">
                <div className="h-16 w-16 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
                  <div className="w-full h-full bg-cover bg-center" data-alt="A professional photography shot of Jamdani weaving loom in a rural Bangladeshi workshop, highlighting the intricate threads and traditional craftsmanship under warm, natural sunlight. The image has a clean, editorial look with high clarity." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBejBKkcqEKrV5KWaq2FUjcvzvyNbXWWIOBg6gU6aBVbPts2fukTog_LPjyc4_sMrqUXeVijnCriCr0Iq6bNffKqrbjveE6QTO7pa48Gb5ew_1HcHA9mIWeUIblfKi1N6cR867aFz2xlfv9MYyg_IxbLmwMR7siUqgpMjGnA6gUnauY1DG0GygvFI4B7FzNcx4F7mRg6OqUYdQ0Pw_ondQCtrK7f1fBqf_nqtz9pV0T57G3hiGkI6m4Ali-KCtXYlVYSem2CVVCP2I')" }}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="px-xs py-[2px] bg-secondary-container text-on-secondary-container text-[10px] rounded font-bold uppercase">Blog</span>
                    <span className="text-on-surface-variant text-[12px]">2 days ago</span>
                  </div>
                  <h4 className="font-body-md text-body-md font-bold text-on-surface">Preserving the Heritage of Jamdani Weaving</h4>
                  <p className="text-on-surface-variant text-body-sm line-clamp-1">Exploring the modern challenges faced by GI-certified artisans in the Narayanganj district...</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant" data-icon="chevron_right">chevron_right</span>
              </div>
              <div className="p-lg flex items-center gap-lg hover:bg-surface-container-low transition-colors">
                <div className="h-16 w-16 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
                  <div className="w-full h-full bg-cover bg-center" data-alt="Close up shot of golden ripe Hilsa fish on a white ceramic plate, illustrating the premium quality of Bangladesh's GI-labeled seafood. High-key lighting highlights the silvery scales and fresh texture in a professional food styling setup." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOSYvaAWWgoYWFlCqstvGwmaOCDSRKaz0tmdvcUiusQ7dKZQ-0U5fl6iQ6u33UXV6Kg5DQ6h0raf2qofYKG4lCLhVlQHS-c-ceBv_VxO_JDjIWldfEdNsn-D6ZA9rKX0pNHlwG7aATJn6PckZ2sRY_e1J3tV9-zRFogNCbVoJsb-znBpfGqPRhdjviPP-3plUjMWABavR1zbxsWYhDC9DClMLlU6nnqF9VgZgu81Zfd4kltcZlAAD-Skc6X_5V76BzdyLnk0oLyog')" }}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="px-xs py-[2px] bg-tertiary-container text-on-tertiary-container text-[10px] rounded font-bold uppercase">Product</span>
                    <span className="text-on-surface-variant text-[12px]">5 days ago</span>
                  </div>
                  <h4 className="font-body-md text-body-md font-bold text-on-surface">The Economic Impact of GI Certification for Hilsa Fish</h4>
                  <p className="text-on-surface-variant text-body-sm line-clamp-1">A deep dive into how international recognition is changing market dynamics for local fisheries...</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant" data-icon="chevron_right"><IconArrowRight /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}