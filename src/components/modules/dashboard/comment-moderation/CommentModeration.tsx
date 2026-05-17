import Image from "next/image";

const CommentModeration = () => {
  return (
    <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
      {/* <!-- Moderation Dashboard --> */}
      <section className="p-lg space-y-lg">
        <div className="flex justify-between items-end">
          <h1 className="font-h1 text-h2 text-on-surface md:block hidden dark:text-white">
            Comment Moderation
          </h1>

          <div className="flex space-x-sm">
            <div className="flex items-center space-x-xs bg-surface-container border border-outline-variant px-sm py-xs rounded-lg dark:bg-[#14161c] dark:border-gray-700">
              <span className="font-label-sm text-label-sm uppercase text-outline dark:text-outline-variant">
                Filter:
              </span>
              <select className="bg-transparent border-none font-label-sm text-primary focus:ring-0 cursor-pointer dark:text-primary-fixed">
                <option>All Reports</option>
                <option>Negative Only</option>
                <option>High Severity</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- Bento Grid Stats --> */}
        <div className="grid grid-cols-12 gap-lg">
          <div className="col-span-12 md:col-span-4 bg-surface dark:bg-inverse-surface border border-outline-variant p-lg rounded-xl flex items-center space-x-md dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <div className="bg-primary-container/10 p-md rounded-full text-primary dark:text-primary-fixed">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                pending_actions
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase dark:text-outline-variant">
                Pending Review
              </p>
              <p className="font-h2 text-h2 text-primary dark:text-inverse-on-surface">1,284</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-surface dark:bg-inverse-surface border border-outline-variant p-lg rounded-xl flex items-center space-x-md dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <div className="bg-error-container/20 p-md rounded-full text-error dark:text-primary-fixed">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                report
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase dark:text-outline-variant">
                High Reported
              </p>
              <p className="font-h2 text-h2 text-error dark:text-inverse-on-surface">42</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-surface dark:bg-inverse-surface border border-outline-variant p-lg rounded-xl flex items-center space-x-md dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all">
            <div className="bg-tertiary-container/10 p-md rounded-full text-tertiary dark:text-primary-fixed">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase dark:text-outline-variant">
                AI Flagged
              </p>
              <p className="font-h2 text-h2 text-tertiary dark:text-inverse-on-surface">156</p>
            </div>
          </div>
          {/* <!-- Data Table Container --> */}
          <div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm dark:bg-inverse-surface dark:border-gray-700">
            <div className="overflow-x-auto dark:bg-on-surface">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container dark:bg-[#14161c] border-b border-outline-variant text-on-surface-variant dark:border-gray-700 dark:text-gray-300">
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase dark:text-gray-400">
                      Comment Text
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase dark:text-gray-400">
                      Author
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase dark:text-gray-400">
                      Post Title
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase dark:text-gray-400">
                      Sent.
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase text-center dark:text-gray-400">
                      Reports
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase text-right dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant dark:divide-gray-700">
                  {/* <!-- Row 1 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-1 dark:text-gray-300">
                        This implementation...
                      </p>
                      <span className="font-label-sm text-label-sm text-outline dark:text-gray-400">
                        2 mins ago
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center space-x-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm dark:bg-purple-900 dark:text-purple-100">
                          JS
                        </div>
                        <span className="font-label-md text-label-md text-on-surface dark:text-gray-300 whitespace-nowrap">
                          John Smith
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-sm text-body-sm text-secondary truncate max-w-[150px] dark:text-gray-300">
                      The Future of Web Dev
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-error-container text-on-error-container rounded-full font-label-sm text-label-sm dark:bg-red-900 dark:text-red-100">
                        Negative
                      </span>
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="font-label-md text-label-md text-error font-bold dark:text-gray-300">
                        12
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <div className="flex justify-end space-x-xs">
                        <button
                          className="p-xs text-primary hover:bg-primary-container/10 rounded-lg transition-colors dark:text-blue-400"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                        </button>
                        <button
                          className="p-xs text-error hover:bg-error-container/20 rounded-lg transition-colors dark:text-red-400"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                        <button
                          className="p-xs text-on-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-lg transition-colors dark:text-gray-300"
                          title="Ban User"
                        >
                          <span className="material-symbols-outlined">
                            person_off
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Row 2 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-1 dark:text-gray-300">
                        Love the new UI! So much cleaner and easier to navigate.
                      </p>
                      <span className="font-label-sm text-label-sm text-outline dark:text-gray-400">
                        15 mins ago
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center space-x-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-sm dark:bg-blue-900 dark:text-blue-100">
                          AL
                        </div>
                        <span className="font-label-md text-label-md text-on-surface dark:text-gray-300">
                          Anna Lee
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-sm text-body-sm text-secondary truncate max-w-[150px] dark:text-gray-300">
                      UI Design Trends 2024
                    </td>
                    <td className="px-lg py-md">
                      <span
                        className="px-sm py-xs bg-on-primary-container text-primary rounded-full font-label-sm text-label-sm dark:text-blue-400"
                        style={{ backgroundColor: "rgba(61, 82, 160, 0.1)" }}
                      >
                        Positive
                      </span>
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="font-label-md text-label-md text-on-surface-variant dark:text-gray-300">
                        0
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <div className="flex justify-end space-x-xs">
                        <button
                          className="p-xs text-primary hover:bg-primary-container/10 rounded-lg transition-colors dark:text-blue-400"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                        </button>
                        <button
                          className="p-xs text-error hover:bg-error-container/20 rounded-lg transition-colors dark:text-red-400"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                        <button
                          className="p-xs text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors dark:text-gray-300"
                          title="Ban User"
                        >
                          <span className="material-symbols-outlined">
                            person_off
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Row 3 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-1 dark:text-gray-300">
                        Could someone clarify the prerequisites for this
                        tutorial?
                      </p>
                      <span className="font-label-sm text-label-sm text-outline dark:text-gray-400">
                        45 mins ago
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center space-x-sm">
                        <div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-sm dark:bg-gray-800 dark:text-gray-300">
                          RK
                        </div>
                        <span className="font-label-md text-label-md text-on-surface dark:text-gray-300">
                          Raj Kumar
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-sm text-body-sm text-secondary truncate max-w-[150px] dark:text-gray-300">
                      React Masterclass
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm dark:bg-gray-800 dark:text-gray-300">
                        Neutral
                      </span>
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="font-label-md text-label-md text-on-surface-variant dark:text-gray-300">
                        2
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <div className="flex justify-end space-x-xs">
                        <button
                          className="p-xs text-primary hover:bg-primary-container/10 rounded-lg transition-colors dark:text-blue-400"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                        </button>
                        <button
                          className="p-xs text-error hover:bg-error-container/20 rounded-lg transition-colors dark:text-red-400"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                        <button
                          className="p-xs text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors dark:text-gray-300"
                          title="Ban User"
                        >
                          <span className="material-symbols-outlined">
                            person_off
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Row 4 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-1 dark:text-gray-300">
                        [Spam] Click here to win a free smartphone! Limited time
                        offer...
                      </p>
                      <span className="font-label-sm text-label-sm text-outline dark:text-gray-400">
                        1 hour ago
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center space-x-sm">
                        <div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-label-sm dark:bg-red-900 dark:text-red-100">
                          BX
                        </div>
                        <span className="font-label-md text-label-md text-on-surface dark:text-gray-300">
                          Bot_X99
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-sm text-body-sm text-secondary truncate max-w-[150px] dark:text-gray-300">
                      Community Guidelines
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-error-container text-on-error-container rounded-full font-label-sm text-label-sm dark:bg-red-900 dark:text-red-100">
                        Negative
                      </span>
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="font-label-md text-label-md text-error font-bold dark:text-gray-300">
                        85
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <div className="flex justify-end space-x-xs">
                        <button
                          className="p-xs text-primary hover:bg-primary-container/10 rounded-lg transition-colors dark:text-blue-400"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                        </button>
                        <button
                          className="p-xs text-error hover:bg-error-container/20 rounded-lg transition-colors dark:text-red-400"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                        <button
                          className="p-xs text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors dark:text-gray-300"
                          title="Ban User"
                        >
                          <span className="material-symbols-outlined">
                            person_off
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-lg py-md bg-surface-container flex md:flex-row flex-col space-y-3 justify-between items-center border-t border-outline-variant dark:bg-[#14161c] dark:border-gray-700">
              <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-gray-400">
                Showing 1 to 10 of 1,284 comments
              </span>
              <div className="flex space-x-sm">
                <button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-variant transition-colors disabled:opacity-50 dark:border-gray-700">
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
                <button className="px-sm py-xs border border-outline-variant rounded bg-primary text-on-primary font-label-sm dark:border-gray-700">
                  1
                </button>
                <button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-variant font-label-sm transition-colors dark:border-gray-700">
                  2
                </button>
                <button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-variant font-label-sm transition-colors dark:border-gray-700">
                  3
                </button>
                <button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-variant transition-colors dark:border-gray-700">
                  <span className="material-symbols-outlined text-sm">
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
};

export default CommentModeration;
