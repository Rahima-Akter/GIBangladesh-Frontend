import React from "react";

const BlogReview = () => {
  return (
    <main className="lg:ml-64 flex-1 p-lg bg-surface-container">
      <div className="max-w-7xl mx-auto space-y-lg">
        {/* <!-- Header & Stats Bento Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="bg-primary-container text-on-primary-container p-lg rounded-xl border border-primary relative overflow-hidden">
            <div className="relative z-10">
              <p className="material-symbols-outlined text-[30px] mb-sm flex justify-between gap-6">
                pending_actions
                <span className="text-h2 font-h2 ml-3">124</span>
              </p>
              <div className="font-label-md text-xs uppercase tracking-wider opacity-80">
                Awaiting Review
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant relative">
            <p className="material-symbols-outlined text-[30px] text-red-500 mb-sm flex justify-between gap-6">
              report
              <span className="text-h2 font-h2  text-on-surface ml-3">12</span>
            </p>
            <div className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant">
              High Risk Flagged
            </div>
          </div>
        </div>
        {/* <!-- Moderation Table Container --> */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col shadow-sm">
          {/* <!-- Table Body --> */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-sm uppercase tracking-wider">
                  <th className="px-md whitespace-nowrap py-md">Title</th>
                  <th className="px-md whitespace-nowrap py-md">Author</th>
                  <th className="px-md whitespace-nowrap py-md">Category</th>
                  <th className="px-md whitespace-nowrap py-md">Submission Time</th>
                  <th className="px-md whitespace-nowrap py-md">Risk Level</th>
                  <th className="px-md whitespace-nowrap py-md text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {/* <!-- Row 1 - High Risk --> */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-lg py-md">
                    <div className="font-label-md text-on-surface font-semibold max-w-xs truncate">
                      Decentralized Finance in 2024: A New Era
                    </div>
                    <div className="text-label-sm text-on-surface-variant">
                      ID: #BLG-8821
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 rounded-full bg-secondary-container text-[10px] flex items-center justify-center font-bold text-on-secondary-container">
                        MK
                      </div>
                      <span className="text-body-sm">Mahfuz Khan</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="bg-surface-variant text-on-surface-variant px-sm py-xs rounded text-label-sm font-semibold">
                      FINTECH
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-sm text-on-surface-variant">
                    2 mins ago
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-error"></div>
                      <span className="text-error font-semibold text-label-sm uppercase">
                        High (84%)
                      </span>
                    </div>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-sm">
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-primary"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-secondary"
                        title="Block"
                      >
                        <span className="material-symbols-outlined">block</span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-error"
                        title="Flag"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 2 - Low Risk --> */}
                <tr className="bg-surface-container-low/30 hover:bg-surface-container transition-colors group">
                  <td className="px-lg py-md">
                    <div className="font-label-md text-on-surface font-semibold max-w-xs truncate">
                      Sustainable Agriculture Initiatives in Sylhet
                    </div>
                    <div className="text-label-sm text-on-surface-variant">
                      ID: #BLG-8820
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 rounded-full bg-tertiary-container text-[10px] flex items-center justify-center font-bold text-on-tertiary-container">
                        NA
                      </div>
                      <span className="text-body-sm">Nusrat Ahmed</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="bg-surface-variant text-on-surface-variant px-sm py-xs rounded text-label-sm font-semibold">
                      AGRITECH
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-sm text-on-surface-variant">
                    14 mins ago
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                      <span className="text-on-surface-variant font-semibold text-label-sm uppercase">
                        Low (4%)
                      </span>
                    </div>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-primary"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-secondary"
                        title="Publish"
                      >
                        <span className="material-symbols-outlined">check</span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-error"
                        title="Flag"
                      >
                        <span className="material-symbols-outlined">flag</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 3 - Medium Risk --> */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-lg py-md">
                    <div className="font-label-md text-on-surface font-semibold max-w-xs truncate">
                      The Rise of Remote Work in Dhakas IT Sector
                    </div>
                    <div className="text-label-sm text-on-surface-variant">
                      ID: #BLG-8819
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 rounded-full bg-primary-container text-[10px] flex items-center justify-center font-bold text-on-primary-container">
                        RA
                      </div>
                      <span className="text-body-sm">Rakibul Alam</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="bg-surface-variant text-on-surface-variant px-sm py-xs rounded text-label-sm font-semibold">
                      LIFESTYLE
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-sm text-on-surface-variant">
                    42 mins ago
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                      <span className="text-tertiary font-semibold text-label-sm uppercase">
                        Medium (32%)
                      </span>
                    </div>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-primary"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-secondary"
                        title="Publish"
                      >
                        <span className="material-symbols-outlined">check</span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-error"
                        title="Flag"
                      >
                        <span className="material-symbols-outlined">flag</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 4 - Low Risk --> */}
                <tr className="bg-surface-container-low/30 hover:bg-surface-container transition-colors group">
                  <td className="px-lg py-md">
                    <div className="font-label-md text-on-surface font-semibold max-w-xs truncate">
                      Modern Web Frameworks: A Comparative Study
                    </div>
                    <div className="text-label-sm text-on-surface-variant">
                      ID: #BLG-8818
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 rounded-full bg-secondary-fixed text-[10px] flex items-center justify-center font-bold text-on-secondary-fixed">
                        SZ
                      </div>
                      <span className="text-body-sm">Saima Zaman</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="bg-surface-variant text-on-surface-variant px-sm py-xs rounded text-label-sm font-semibold">
                      TECHNOLOGY
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-sm text-on-surface-variant">
                    1 hour ago
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                      <span className="text-on-surface-variant font-semibold text-label-sm uppercase">
                        Low (1%)
                      </span>
                    </div>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-primary"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-secondary"
                        title="Publish"
                      >
                        <span className="material-symbols-outlined">check</span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-error"
                        title="Flag"
                      >
                        <span className="material-symbols-outlined">flag</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Pagination --> */}
          <div className="p-md bg-surface-container-low flex md:flex-row flex-col space-y-3 items-center justify-between border-t border-outline-variant">
            <div className="text-label-sm text-on-surface-variant">
              Showing 1 to 4 of 124 entries
            </div>
            <div className="flex gap-xs">
              <button className="p-xs rounded border border-outline-variant hover:bg-surface-variant disabled:opacity-50">
                <span className="material-symbols-outlined text-[20px]">
                  chevron_left
                </span>
              </button>
              <button className="px-sm py-xs rounded bg-primary text-on-primary font-label-sm">
                1
              </button>
              <button className="px-sm py-xs rounded border border-outline-variant hover:bg-surface-variant font-label-sm text-on-surface-variant">
                2
              </button>
              <button className="px-sm py-xs rounded border border-outline-variant hover:bg-surface-variant font-label-sm text-on-surface-variant">
                3
              </button>
              <button className="p-xs rounded border border-outline-variant hover:bg-surface-variant">
                <span className="material-symbols-outlined text-[20px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogReview;
