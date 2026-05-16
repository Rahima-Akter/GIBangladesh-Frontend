"use client";

import { IconMoon, IconSun, IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

// ─── Hardcoded auth state (swap with real auth later) ───────────────────────
const MOCK_USER = {
  isLoggedIn: true,
  role: 'admin' as 'user' | 'admin' | 'super-admin', // change to test roles
  name: 'Rahim Uddin',
  avatar: null as string | null,
};
// ────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/gi-products', label: 'GI Products' },
  { href: '/blogs', label: 'Blogs' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const user = MOCK_USER;
  const isLoggedIn = user.isLoggedIn;
  const isAdmin = user.role === 'admin' || user.role === 'super-admin';

  // ── Theme toggle ────────────────────────────────────────────────────────
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
  };

  // ── Close dropdown on outside click ────────────────────────────────────
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── Close mobile menu on route change ──────────────────────────────────
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // ── Prevent body scroll when mobile menu open ───────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const handleLogout = () => {
    setDropdownOpen(false);
    // Replace with real logout logic
    console.log('Logging out…');
  };

  const getInitials = (name: string) =>
    name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  // ── Shared nav link class builder ───────────────────────────────────────
  const navLinkClass = (href: string, mobile = false) => {
    const active = isActive(href);
    const base = mobile
      ? 'flex justify-between items-center w-full px-md py-sm rounded-xl font-body-md text-body-md transition-all duration-200'
      : 'relative font-body-md text-body-md transition-colors duration-200 group';
    const activeStyle = mobile
      ? 'bg-primary/10 text-primary dark:bg-primary-fixed-dim/10 dark:text-primary-fixed-dim font-semibold'
      : 'text-primary dark:text-primary-fixed-dim font-semibold';
    const inactiveStyle = mobile
      ? 'text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant/10 hover:text-primary dark:hover:text-primary-fixed-dim'
      : 'text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim';
    return `${base} ${active ? activeStyle : inactiveStyle}`;
  };

  return (
    <>
      {/* ── Top bar ───────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md border-b border-outline-variant/50 dark:border-outline/30 shadow-sm">
        <nav className="flex items-center justify-between h-[64px] px-md md:px-lg w-full max-w-7xl mx-auto gap-md">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-xs flex-shrink-0 group"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed font-bold text-label-sm tracking-wider select-none transition-transform duration-200 group-hover:scale-105">
              GI
            </span>
            <span className="font-h3 text-h3 font-bold text-primary dark:text-primary-fixed-dim leading-none tracking-tight">
              Bangladesh
            </span>
          </Link>

          {/* ── Desktop nav links ─────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-lg">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={navLinkClass(href)}>
                {label}
                {/* Active underline indicator */}
                <span
                  className={`absolute -bottom-[3px] left-0 w-full h-[2px] rounded-full bg-primary dark:bg-primary-fixed-dim transition-all duration-200 ${isActive(href) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* ── Right-side controls ───────────────────────────────────────── */}
          <div className="flex items-center gap-xs sm:gap-sm">

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle Theme"
              className="p-xs rounded-xl text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant/20 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
            </button>

            {/* Language toggle — hidden on xs */}
            <button className="hidden sm:flex items-center gap-xs px-sm py-xs text-label-md font-label-md text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant/20 rounded-xl transition-all duration-200">
              <span className="material-symbols-outlined text-[18px] leading-none">translate</span>
              <span className="text-label-sm">EN</span>
            </button>

            {/* ── Account dropdown ─────────────────────────────────────── */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(prev => !prev)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                className={`flex items-center gap-xs px-xs py-xs rounded-full border transition-all duration-200 ${dropdownOpen
                  ? 'border-primary dark:border-primary-fixed-dim bg-surface-container dark:bg-on-surface-variant/20'
                  : 'border-outline-variant dark:border-outline hover:bg-surface-container dark:hover:bg-on-surface-variant/20'
                  }`}
              >
                {isLoggedIn ? (
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed text-label-sm font-bold select-none">
                    {getInitials(user.name)}
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-[22px] text-on-surface-variant dark:text-outline-variant leading-none">
                    account_circle
                  </span>
                )}
                <span
                  className={`material-symbols-outlined text-[18px] text-on-surface-variant dark:text-outline-variant leading-none transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''
                    }`}
                >
                  expand_more
                </span>
              </button>

              {/* Dropdown panel */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-sm w-52 bg-surface dark:bg-inverse-surface border border-outline-variant/60 dark:border-outline/40 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  {isLoggedIn ? (
                    <>
                      {/* User info header */}
                      <div className="px-md pt-md pb-sm border-b border-outline-variant/40 dark:border-outline/30">
                        <p className="text-label-md font-semibold text-on-surface dark:text-inverse-on-surface truncate">{user.name}</p>
                        <p className="text-label-sm text-on-surface-variant dark:text-outline-variant capitalize mt-[2px]">{user.role.replace('-', ' ')}</p>
                      </div>

                      <div className="p-sm flex flex-col gap-xs">
                        {/* Role-based primary action */}
                        <Link
                          href={isAdmin ? '/dashboard/admin/overview' : '/profile'}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-sm px-sm py-sm rounded-lg text-label-md text-primary dark:text-primary-fixed-dim hover:bg-surface-container dark:hover:bg-on-surface-variant/20 transition-all duration-150"
                        >
                          <span className="material-symbols-outlined text-[18px] leading-none">
                            {isAdmin ? 'dashboard' : 'person'}
                          </span>
                          {isAdmin ? 'Dashboard' : 'My Profile'}
                        </Link>

                        {/* Divider */}
                        <div className="h-px bg-outline-variant/40 dark:bg-outline/30 mx-sm" />

                        {/* Logout */}
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-sm px-sm py-sm rounded-lg text-label-md text-error hover:bg-error-container/40 dark:hover:bg-error/10 transition-all duration-150 w-full text-left"
                        >
                          <span className="material-symbols-outlined text-[18px] leading-none">logout</span>
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="p-md flex flex-col gap-sm">
                      <Link
                        href="/login"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center justify-center gap-xs w-full text-label-md font-label-md text-primary dark:text-primary-fixed-dim border border-primary/40 dark:border-primary-fixed-dim/40 hover:bg-primary/5 dark:hover:bg-primary-fixed-dim/10 px-md py-sm rounded-xl transition-all duration-150"
                      >
                        <span className="material-symbols-outlined text-[16px] leading-none">login</span>
                        Login
                      </Link>
                      <Link
                        href="/register"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center justify-center gap-xs w-full text-center bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed px-md py-sm rounded-xl font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-all duration-150"
                      >
                        <span className="material-symbols-outlined text-[16px] leading-none">person_add</span>
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ── Mobile hamburger ─────────────────────────────────────── */}
            <button
              className="flex md:hidden items-center justify-center p-xs rounded-xl text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant/20 transition-all duration-200 cursor-pointer"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu overlay ───────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile menu drawer ────────────────────────────────────────────── */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-[64px] left-0 right-0 z-40 md:hidden bg-surface dark:bg-inverse-surface border-b border-outline-variant/50 dark:border-outline/30 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col p-md gap-xs max-h-[calc(80vh-64px)] overflow-y-auto">

          {/* Nav links */}
          <div className="flex flex-col gap-xs pb-sm border-b border-outline-variant/40 dark:border-outline/30">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={navLinkClass(href, true)}>
                {label}
                {isActive(href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-fixed-dim mr-xs flex-shrink-0" />
                )}
              </Link>
            ))}
          </div>

          {/* Language toggle */}
          <div className="border-t border-outline-variant/40 dark:border-outline/30 pt-sm mt-xs">
            <button className="flex items-center gap-sm w-full px-md py-sm rounded-xl text-label-md text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-on-surface-variant/10 transition-all duration-150">
              <span className="material-symbols-outlined text-[18px] leading-none">translate</span>
              Language: EN / BN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}