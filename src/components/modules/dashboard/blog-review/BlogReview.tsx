const BlogReview = () => {
  return (
    <main className="lg:ml-64 flex-1 p-lg">
      <div className="max-w-7xl mx-auto space-y-lg">
        {/* <!-- Header & Stats Bento Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all p-lg rounded-xl relative overflow-hidden">
            <div className="relative z-10">

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-primary/10 dark:bg-primary-fixed-dim/15 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary dark:text-primary-fixed text-h1 leading-none"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    pending_actions
                  </span>
                </div>

                <span className="text-h1 font-h1 ml-2 text-on-surface dark:text-inverse-on-surface leading-none">
                  124
                </span>
              </div>

              <div className="font-label-md text-xs uppercase tracking-wider opacity-80 text-on-surface-variant dark:text-outline-variant mt-1">
                Awaiting Review
              </div>
            </div>
          </div>

          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all p-lg rounded-xl relative overflow-hidden">
            <div className="relative z-10">

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-error/10 dark:bg-primary-fixed-dim/15 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-error dark:text-primary-fixed text-h1 leading-none"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    report
                  </span>
                </div>

                <span className="text-h1 font-h1 ml-2 text-on-surface dark:text-inverse-on-surface leading-none">
                  12
                </span>
              </div>

              <div className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant dark:text-outline-variant mt-1">
                High Risk Flagged
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Moderation Table Container --> */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm dark:bg-inverse-surface dark:border-gray-700">
          {/* <!-- Table Body --> */}
          <div className="overflow-x-auto dark:bg-on-surface">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container dark:bg-[#14161c] border-b border-outline-variant dark:border-gray-700 text-on-surface-variant font-label-sm uppercase tracking-wider dark:text-gray-300 text-sm">
                  <th className="px-md whitespace-nowrap py-md">Title</th>
                  <th className="px-sm whitespace-nowrap py-md">Author</th>
                  <th className="px-md whitespace-nowrap py-md">Category</th>
                  <th className="px-md whitespace-nowrap py-md">Submission Time</th>
                  <th className="px-md whitespace-nowrap py-md">Flag Count</th>
                  <th className="px-md whitespace-nowrap py-md text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant dark:divide-gray-700">
                {/* <!-- Row 1 - High Risk --> */}
                <tr className="hover:bg-gray-950/30 transition-colors group">
                  <td className="px-lg py-md">
                    <div className="font-label-md text-on-surface font-semibold truncate dark:text-white">
                      Decentralized..
                    </div>
                    <div className="text-label-sm text-on-surface-variant dark:text-gray-400">
                      ID: #BLG-8821
                    </div>
                  </td>
                  <td className="px-sm py-md">
                    <div className="flex items-center gap-sm whitespace-nowrap">
                      <div className="w-6 h-6 rounded-full bg-secondary-container text-[10px] flex items-center justify-center font-bold text-on-secondary-container dark:bg-purple-900 dark:text-purple-100">
                        MK
                      </div>
                      <span className="text-body-sm dark:text-gray-300">Mahfuz Khan</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="bg-surface-variant text-on-surface-variant px-sm py-xs rounded text-label-sm font-semibold dark:bg-gray-800 dark:text-gray-300">
                      FINTECH
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-sm text-on-surface-variant dark:text-gray-300">
                    2 mins ago
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-error"></div>
                      <span className="text-error font-semibold text-label-sm uppercase dark:text-red-400">
                        10
                      </span>
                    </div>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-sm">
                      <button
                        className="p-xs dark:hover:bg-blue-500/40 hover:bg-surface-variant rounded-md text-primary dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant dark:hover:bg-purple-500/40 dark:hover:text-purple-300 cursor-pointer rounded-md text-secondary dark:text-purple-400"
                        title="Block"
                      >
                        <span className="material-symbols-outlined">block</span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant dark:hover:bg-red-500/40 dark:hover:text-red-300 cursor-pointer rounded-md text-error dark:text-red-400"
                        title="Flag"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 2 - Low Risk --> */}
                <tr className="hover:bg-gray-950/30 transition-colors group">
                  <td className="px-lg py-md">
                    <div className="font-label-md text-on-surface font-semibold truncate dark:text-white">
                      Sustainable....
                    </div>
                    <div className="text-label-sm text-on-surface-variant dark:text-gray-400">
                      ID: #BLG-8820
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 rounded-full bg-tertiary-container text-[10px] flex items-center justify-center font-bold text-on-tertiary-container dark:bg-teal-900 dark:text-teal-100">
                        NA
                      </div>
                      <span className="text-body-sm dark:text-gray-300">Nusrat Ahmed</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="bg-surface-variant text-on-surface-variant px-sm py-xs rounded text-label-sm font-semibold dark:bg-gray-800 dark:text-gray-300">
                      AGRITECH
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-sm text-on-surface-variant dark:text-gray-300">
                    14 mins ago
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-primary-container dark:bg-blue-900"></div>
                      <span className="text-on-surface-variant font-semibold text-label-sm uppercase dark:text-gray-300">
                        3
                      </span>
                    </div>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-primary dark:text-blue-400"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-secondary dark:text-purple-400"
                        title="Publish"
                      >
                        <span className="material-symbols-outlined">check</span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-error dark:text-red-400"
                        title="Flag"
                      >
                        <span className="material-symbols-outlined">flag</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 3 - Medium Risk --> */}
                <tr className="hover:bg-gray-950/30 transition-colors group">
                  <td className="px-lg py-md">
                    <div className="font-label-md text-on-surface font-semibold truncate dark:text-white">
                      The Rise of Remote...
                    </div>
                    <div className="text-label-sm text-on-surface-variant dark:text-gray-400">
                      ID: #BLG-8819
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 rounded-full bg-primary-container text-[10px] flex items-center justify-center font-bold text-on-primary-container dark:bg-blue-900 dark:text-blue-100">
                        RA
                      </div>
                      <span className="text-body-sm dark:text-gray-300">Rakibul Alam</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="bg-surface-variant text-on-surface-variant px-sm py-xs rounded text-label-sm font-semibold dark:bg-gray-800 dark:text-gray-300">
                      LIFESTYLE
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-sm text-on-surface-variant dark:text-gray-300">
                    42 mins ago
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                      <span className="text-tertiary font-semibold text-label-sm uppercase dark:text-teal-400">
                        0
                      </span>
                    </div>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-primary dark:text-blue-400"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-secondary dark:text-purple-400"
                        title="Publish"
                      >
                        <span className="material-symbols-outlined">check</span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-error dark:text-red-400"
                        title="Flag"
                      >
                        <span className="material-symbols-outlined">flag</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 4 - Low Risk --> */}
                <tr className="hover:bg-gray-950/30 transition-colors group">
                  <td className="px-lg py-md">
                    <div className="font-label-md text-on-surface font-semibold truncate dark:text-white">
                      Modern Web...
                    </div>
                    <div className="text-label-sm text-on-surface-variant dark:text-gray-400">
                      ID: #BLG-8818
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 rounded-full bg-secondary-fixed text-[10px] flex items-center justify-center font-bold text-on-secondary-fixed">
                        SZ
                      </div>
                      <span className="text-body-sm dark:text-gray-300">Saima Zaman</span>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="bg-surface-variant text-on-surface-variant px-sm py-xs rounded text-label-sm font-semibold dark:bg-gray-800 dark:text-gray-300">
                      TECHNOLOGY
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-sm text-on-surface-variant dark:text-gray-300">
                    1 hour ago
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs">
                      <div className="w-2 h-2 rounded-full bg-primary-container dark:bg-blue-900"></div>
                      <span className="text-on-surface-variant font-semibold text-label-sm uppercase dark:text-gray-300">
                        1
                      </span>
                    </div>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-primary dark:text-blue-400"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-secondary dark:text-purple-400"
                        title="Publish"
                      >
                        <span className="material-symbols-outlined">check</span>
                      </button>
                      <button
                        className="p-xs hover:bg-surface-variant rounded-md text-error dark:text-red-400"
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
          <div className="p-md bg-surface-container flex md:flex-row flex-col space-y-3 items-center justify-between border-t border-outline-variant dark:bg-[#14161c] dark:border-gray-700">
            <div className="text-label-sm text-on-surface-variant dark:text-gray-400">
              Showing 1 to 4 of 124 entries
            </div>
            <div className="flex gap-xs">
              <button className="p-xs rounded border border-outline-variant hover:bg-surface-variant disabled:opacity-50 dark:border-gray-700">
                <span className="material-symbols-outlined text-[20px]">
                  chevron_left
                </span>
              </button>
              <button className="px-sm py-xs rounded bg-primary text-on-primary font-label-sm">
                1
              </button>
              <button className="px-sm py-xs rounded border border-outline-variant hover:bg-surface-variant font-label-sm text-on-surface-variant dark:border-gray-700 dark:text-gray-300">
                2
              </button>
              <button className="px-sm py-xs rounded border border-outline-variant hover:bg-surface-variant font-label-sm text-on-surface-variant dark:border-gray-700 dark:text-gray-300">
                3
              </button>
              <button className="p-xs rounded border border-outline-variant hover:bg-surface-variant dark:border-gray-700">
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
