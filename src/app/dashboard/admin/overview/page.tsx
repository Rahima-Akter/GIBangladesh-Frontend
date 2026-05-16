import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  IconArrowUpRight,
  IconBell,
  IconPackage,
  IconSearch,
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
            trend: "+2 this month",
          },
          {
            label: "Verified GI Tags",
            value: "1,248",
            icon: IconTrendingUp,
            trend: "+15% growth",
          },
          {
            label: "Active Buyers",
            value: "45",
            icon: IconUsersGroup,
            trend: "+4 new today",
          },
          {
            label: "AI AI-Optimized",
            value: "85%",
            icon: IconSparkles,
            trend: "Optimal",
          },
        ].map((stat, i) => (
          <Card
            key={i}
            className="p-5 flex flex-col justify-between group hover:border-primary/30 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-on-surface-variant text-label-md mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}

      {/* Recent Products Table */}
      <Card className="lg:col-span-2 p-0 overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent GI Products</h3>
          <Button variant="tertiary" size="sm" className="gap-1">
            View All <IconArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container text-label-sm uppercase tracking-wider text-on-surface-variant">
              <tr>
                <th className="px-6 py-3 font-semibold">Product Name</th>
                <th className="px-6 py-3 font-semibold">GI Status</th>
                <th className="px-6 py-3 font-semibold">Last Updated</th>
                <th className="px-6 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
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
                  className="hover:bg-primary/5 transition-colors group"
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
                      className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold uppercase ${
                        row.status === "Verified"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-body-sm text-on-surface-variant">
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
