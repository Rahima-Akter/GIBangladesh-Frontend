import Sidebar from "@/components/shared/Sidebar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { IconArrowUpRight, IconBell, IconPackage, IconSearch, IconSparkles, IconTrendingUp, IconUsersGroup } from "@tabler/icons-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-on-surface">Producer Dashboard</h1>
            <p className="text-on-surface-variant text-body-sm">Welcome back, here's what's happening today.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant/50" />
              <Input placeholder="Search records..." className="pl-10" />
            </div>
            <Button variant="secondary" size="sm" className="relative p-2 h-10 w-10">
              <IconBell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-error border-2 border-surface" />
            </Button>
            <Button className="gap-2">
              <IconPackage className="h-4 w-4" /> Add Product
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Products', value: '12', icon: IconPackage, trend: '+2 this month' },
            { label: 'Verified GI Tags', value: '1,248', icon: IconTrendingUp, trend: '+15% growth' },
            { label: 'Active Buyers', value: '45', icon: IconUsersGroup, trend: '+4 new today' },
            { label: 'AI AI-Optimized', value: '85%', icon: IconSparkles, trend: 'Optimal' },
          ].map((stat, i) => (
            <Card key={i} className="p-5 flex flex-col justify-between group hover:border-primary/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">
                  {stat.trend}
                </span>
              </div>
              <div>
                <p className="text-on-surface-variant text-label-md mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Products Table */}
          <Card className="lg:col-span-2 p-0 overflow-hidden">
            <div className="p-6 border-b border-outline-variant flex items-center justify-between">
              <h3 className="text-lg font-bold">Recent GI Products</h3>
              <Button variant="tertiary" size="sm" className="gap-1">View All <IconArrowUpRight className="h-4 w-4" /></Button>
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
                    { name: 'Jamdani Saree (Dhakai)', status: 'Verified', date: '2 hours ago' },
                    { name: 'Khirsapati Mango', status: 'Pending', date: '1 day ago' },
                    { name: 'Shetal Pati', status: 'Verified', date: '3 days ago' },
                    { name: 'Bogura Doi', status: 'Verified', date: '1 week ago' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded bg-surface-container-high" />
                          <span className="text-body-sm font-medium">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold uppercase ${row.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-body-sm text-on-surface-variant">
                        {row.date}
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="tertiary" size="sm">Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* AI Tools & Insights */}
          <div className="space-y-6">
            <Card className="bg-primary text-on-primary border-none">
              <div className="flex items-start justify-between mb-6">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <IconSparkles className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2 py-1 rounded">New Insight</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-on-primary">Market Demand Alert</h4>
              <p className="text-white/80 text-body-sm mb-6 leading-relaxed">
                Demand for "Shetal Pati" in European markets has increased by 18% this quarter. AI suggests optimizing your catalog for international shipping.
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary border-none hover:bg-white/90">
                Generate Strategy
              </Button>
            </Card>

            <Card className="p-6">
              <h4 className="text-label-md font-bold uppercase tracking-widest text-on-surface-variant mb-4">Upcoming Tasks</h4>
              <div className="space-y-4">
                {[
                  { task: 'Renew GI Tag License', due: 'In 3 days', priority: 'High' },
                  { task: 'Update Pricing for Jamdani', due: 'Next week', priority: 'Low' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    {/* <div className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      item.priority === 'High' ? 'bg-error' : 'bg-primary'
                    )} /> */}
                    <div className="flex-1">
                      <p className="text-body-sm font-medium">{item.task}</p>
                      <p className="text-[10px] text-on-surface-variant">{item.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
