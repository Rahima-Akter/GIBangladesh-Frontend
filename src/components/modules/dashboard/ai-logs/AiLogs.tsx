export default function AiLogs() {
  return (
    <main className="lg:ml-64 flex-1 flex flex-col min-h-screen">
      <section className="p-lg flex-1 space-y-lg overflow-x-hidden">
        {/* <!-- AI Usage Summary Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-md">
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-md rounded-xl shadow-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="text-label-sm text-on-surface-variant dark:text-white/80 uppercase mb-xs">
              Total AI Requests Today
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-primary dark:text-blue-500">
                12,442
              </span>
            </div>
          </div>
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-md rounded-xl shadow-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="text-label-sm text-on-surface-variant dark:text-white/80 uppercase mb-xs">
              Most Used AI Tool
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-primary dark:text-blue-500">
                Generator
              </span>
            </div>
          </div>
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-md rounded-xl shadow-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="text-label-sm text-on-surface-variant dark:text-white/80 uppercase mb-xs">
              Active AI Users
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-primary dark:text-blue-500">
                842
              </span>
            </div>
          </div>
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-md rounded-xl shadow-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="text-label-sm text-on-surface-variant dark:text-white/80 uppercase mb-xs">
              Failed Requests
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-error dark:text-blue-500">24</span>
            </div>
          </div>
          <div className="bg-surface dark:bg-inverse-surface border border-outline-variant p-md rounded-xl shadow-sm dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <p className="text-label-sm text-on-surface-variant dark:text-white/80 uppercase mb-xs">
              Features Enabled
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-primary dark:text-blue-500">
                4 / 4
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-lg">
          {/* <!-- AI Tool Usage Table --> */}
          <div className="col-span-12 bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
            <div className="px-lg py-md border-b border-outline-variant dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-h3 text-lg text-on-surface dark:text-white">
                AI Tool Usage
              </h3>
              <div className="flex space-x-md">
                <button className="flex items-center space-x-xs font-label-md text-on-surface-variant hover:text-primary transition-colors dark:text-gray-300">
                  <span className="material-symbols-outlined text-[18px]">
                    filter_alt
                  </span>
                  <span>Filter</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto dark:bg-on-surface">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container dark:bg-[#14161c] border-b border-outline-variant dark:border-gray-700">
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-white/80">
                      User
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-white/80">
                      AI Tool
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-white/80 whitespace-nowrap">
                      Prompt Preview
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-white/80 text-center">
                      Status
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-white/80">
                      Date
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-white/80 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant dark:divide-gray-700">
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-white/70 text-sm">
                      UID-882194
                    </td>
                    <td className="px-lg py-md">
                      <span className="text-sm whitespace-nowrap px-sm py-xs bg-secondary/10 text-primary dark:text-blue-500 rounded-lg font-label-sm">
                        Content Generator
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface-variant dark:text-white/80 max-w-xs truncate">
                      Write a blog about Coxs Bazar...
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="inline-flex items-center px-sm py-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full font-label-sm text-sm">
                        <span
                          className="material-symbols-outlined text-[10px] mr-xs"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>{" "}
                        Success
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-white/70 text-sm">
                      May 24, 14:02
                    </td>
                    <td className="px-lg py-md text-right flex justify-end space-x-md">
                      <button className="text-primary dark:text-blue-500 hover:underline font-label-sm cursor-pointer">
                        View
                      </button>
                      <button className="text-error hover:underline font-label-sm dark:text-red-400 cursor-pointer">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-quinary">
                      UID-112093
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-primary/10 text-primary dark:text-secondary rounded-lg font-label-sm">
                        Text Rewriter
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface-variant dark:text-quaternary max-w-xs truncate">
                      Rewrite this description for SEO...
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="inline-flex items-center px-sm py-xs bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full font-label-sm">
                        <span
                          className="material-symbols-outlined text-[16px] mr-xs"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          error
                        </span>{" "}
                        Failed
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-quinary">
                      May 24, 13:58
                    </td>
                    <td className="px-lg py-md text-right flex justify-end space-x-md">
                      <button className="text-primary dark:text-secondary hover:underline font-label-sm">
                        View
                      </button>
                      <button className="text-error hover:underline font-label-sm dark:text-red-400">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-quinary">
                      UID-552101
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-quaternary/20 text-primary dark:text-secondary rounded-lg font-label-sm">
                        Hashtag Generator
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface-variant dark:text-quaternary max-w-xs truncate">
                      Generate tags for Sylhet tour...
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="inline-flex items-center px-sm py-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full font-label-sm">
                        <span
                          className="material-symbols-outlined text-[16px] mr-xs"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>{" "}
                        Success
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-quinary">
                      May 24, 13:42
                    </td>
                    <td className="px-lg py-md text-right flex justify-end space-x-md">
                      <button className="text-primary dark:text-secondary hover:underline font-label-sm">
                        View
                      </button>
                      <button className="text-error hover:underline font-label-sm dark:text-red-400">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-quinary">
                      UID-092144
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-tertiary/20 text-primary dark:text-secondary rounded-lg font-label-sm">
                        AI Assistant
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface-variant dark:text-quaternary max-w-xs truncate">
                      How to apply for GI certificate?
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="inline-flex items-center px-sm py-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-full font-label-sm">
                        <span
                          className="material-symbols-outlined text-[16px] mr-xs"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          schedule
                        </span>{" "}
                        Pending
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-quinary">
                      May 24, 13:25
                    </td>
                    <td className="px-lg py-md text-right flex justify-end space-x-md">
                      <button className="text-primary dark:text-secondary hover:underline font-label-sm">
                        View
                      </button>
                      <button className="text-error hover:underline font-label-sm dark:text-red-400">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* pagination */}
            <div className="px-lg py-md bg-surface-container flex justify-between items-center border-t border-outline-variant dark:bg-[#14161c] dark:border-gray-700">
              <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-quaternary">
                Showing 4 of 1,244 logs
              </span>
              <div className="flex space-x-sm">
                <button className="p-xs border border-outline-variant dark:border-gray-700 rounded hover:bg-surface-container-high dark:hover:bg-primary/20">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button className="p-xs border border-outline-variant dark:border-gray-700 rounded hover:bg-surface-container-high dark:hover:bg-primary/20">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
