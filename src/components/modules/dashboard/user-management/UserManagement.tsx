import Image from "next/image";

export default function UserManagement() {
  return (
    <main className="lg:ml-64 flex-1 flex flex-col min-h-screen p-lg">
      {/* <!-- Page Content --> */}
      <div className="flex-1">
        {/* <!-- Dashboard Filters Card --> */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-lg dark:bg-inverse-surface dark:border-gray-700 w-full">
          <div className="grid grid-cols-12 gap-md items-center">
            <div className="md:col-span-5 col-span-12 relative">
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
            <div className="md:col-span-2 col-span-4">
              <select className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer dark:bg-[#14161c] dark:border-gray-700 dark:text-gray-300">
                <option value="">All Roles</option>
                <option value="admin">Admin</option>
                <option value="artisan">Artisan</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="md:col-span-2 col-span-4">
              <select className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer dark:bg-[#14161c] dark:border-gray-700 dark:text-gray-300">
                <option value="">Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <div className="md:col-span-3 col-span-4">
              <button className="w-full px-md py-sm border border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md flex items-center justify-center gap-xs hover:bg-surface-variant dark:hover:bg-inverse-surface transition-colors dark:border-gray-700 dark:text-gray-300 dark:bg-[#14161c]">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="filter_list"
                >
                  filter_list
                </span>
                More Filters
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Data Table Card --> */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm dark:bg-inverse-surface dark:border-gray-700">
        <div className="overflow-x-auto dark:bg-on-surface">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container dark:bg-[#14161c] border-b border-outline-variant dark:border-gray-700">
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider dark:text-gray-300">
                  Name
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider dark:text-gray-300">
                  Email
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider dark:text-gray-300">
                  Role
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider dark:text-gray-300">
                  Status
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider dark:text-gray-300">
                  Joined Date
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant dark:divide-gray-700">
              {/* <!-- Table Row 1 --> */}
              <tr className="hover:bg-gray-950/30 transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <Image
                      width={100}
                      height={100}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border border-outline-variant dark:border-gray-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN7SwU70seLYrkPafACtV4OOKPycey-aFJLYcL3akPxG8vxe1yOjHBqZ5XHBs6iB1_9FCSlYrDi9wkfA9iBlvN1hZS8UqNqMiVWYFZKkNHmJhHeCKDoVRQe0sjUzaGfpXu5leKLbjNXwSBdrPatZ-CL5Oi-mnyQIop03M3kV-AqWm7ZipNP-c7W9nNynYMzQQl1T7ynoMuLfW8-h1P943-AH_e4-6ltNXNkDF712DzYWh3azlmrDvDygPXCH32NLWLIqy2QasXFkc"
                    />
                    <span className="font-label-md text-label-md text-on-surface dark:text-gray-300">
                      Rahat Ahmed
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  rahat.ahmed@example.com
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm dark:bg-purple-900 dark:text-purple-100">
                    Admin
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="font-label-sm text-label-sm dark:text-gray-400">Active</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap dark:text-gray-300">
                  Oct 12, 2023
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="View Profile"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="trash"
                      >
                        delete
                      </span>
                    </button>
                    <button
                      className="p-2 text-error hover:bg-error-container rounded-lg transition-colors dark:text-red-400"
                      title="Suspend"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="block"
                      >
                        block
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* <!-- Table Row 2 (Zebra) --> */}
              <tr className="bg-[#EDE8F5] hover:bg-surface-container-low transition-colors group dark:bg-gray-800">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-sm dark:bg-teal-900 dark:text-teal-100">
                      KB
                    </div>
                    <span className="font-label-md text-label-md text-on-surface dark:text-gray-300">
                      Karim Baksh
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  k.baksh@artisan.gi
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-sm text-label-sm dark:text-gray-400">
                    Artisan
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="font-label-sm text-label-sm dark:text-gray-400">Active</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  Jan 04, 2024
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="View Profile"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="Edit"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 text-error hover:bg-error-container rounded-lg transition-colors dark:text-red-400"
                      title="Suspend"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="block"
                      >
                        block
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* <!-- Table Row 3 --> */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <div className="w-8 h-8 rounded-full bg-outline-variant text-on-surface-variant flex items-center justify-center font-label-sm dark:text-gray-300">
                      SM
                    </div>
                    <span className="font-label-md text-label-md text-on-surface dark:text-gray-300">
                      Sumaiya Maliha
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  sumaiya.m@outlook.com
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm dark:bg-gray-800 dark:text-gray-300">
                    User
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-error dark:text-red-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                    <span className="font-label-sm text-label-sm dark:text-gray-400">
                      Suspended
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  Nov 28, 2023
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="View Profile"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="Edit"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 text-secondary hover:bg-secondary-fixed rounded-lg transition-colors dark:text-purple-400"
                      title="Activate"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* <!-- Table Row 4 (Zebra) --> */}
              <tr className="bg-[#EDE8F5] hover:bg-surface-container-low transition-colors group dark:bg-gray-800">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <Image
                      width={100}
                      height={100}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border border-outline-variant dark:border-gray-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN7SwU70seLYrkPafACtV4OOKPycey-aFJLYcL3akPxG8vxe1yOjHBqZ5XHBs6iB1_9FCSlYrDi9wkfA9iBlvN1hZS8UqNqMiVWYFZKkNHmJhHeCKDoVRQe0sjUzaGfpXu5leKLbjNXwSBdrPatZ-CL5Oi-mnyQIop03M3kV-AqWm7ZipNP-c7W9nNynYMzQQl1T7ynoMuLfW8-h1P943-AH_e4-6ltNXNkDF712DzYWh3azlmrDvDygPXCH32NLWLIqy2QasXFkc"
                    />
                    <span className="font-label-md text-label-md text-on-surface dark:text-gray-300">
                      Tamim Iqbal
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  tamim.88@gmail.com
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm dark:bg-gray-800 dark:text-gray-300">
                    User
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="font-label-sm text-label-sm dark:text-gray-400">Active</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  Feb 15, 2024
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="View Profile"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="Edit"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 text-error hover:bg-error-container rounded-lg transition-colors dark:text-red-400"
                      title="Suspend"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="block"
                      >
                        block
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* <!-- Table Row 5 --> */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm dark:bg-purple-900 dark:text-purple-100">
                      ZN
                    </div>
                    <span className="font-label-md text-label-md text-on-surface dark:text-gray-300">
                      Zubair Nazim
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  zubair.n@corp.gi
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-sm text-label-sm dark:text-gray-400">
                    Artisan
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="font-label-sm text-label-sm dark:text-gray-400">Active</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
                  Dec 01, 2023
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="View Profile"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors dark:text-blue-400"
                      title="Edit"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 text-error hover:bg-error-container rounded-lg transition-colors dark:text-red-400"
                      title="Suspend"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        data-icon="block"
                      >
                        block
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/* pagination */}
          <div className="bg-white border-t border-outline-variant px-lg py-md flex md:flex-row flex-col space-y-3 items-center justify-between dark:bg-[#14161c] dark:border-gray-700">
            <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300">
              Showing 1-5 of 1,284 users
            </span>
            <div className="flex gap-xs">
              <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50 dark:border-gray-700 dark:text-gray-300">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="chevron_left"
                >
                  chevron_left
                </span>
              </button>
              <button className="px-4 py-1 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm dark:text-gray-400">
                1
              </button>
              <button className="px-4 py-1 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm dark:border-gray-700 dark:text-gray-300">
                2
              </button>
              <button className="px-4 py-1 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm dark:border-gray-700 dark:text-gray-300">
                3
              </button>
              <span className="px-2 py-1 text-on-surface-variant dark:text-gray-300">...</span>
              <button className="px-4 py-1 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm dark:border-gray-700 dark:text-gray-300">
                128
              </button>
              <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low dark:border-gray-700 dark:text-gray-300">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="chevron_right"
                >
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}