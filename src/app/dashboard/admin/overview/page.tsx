import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  IconArrowUpRight,
  IconPackage,
  IconSparkles,
  IconTrendingUp,
  IconUsersGroup,
} from "@tabler/icons-react";

export default function DashboardPage() {
  return (
    <main className="flex-1 lg:ml-64 p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
        {[
          {
            label: "Total Products",
            value: "12",
            icon: IconPackage,
          },
          {
            label: "Verified GI Tags",
            value: "1,248",
            icon: IconTrendingUp,
          },
          {
            label: "Active Buyers",
            value: "45",
            icon: IconUsersGroup,
          },
          {
            label: "AI AI-Optimized",
            value: "85%",
            icon: IconSparkles,
          },
        ].map((stat, i) => (
          <Card
            key={i}
            className="p-5 flex flex-col justify-between bg-surface dark:bg-inverse-surface border border-outline-variant dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary-fixed-dim/40 transition-all"
          >
            <div className="flex gap-3 items-center mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 dark:bg-primary-fixed-dim/15 flex items-center justify-center text-primary dark:text-primary-fixed">
                <stat.icon className="h-5 w-5" />
              </div>

              <p className="text-2xl font-bold text-on-surface dark:text-inverse-on-surface">
                {stat.value}
              </p>
            </div>

            <div>
              <p className="text-label-md text-on-surface-variant dark:text-outline-variant">
                {stat.label}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Products Table */}
      <Card className="lg:col-span-2 p-0 overflow-hidden dark:border-gray-700">
        <div className="p-4 border-b border-outline-variant dark:border-gray-700 flex items-center justify-between dark:bg-inverse-surface">
          <h3 className="text-lg font-bold">Recent GI Products</h3>
          <Button variant="tertiary" size="sm" className="gap-1">
            View All <IconArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-x-auto dark:bg-on-surface">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container dark:bg-[#14161c] text-label-sm uppercase tracking-wider text-on-surface-variant dark:text-gray-300 dark:border-b dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 font-semibold">Product Name</th>
                <th className="px-6 py-4 font-semibold">GI Status</th>
                <th className="px-6 py-4 font-semibold">Last Updated</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant dark:divide-gray-700">
              {[
                {
                  name: "Jamdani Saree (Dhakai)",
                  status: "Verified",
                  date: "2 hours ago",
                },
                {
                  name: "Khirsapati Mango",
                  status: "Pending",
                  date: "1 day ago",
                },
                {
                  name: "Shetal Pati",
                  status: "Verified",
                  date: "3 days ago",
                },
                {
                  name: "Bogura Doi",
                  status: "Verified",
                  date: "1 week ago",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-950/30 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-surface-container-high" />
                      <span className="text-body-sm font-medium">
                        {row.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold uppercase ${row.status === "Verified"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-body-sm text-on-surface-variant dark:text-gray-300">
                    {row.date}
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="tertiary" size="sm">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </main>
  );
}
