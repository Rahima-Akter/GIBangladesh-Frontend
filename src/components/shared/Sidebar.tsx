"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IconBookmark, IconChevronRight, IconLayoutDashboard, IconLogout, IconMoonStars, IconNotebook, IconRobot, IconSettings, IconShieldCheck, IconSun, IconX } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { icon: IconLayoutDashboard, label: 'Profile', href: '/profile' },
  { icon: IconNotebook, label: 'My Blogs', href: '/profile/my-blogs' },
  { icon: IconBookmark, label: 'Saved', href: '/profile/saved' },
  { icon: IconRobot, label: 'AI Tools', href: '/profile/ai-tools' },
  { icon: IconSettings, label: 'Settings', href: '/profile/settings' },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  let pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
  };
  pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 border-r border-outline-variant dark:border-gray-800 bg-surface-container-low dark:bg-on-surface flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-outline-variant dark:border-gray-800 px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-on-primary font-bold">
              G
            </div>
            <span className="font-semibold text-lg dark:text-inverse-on-surface">GIBangladesh</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-surface-container dark:hover:bg-on-surface-variant/20 text-on-surface-variant"
          >
            <IconX size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 dark:text-gray-300">Main Menu</p>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'group flex items-center justify-between rounded-md px-3 py-2 text-body-sm font-medium transition-all hover:bg-primary/5',
                  isActive ? 'bg-primary/10 text-primary dark:bg-primary-fixed-dim/10 dark:text-primary-fixed-dim' : 'text-on-surface-variant dark:text-outline-variant'
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn('h-5 w-5', isActive ? 'text-primary dark:text-primary-fixed-dim' : 'text-on-surface-variant/70 dark:text-outline-variant/70')} />
                  {item.label}
                </div>
                {isActive && <IconChevronRight className="h-4 w-4" />}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-outline-variant dark:border-gray-800 space-y-4">
          {/* Theme Toggle in Sidebar */}
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-body-sm font-medium text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant/20 transition-all"
          >
            {isDark ? <IconSun className="h-5 w-5" /> : <IconMoonStars className="h-5 w-5" />}
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>


          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-body-sm font-medium text-error hover:bg-error/5 transition-all">
            <IconLogout className="h-5 w-5" />
            Log Out
          </button>
          <div className="rounded-xl bg-surface-container-high dark:bg-on-surface-variant/10 p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 dark:bg-primary-fixed-dim/20 flex items-center justify-center font-bold text-primary dark:text-primary-fixed-dim">
                JS
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-label-md font-bold truncate dark:text-inverse-on-surface">Jamdani S.</p>
                <p className="text-[10px] text-on-surface-variant dark:text-outline-variant truncate">jamdani@gi.com.bd</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
