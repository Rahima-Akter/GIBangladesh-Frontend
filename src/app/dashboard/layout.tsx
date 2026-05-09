"use client";

import Sidebar from "@/components/shared/Sidebar";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-surface dark:bg-on-surface">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Mobile/Tablet Header */}
            <div className="lg:hidden flex items-center justify-between h-16 px-6 border-b border-outline-variant bg-surface-container-low dark:bg-on-surface sticky top-0 z-30">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 rounded-lg hover:bg-surface-container dark:hover:bg-on-surface-variant/20 text-on-surface-variant dark:text-outline-variant"
                    >
                        <IconMenu2 size={24} />
                    </button>
                    <span className="font-bold text-primary dark:text-primary-fixed-dim">Dashboard</span>
                </div>
            </div>

            <main className="transition-all duration-300">
                <div className="">
                    {children}
                </div>
            </main>
        </div>
    );
}