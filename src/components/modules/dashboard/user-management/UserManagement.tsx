import Image from "next/image";

export default function UserManagement() {
  return (
    <main className="lg:ml-64 flex-1 flex flex-col min-h-screen">
      {/* <!-- Page Content --> */}
      <div className="p-lg flex-1">
        {/* <!-- Dashboard Filters Card --> */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-lg">
          <div className="grid grid-cols-12 gap-md items-center">
            <div className="md:col-span-5 col-span-12 relative">
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
            <div className="md:col-span-2 col-span-4">
              <select className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
                <option value="">All Roles</option>
                <option value="admin">Admin</option>
                <option value="artisan">Artisan</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="md:col-span-2 col-span-4">
              <select className="w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
                <option value="">Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <div className="md:col-span-3 col-span-4">
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
          </div>
        </div>
        {/* <!-- Data Table Card --> */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Name
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Email
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Role
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Status
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Joined Date
                </th>
                <th className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {/* <!-- Table Row 1 --> */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <Image
                      width={100}
                      height={100}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border border-outline-variant"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN7SwU70seLYrkPafACtV4OOKPycey-aFJLYcL3akPxG8vxe1yOjHBqZ5XHBs6iB1_9FCSlYrDi9wkfA9iBlvN1hZS8UqNqMiVWYFZKkNHmJhHeCKDoVRQe0sjUzaGfpXu5leKLbjNXwSBdrPatZ-CL5Oi-mnyQIop03M3kV-AqWm7ZipNP-c7W9nNynYMzQQl1T7ynoMuLfW8-h1P943-AH_e4-6ltNXNkDF712DzYWh3azlmrDvDygPXCH32NLWLIqy2QasXFkc"
                    />
                    <span className="font-label-md text-label-md text-on-surface">
                      Rahat Ahmed
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  rahat.ahmed@example.com
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">
                    Admin
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="font-label-sm text-label-sm">Active</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">
                  Oct 12, 2023
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-error hover:bg-error-container rounded-lg transition-colors"
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
              <tr className="bg-[#EDE8F5] hover:bg-surface-container-low transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-sm">
                      KB
                    </div>
                    <span className="font-label-md text-label-md text-on-surface">
                      Karim Baksh
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  k.baksh@artisan.gi
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-sm text-label-sm">
                    Artisan
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="font-label-sm text-label-sm">Active</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  Jan 04, 2024
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-error hover:bg-error-container rounded-lg transition-colors"
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
                    <div className="w-8 h-8 rounded-full bg-outline-variant text-on-surface-variant flex items-center justify-center font-label-sm">
                      SM
                    </div>
                    <span className="font-label-md text-label-md text-on-surface">
                      Sumaiya Maliha
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  sumaiya.m@outlook.com
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">
                    User
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-error">
                    <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                    <span className="font-label-sm text-label-sm">
                      Suspended
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  Nov 28, 2023
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-secondary hover:bg-secondary-fixed rounded-lg transition-colors"
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
              <tr className="bg-[#EDE8F5] hover:bg-surface-container-low transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <Image
                      width={100}
                      height={100}
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border border-outline-variant"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN7SwU70seLYrkPafACtV4OOKPycey-aFJLYcL3akPxG8vxe1yOjHBqZ5XHBs6iB1_9FCSlYrDi9wkfA9iBlvN1hZS8UqNqMiVWYFZKkNHmJhHeCKDoVRQe0sjUzaGfpXu5leKLbjNXwSBdrPatZ-CL5Oi-mnyQIop03M3kV-AqWm7ZipNP-c7W9nNynYMzQQl1T7ynoMuLfW8-h1P943-AH_e4-6ltNXNkDF712DzYWh3azlmrDvDygPXCH32NLWLIqy2QasXFkc"
                    />
                    <span className="font-label-md text-label-md text-on-surface">
                      Tamim Iqbal
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  tamim.88@gmail.com
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-surface-variant text-on-surface-variant rounded-full font-label-sm text-label-sm">
                    User
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="font-label-sm text-label-sm">Active</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  Feb 15, 2024
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-error hover:bg-error-container rounded-lg transition-colors"
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
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm">
                      ZN
                    </div>
                    <span className="font-label-md text-label-md text-on-surface">
                      Zubair Nazim
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  zubair.n@corp.gi
                </td>
                <td className="px-lg py-md">
                  <span className="px-sm py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-sm text-label-sm">
                    Artisan
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs text-green-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span className="font-label-sm text-label-sm">Active</span>
                  </div>
                </td>
                <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                  Dec 01, 2023
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors"
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
                      className="p-2 text-error hover:bg-error-container rounded-lg transition-colors"
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
          <div className="bg-white border-t border-outline-variant px-lg py-md flex md:flex-row flex-col space-y-3 items-center justify-between">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Showing 1-5 of 1,284 users
            </span>
            <div className="flex gap-xs">
              <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="chevron_left"
                >
                  chevron_left
                </span>
              </button>
              <button className="px-4 py-1 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm">
                1
              </button>
              <button className="px-4 py-1 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm">
                2
              </button>
              <button className="px-4 py-1 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm">
                3
              </button>
              <span className="px-2 py-1 text-on-surface-variant">...</span>
              <button className="px-4 py-1 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm">
                128
              </button>
              <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container-low">
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
