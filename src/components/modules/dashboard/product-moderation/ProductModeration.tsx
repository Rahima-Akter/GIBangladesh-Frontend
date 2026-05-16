import Image from "next/image";

const ProductModeration = () => {
  return (
    <main className="lg:ml-64 flex flex-col min-h-screen">
      {/* <!-- Page Content --> */}
      <div className="p-lg flex-1">
        <div className="mx-auto">
          {/* <!-- Stats Section --> */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-lg mb-md">
            <div className="bg-primary-container p-lg rounded-xl flex flex-col justify-between text-white border border-primary/20 shadow-md">
              <p
                className="material-symbols-outlined flex justify-between items-center"
                data-icon="pending_actions"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                pending_actions
                <span className="font-h1 text-h2 ml-3">42</span>
              </p>

              <div>
                <h4 className="font-label-md text-label-md opacity-80">
                  Pending Requests
                </h4>
              </div>
            </div>
            <div className="bg-surface-container-lowest dark:bg-surface-container-low p-lg rounded-xl border border-outline-variant flex flex-col justify-between shadow-sm">
              <p
                className="material-symbols-outlined text-secondary flex justify-between items-center "
                data-icon="task_alt"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                task_alt
                <span className="font-h1 text-h2 ml-3 text-primary dark:text-primary-fixed">
                  128
                </span>
              </p>
              <h4 className="font-label-md text-label-md opacity-80">
                Verified This Month
              </h4>
            </div>
            <div className="bg- bg-error/4 dark:bg-surface-container-low p-lg rounded-xl border border-outline-variant flex flex-col justify-between shadow-sm">
              <div className="">
                <p
                  className="material-symbols-outlined text-error flex justify-between items-center"
                  data-icon="warning"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  warning
                  <span className="font-h1 text-h2 ml-3 text-error">7</span>
                </p>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Flagged Items
                </h4>
              </div>
            </div>
          </div>
          {/* <!-- Filter Actions --> */}
          <div className="flex justify-between items-center">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-lg">
              <div className="grid grid-cols-12 gap-md items-center">
                <div className="md:col-span-4 col-span-12 relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline"
                    data-icon="search"
                  >
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Filter by name, email, or role..."
                    type="text"
                  />
                </div>
                <div className="md:col-span-2 col-span-6">
                  <select className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="artisan">Artisan</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className="md:col-span-2 col-span-6">
                  <select className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
                <div className="md:col-span-2 col-span-6">
                  <button className="w-full px-md py-sm border border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md flex items-center justify-center gap-xs hover:bg-surface-variant transition-colors">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-icon="filter_list"
                    >
                      filter_list
                    </span>
                    More Filters
                  </button>
                </div>
                <button className="md:col-span-2 col-span-6 bg-primary text-white font-label-md text-label-md px-md py-sm rounded-lg hover:bg-primary/90 transition-all shadow-md flex items-center gap-sm">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    data-icon="add"
                  >
                    add
                  </span>
                  Add a Product
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Main Requests Table Container --> */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest dark:bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low dark:bg-surface-container-high border-b border-outline-variant">
                    <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant uppercase tracking-wider">
                      Product &amp; Entity
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {/* <!-- Request Item 1 --> */}
                  <tr className="hover:bg-surface-container transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant">
                          <Image
                            width={100}
                            height={100}
                            alt="Product preview"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA"
                          />
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface dark:text-white">
                            Jamdani Saree
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
                            Dhaka Artisan Guild
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface dark:text-outline-variant">
                        Oct 24, 2024
                      </p>
                    </td>
                    <td className="px-lg py-md">
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container mr-sm"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center justify-end gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Request Item 2 --> */}
                  <tr className="bg-surface-container-low/50 dark:bg-surface-container-highest/5 hover:bg-surface-container transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant text-primary-container">
                          <span
                            className="material-symbols-outlined"
                            data-icon="restaurant"
                          >
                            restaurant
                          </span>
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface dark:text-white">
                            Rajshahi Silk
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
                            Northern Weavers Assn.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface dark:text-outline-variant">
                        Oct 23, 2024
                      </p>
                    </td>
                    <td className="px-lg py-md">
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-primary-container/10 text-primary dark:text-primary-fixed font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-sm"></span>
                        Verified
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Request Item 3 --> */}
                  <tr className="hover:bg-surface-container transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant text-tertiary">
                          <span
                            className="material-symbols-outlined"
                            data-icon="agriculture"
                          >
                            agriculture
                          </span>
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface dark:text-white">
                            Khirsapati Mango
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
                            Chapainawabganj Farms
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface dark:text-outline-variant">
                        Oct 22, 2024
                      </p>
                    </td>
                    <td className="px-lg py-md">
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-error-container/30 text-error font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-error mr-sm"></span>
                        Flagged
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Request Item 4 --> */}
                  <tr className="bg-surface-container-low/50 dark:bg-surface-container-highest/5 hover:bg-surface-container transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant text-secondary">
                          <span
                            className="material-symbols-outlined"
                            data-icon="coffee"
                          >
                            coffee
                          </span>
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface dark:text-white">
                            Sylhet Tea
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
                            Surma Valley Estates
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface dark:text-outline-variant">
                        Oct 21, 2024
                      </p>
                    </td>
                    <td className="px-lg py-md">
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container mr-sm"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Request Item 5 --> */}
                  <tr className="hover:bg-surface-container transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant text-on-surface-variant">
                          <span
                            className="material-symbols-outlined"
                            data-icon="category"
                          >
                            category
                          </span>
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface dark:text-white">
                            Satkhira Honey
                          </p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
                            Sundarban Collectives
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <p className="font-body-sm text-body-sm text-on-surface dark:text-outline-variant">
                        Oct 20, 2024
                      </p>
                    </td>
                    <td className="px-lg py-md">
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container mr-sm"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-auto px-lg py-md border-t border-outline-variant bg-surface-container-low dark:bg-surface-container-high flex md:flex-row flex-col space-y-3 items-center justify-between">
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
                Showing 5 of 42 pending requests
              </p>
              <div className="flex gap-xs">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors">
                  <span
                    className="material-symbols-outlined text-[18px] dark:text-white"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-white font-label-sm text-label-sm shadow-sm">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest font-label-sm text-label-sm dark:text-white">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest font-label-sm text-label-sm dark:text-white">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors">
                  <span
                    className="material-symbols-outlined text-[18px] dark:text-white"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductModeration;
