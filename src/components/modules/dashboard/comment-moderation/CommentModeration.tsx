import Image from "next/image";

const CommentModeration = () => {
  return (
    <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
      {/* <!-- Moderation Dashboard --> */}
      <section className="p-lg space-y-lg">
        <div className="flex justify-between items-end">
          <h1 className="font-h1 text-h2 text-on-surface md:block hidden">
            Comment Moderation
          </h1>

          <div className="flex space-x-sm">
            <div className="flex items-center space-x-xs bg-surface-container border border-outline-variant px-sm py-xs rounded-lg">
              <span className="font-label-sm text-label-sm uppercase text-outline">
                Filter:
              </span>
              <select className="bg-transparent border-none font-label-sm text-primary focus:ring-0 cursor-pointer">
                <option>All Reports</option>
                <option>Negative Only</option>
                <option>High Severity</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- Bento Grid Stats --> */}
        <div className="grid grid-cols-12 gap-lg">
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center space-x-md">
            <div className="bg-primary-container/10 p-md rounded-full text-primary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                pending_actions
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Pending Review
              </p>
              <p className="font-h2 text-h2 text-primary">1,284</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center space-x-md">
            <div className="bg-error-container/20 p-md rounded-full text-error">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                report
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                High Reported
              </p>
              <p className="font-h2 text-h2 text-error">42</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center space-x-md">
            <div className="bg-tertiary-container/10 p-md rounded-full text-tertiary">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                AI Flagged
              </p>
              <p className="font-h2 text-h2 text-tertiary">156</p>
            </div>
          </div>
          {/* <!-- Data Table Container --> */}
          <div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-x-auto shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high border-b border-outline-variant text-on-surface-variant">
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase">
                      Comment Text
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase">
                      Author
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase">
                      Post Title
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase">
                      Sent.
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase text-center">
                      Reports
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm uppercase text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {/* <!-- Row 1 --> */}
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-1 max-w-xs">
                        This implementation is actually quite flawed compared to
                        the older version...
                      </p>
                      <span className="font-label-sm text-label-sm text-outline">
                        2 mins ago
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center space-x-sm">
                        <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm">
                          JS
                        </div>
                        <span className="font-label-md text-label-md text-on-surface">
                          John Smith
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-sm text-body-sm text-secondary truncate max-w-[150px]">
                      The Future of Web Dev
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-error-container text-on-error-container rounded-full font-label-sm text-label-sm">
                        Negative
                      </span>
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="font-label-md text-label-md text-error font-bold">
                        12
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <div className="flex justify-end space-x-xs">
                        <button
                          className="p-xs text-primary hover:bg-primary-container/10 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                        </button>
                        <button
                          className="p-xs text-error hover:bg-error-container/20 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                        <button
                          className="p-xs text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors"
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
                  <tr className="bg-surface-container-low/30 hover:bg-surface transition-colors">
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-1 max-w-xs">
                        Love the new UI! So much cleaner and easier to navigate.
                      </p>
                      <span className="font-label-sm text-label-sm text-outline">
                        15 mins ago
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center space-x-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-sm">
                          AL
                        </div>
                        <span className="font-label-md text-label-md text-on-surface">
                          Anna Lee
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-sm text-body-sm text-secondary truncate max-w-[150px]">
                      UI Design Trends 2024
                    </td>
                    <td className="px-lg py-md">
                      <span
                        className="px-sm py-xs bg-on-primary-container text-primary rounded-full font-label-sm text-label-sm"
                        style={{ backgroundColor: "rgba(61, 82, 160, 0.1)" }}
                      >
                        Positive
                      </span>
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        0
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <div className="flex justify-end space-x-xs">
                        <button
                          className="p-xs text-primary hover:bg-primary-container/10 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                        </button>
                        <button
                          className="p-xs text-error hover:bg-error-container/20 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                        <button
                          className="p-xs text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors"
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
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-1 max-w-xs">
                        Could someone clarify the prerequisites for this
                        tutorial?
                      </p>
                      <span className="font-label-sm text-label-sm text-outline">
                        45 mins ago
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center space-x-sm">
                        <div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-sm">
                          RK
                        </div>
                        <span className="font-label-md text-label-md text-on-surface">
                          Raj Kumar
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-sm text-body-sm text-secondary truncate max-w-[150px]">
                      React Masterclass
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">
                        Neutral
                      </span>
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        2
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <div className="flex justify-end space-x-xs">
                        <button
                          className="p-xs text-primary hover:bg-primary-container/10 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                        </button>
                        <button
                          className="p-xs text-error hover:bg-error-container/20 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                        <button
                          className="p-xs text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors"
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
                  <tr className="bg-surface-container-low/30 hover:bg-surface transition-colors">
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-1 max-w-xs">
                        [Spam] Click here to win a free smartphone! Limited time
                        offer...
                      </p>
                      <span className="font-label-sm text-label-sm text-outline">
                        1 hour ago
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center space-x-sm">
                        <div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-label-sm">
                          BX
                        </div>
                        <span className="font-label-md text-label-md text-on-surface">
                          Bot_X99
                        </span>
                      </div>
                    </td>
                    <td className="px-lg py-md font-body-sm text-body-sm text-secondary truncate max-w-[150px]">
                      Community Guidelines
                    </td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-xs bg-error-container text-on-error-container rounded-full font-label-sm text-label-sm">
                        Negative
                      </span>
                    </td>
                    <td className="px-lg py-md text-center">
                      <span className="font-label-md text-label-md text-error font-bold">
                        85
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <div className="flex justify-end space-x-xs">
                        <button
                          className="p-xs text-primary hover:bg-primary-container/10 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <span className="material-symbols-outlined">
                            check_circle
                          </span>
                        </button>
                        <button
                          className="p-xs text-error hover:bg-error-container/20 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                        <button
                          className="p-xs text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors"
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
            <div className="px-lg py-md bg-surface-container-lowest flex md:flex-row flex-col space-y-3 justify-between items-center border-t border-outline-variant">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Showing 1 to 10 of 1,284 comments
              </span>
              <div className="flex space-x-sm">
                <button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-variant transition-colors disabled:opacity-50">
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
                <button className="px-sm py-xs border border-outline-variant rounded bg-primary text-on-primary font-label-sm">
                  1
                </button>
                <button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-variant font-label-sm transition-colors">
                  2
                </button>
                <button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-variant font-label-sm transition-colors">
                  3
                </button>
                <button className="px-sm py-xs border border-outline-variant rounded hover:bg-surface-variant transition-colors">
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
