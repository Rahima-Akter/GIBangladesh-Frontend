export default function Analytics() {
  return (
    <main className="lg:ml-64 grow flex flex-col min-h-screen">
      {/* <!-- Main Content Canvas --> */}
      <div className="p-lg space-y-lg max-w-[1440px] mx-auto w-full">
        {/* <!-- KPI Summary Cards: Bento Style --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-lg rounded-xl flex flex-col gap-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="font-label-md text-on-surface-variant dark:text-gray-300">
              Total Impressions
            </p>
            <h2 className="font-h2 text-h2 text-on-surface dark:text-white">1,284,590</h2>
          </div>
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-lg rounded-xl flex flex-col gap-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="font-label-md text-on-surface-variant dark:text-gray-300">New Users</p>
            <h2 className="font-h2 text-h2 text-on-surface dark:text-white">42,910</h2>
          </div>
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-lg rounded-xl flex flex-col gap-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="font-label-md text-on-surface-variant dark:text-gray-300">
              GI Product Growth
            </p>
            <h2 className="font-h2 text-h2 text-on-surface dark:text-white">$148.2k</h2>
          </div>
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-lg rounded-xl flex flex-col gap-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="font-label-md text-on-surface-variant dark:text-gray-300">
              Avg. Session Duration
            </p>
            <h2 className="font-h2 text-h2 text-on-surface dark:text-white">04:32</h2>
          </div>
        </div>

        {/* <!-- User Retention Cohort --> */}
        <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col  dark:border-gray-700">
          <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center dark:border-gray-700 dark:bg-inverse-surface">
            <h3 className="font-h3 text-body-lg font-bold text-on-surface dark:text-white">
              User Retention Analysis
            </h3>
            <button className="p-xs hover:bg-surface-container-high rounded-lg">
              <span className="material-symbols-outlined text-on-surface-variant dark:text-gray-300">
                more_vert
              </span>
            </button>
          </div>
          <div className="p-lg grow dark:bg-inverse-surface">
            <div className="h-64 flex items-end gap-sm">
              <div className="grow bg-primary/20 rounded-t-lg relative group h-[80%]">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded hidden group-hover:block">
                  Week 1: 80%
                </div>
              </div>
              <div className="grow bg-primary/30 rounded-t-lg relative group h-[65%]">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded hidden group-hover:block">
                  Week 2: 65%
                </div>
              </div>
              <div className="grow bg-primary/40 rounded-t-lg relative group h-[58%]">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded hidden group-hover:block">
                  Week 3: 58%
                </div>
              </div>
              <div className="grow bg-primary/50 rounded-t-lg relative group h-[52%]">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded hidden group-hover:block">
                  Week 4: 52%
                </div>
              </div>
              <div className="grow bg-primary/60 rounded-t-lg relative group h-[48%]">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded hidden group-hover:block">
                  Week 5: 48%
                </div>
              </div>
              <div className="grow bg-primary/70 rounded-t-lg relative group h-[45%]">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded hidden group-hover:block">
                  Week 6: 45%
                </div>
              </div>
              <div className="grow bg-primary/80 rounded-t-lg relative group h-[42%]">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded hidden group-hover:block">
                  Week 7: 42%
                </div>
              </div>
              <div className="grow bg-primary/90 rounded-t-lg relative group h-[45%]">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded hidden group-hover:block">
                  Week 8: 41%
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-sm text-label-sm text-on-surface-variant font-medium dark:text-gray-400">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
              <span>W5</span>
              <span>W6</span>
              <span>W7</span>
              <span>W8</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
