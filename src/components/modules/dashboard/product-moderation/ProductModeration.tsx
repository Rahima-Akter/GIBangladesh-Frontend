import Image from "next/image";
import Link from "next/link";

const ProductModeration = () => {
  return (
    <main className="lg:ml-64 flex flex-col min-h-screen">
      {/* <!-- Page Content --> */}
      <div className="p-lg flex-1">
        <div className="mx-auto">
          {/* <!-- Stats Section --> */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-lg mb-md">
            <div className="bg-surface dark:bg-inverse-surface border border-outline-variant dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all p-lg rounded-xl flex flex-col shadow-md">

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 dark:bg-primary-fixed-dim/15 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary dark:text-primary-fixed text-h1 leading-none"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    pending_actions
                  </span>
                </div>

                <p className="font-h1 text-h1 leading-none ml-2 text-on-surface dark:text-inverse-on-surface">
                  42
                </p>
              </div>

              <h4 className="mt-1 font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                Pending Requests
              </h4>
            </div>
            <div className="bg-surface dark:bg-inverse-surface border border-outline-variant dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all p-lg rounded-xl flex flex-col shadow-md">

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 dark:bg-primary-fixed-dim/15 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-secondary dark:text-primary-fixed text-h1 leading-none"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    task_alt
                  </span>
                </div>

                <span className="font-h1 text-h1 leading-none ml-2 text-on-surface dark:text-inverse-on-surface">
                  128
                </span>
              </div>

              <h4 className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant mt-1">
                Verified This Month
              </h4>
            </div>

            <div className="bg-surface dark:bg-inverse-surface border border-outline-variant dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all p-lg rounded-xl flex flex-col shadow-md">

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-error/10 dark:bg-primary-fixed-dim/15 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-error dark:text-primary-fixed text-h1 leading-none"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    warning
                  </span>
                </div>

                <span className="font-h1 text-h1 leading-none ml-2 text-on-surface dark:text-inverse-on-surface">
                  7
                </span>
              </div>

              <h4 className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant mt-1">
                Flagged Items
              </h4>
            </div>
          </div>
          {/* <!-- Filter Actions --> */}
          <div className="flex justify-between items-center">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-lg w-full dark:bg-inverse-surface dark:border-gray-700">
              <div className="grid grid-cols-12 gap-md items-center">
                <div className="md:col-span-4 col-span-12 relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline dark:text-gray-400"
                    data-icon="search"
                  >
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none dark:bg-[#14161c] dark:border-gray-700 dark:text-gray-300"
                    placeholder="Filter by name, email, or role..."
                    type="text"
                  />
                </div>
                <div className="md:col-span-2 col-span-6">
                  <select className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer dark:bg-[#14161c] dark:border-gray-700 dark:text-gray-300">
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="artisan">Artisan</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className="md:col-span-2 col-span-6">
                  <select className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer dark:bg-[#14161c] dark:border-gray-700 dark:text-gray-300">
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
                <div className="md:col-span-2 col-span-6">
                  <button className="w-full px-md py-sm border border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md flex items-center justify-center gap-xs hover:bg-surface-variant  dark:hover:bg-inverse-surface transition-colors dark:border-gray-700 dark:text-gray-300 dark:bg-[#14161c] cursor-pointer">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-icon="filter_list"
                    >
                      filter_list
                    </span>
                    More Filters
                  </button>
                </div>
                <Link href="/dashboard/admin/add-product" className="md:col-span-2 col-span-6 bg-primary text-white font-label-md text-label-md px-md py-sm rounded-lg hover:bg-primary/90 transition-all shadow-md flex items-center gap-sm justify-center cursor-pointer whitespace-nowrap dark:hover:bg-blue-800">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    data-icon="add"
                  >
                    add
                  </span>
                  Add a Product
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm dark:border-gray-700">
            <div className="overflow-x-auto dark:bg-on-surface">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container dark:bg-[#14161c] border-b border-outline-variant dark:border-gray-700">
                    <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant dark:text-gray-300 uppercase tracking-wider">
                      Product &amp; Entity
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant dark:text-gray-300 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant dark:divide-gray-700">
                  {/* <!-- Request Item 1 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant dark:border-gray-700">
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
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm dark:text-purple-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container mr-sm dark:bg-purple-900"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center justify-end gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-teal-600 text-primary dark:text-white font-label-sm text-label-sm rounded border border-outline-variant dark:hover:bg-teal-700 hover:bg-primary-container hover:text-white transition-all dark:border-gray-700 cursor-pointer">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-error text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all dark:text-white dark:hover:bg-error/80 dark:border-gray-700 cursor-pointer">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all dark:bg-blue-700 dark:hover:bg-blue-800 cursor-pointer">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Request Item 2 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant text-primary-container dark:border-gray-700">
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
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all dark:border-gray-700">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all dark:text-red-400 dark:border-gray-700">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all dark:text-gray-400">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Request Item 3 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant text-tertiary dark:border-gray-700 dark:text-teal-400">
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
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-error-container/30 text-error font-label-sm text-label-sm dark:text-red-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-error mr-sm"></span>
                        Flagged
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all dark:border-gray-700">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all dark:text-red-400 dark:border-gray-700">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all dark:text-gray-400">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Request Item 4 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant text-secondary dark:border-gray-700 dark:text-purple-400">
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
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm dark:text-purple-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container mr-sm dark:bg-purple-900"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all dark:border-gray-700">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all dark:text-red-400 dark:border-gray-700">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all dark:text-gray-400">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Request Item 5 --> */}
                  <tr className="hover:bg-gray-950/30 transition-colors group">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant text-on-surface-variant dark:border-gray-700 dark:text-gray-300">
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
                      <span className="inline-flex items-center px-sm py-xs rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm dark:text-purple-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container mr-sm dark:bg-purple-900"></span>
                        Pending
                      </span>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-xs">
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm rounded border border-outline-variant hover:bg-primary-container hover:text-white transition-all dark:border-gray-700">
                          Edit
                        </button>
                        <button className="px-sm py-xs bg-surface-container-high dark:bg-surface-container-highest text-error font-label-sm text-label-sm rounded border border-outline-variant hover:bg-error-container hover:text-on-error-container transition-all dark:text-red-400 dark:border-gray-700">
                          Delete
                        </button>
                        <button className="px-sm py-xs bg-primary text-white font-label-sm text-label-sm rounded border border-primary hover:bg-primary/90 transition-all dark:text-gray-400">
                          Activate
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-auto px-lg py-md border-t border-outline-variant bg-surface-container-low dark:bg-[#14161c] flex md:flex-row flex-col space-y-3 items-center justify-between dark:border-gray-700">
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
                Showing 5 of 42 pending requests
              </p>
              <div className="flex gap-xs">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors dark:border-gray-700">
                  <span
                    className="material-symbols-outlined text-[18px] dark:text-white"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-white font-label-sm text-label-sm shadow-sm dark:text-gray-400">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest font-label-sm text-label-sm dark:text-white dark:border-gray-700">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest font-label-sm text-label-sm dark:text-white dark:border-gray-700">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors dark:border-gray-700">
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
