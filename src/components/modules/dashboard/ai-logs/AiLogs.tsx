import Image from "next/image";

export default function AiLogs() {
  return (
    <main className="lg:ml-64 flex-1 flex flex-col min-h-screen">
      <section className="p-lg flex-1 space-y-lg overflow-x-hidden">
        {/* <!-- AI Usage Summary Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-md">
          <div className="bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant dark:border-outline p-md rounded-xl shadow-sm">
            <p className="text-label-sm text-on-surface-variant dark:text-quaternary uppercase mb-xs">
              Total AI Requests Today
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-primary dark:text-secondary">
                12,442
              </span>
              <span className="text-green-600 text-label-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  arrow_upward
                </span>{" "}
                12%
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant dark:border-outline p-md rounded-xl shadow-sm">
            <p className="text-label-sm text-on-surface-variant dark:text-quaternary uppercase mb-xs">
              Most Used AI Tool
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-primary dark:text-secondary">
                Generator
              </span>
              <span className="text-on-surface-variant text-label-sm opacity-70">
                45% Share
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant dark:border-outline p-md rounded-xl shadow-sm">
            <p className="text-label-sm text-on-surface-variant dark:text-quaternary uppercase mb-xs">
              Active AI Users
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-primary dark:text-secondary">
                842
              </span>
              <span className="text-green-600 text-label-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  arrow_upward
                </span>{" "}
                5%
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant dark:border-outline p-md rounded-xl shadow-sm">
            <p className="text-label-sm text-on-surface-variant dark:text-quaternary uppercase mb-xs">
              Failed Requests
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-error">24</span>
              <span className="text-error text-label-sm font-bold flex items-center">
                0.2% Rate
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant dark:border-outline p-md rounded-xl shadow-sm">
            <p className="text-label-sm text-on-surface-variant dark:text-quaternary uppercase mb-xs">
              Features Enabled
            </p>
            <div className="flex items-end justify-between">
              <span className="text-h3 font-h3 text-primary dark:text-secondary">
                4 / 4
              </span>
              <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-xs rounded text-label-sm">
                Optimal
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-lg">
          {/* <!-- AI Tool Usage Table --> */}
          <div className="col-span-12 bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant dark:border-outline rounded-xl overflow-hidden shadow-sm">
            <div className="px-lg py-md border-b border-outline-variant dark:border-outline flex justify-between items-center">
              <h3 className="font-h3 text-h3 text-on-surface dark:text-white">
                AI Tool Usage
              </h3>
              <div className="flex space-x-md">
                <button className="flex items-center space-x-xs font-label-md text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    filter_alt
                  </span>
                  <span>Filter</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container-low dark:bg-surface-container-highest/20 border-b border-outline-variant dark:border-outline">
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-quaternary">
                      User
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-quaternary">
                      AI Tool
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-quaternary whitespace-nowrap">
                      Prompt Preview
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-quaternary text-center">
                      Status
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-quaternary">
                      Date
                    </th>
                    <th className="px-lg py-md font-label-md text-on-surface-variant dark:text-quaternary text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant dark:divide-outline">
                  <tr className="hover:bg-surface-container-low dark:hover:bg-white/5 transition-colors">
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-quinary text-sm">
                      UID-882194
                    </td>
                    <td className="px-lg py-md">
                      <span className=" text-sm whitespace-nowrap px-sm py-xs bg-secondary/10 text-primary dark:text-secondary rounded-lg font-label-sm">
                        Content Generator
                      </span>
                    </td>
                    <td className="px-lg py-md font-body-sm text-on-surface-variant dark:text-quaternary max-w-xs truncate">
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
                    <td className="px-lg py-md font-body-sm text-on-surface dark:text-quinary text-sm">
                      May 24, 14:02
                    </td>
                    <td className="px-lg py-md text-right flex justify-end space-x-md">
                      <button className="text-primary dark:text-secondary hover:underline font-label-sm">
                        View
                      </button>
                      <button className="text-error hover:underline font-label-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low dark:hover:bg-white/5 transition-colors">
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
                      <button className="text-error hover:underline font-label-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low dark:hover:bg-white/5 transition-colors">
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
                      <button className="text-error hover:underline font-label-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low dark:hover:bg-white/5 transition-colors">
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
                      <button className="text-error hover:underline font-label-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* pagination */}
            <div className="px-lg py-md bg-surface-container-low/50 dark:bg-transparent flex justify-between items-center border-t border-outline-variant dark:border-outline">
              <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-quaternary">
                Showing 4 of 1,244 logs
              </span>
              <div className="flex space-x-sm">
                <button className="p-xs border border-outline-variant dark:border-outline rounded hover:bg-surface-container-high dark:hover:bg-primary/20">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button className="p-xs border border-outline-variant dark:border-outline rounded hover:bg-surface-container-high dark:hover:bg-primary/20">
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
