"use client";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useState } from "react";

export default function Settings() {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);

    return (
        <main className="lg:ml-64 grow p-xl">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-end mb-xl">
                    <div>
                        <h1 className="font-h1 md:text-h2 text-[20px] text-on-surface dark:text-inverse-on-surface">Account Settings</h1>
                    </div>
                    <button className="bg-primary dark:bg-primary-fixed text-on-primary dark:text-on-primary-fixed px-lg py-sm rounded-lg font-label-md text-sm hover:opacity-90 transition-all shadow-sm cursor-pointer">
                        Save Changes
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
                    {/* <!-- Profile Picture Section --> */}
                    <div className="lg:col-span-4 space-y-lg">
                        <div className="bg-white dark:bg-on-surface-variant/10 p-xl rounded-xl border border-outline-variant dark:border-on-surface-variant/50 flex flex-col items-center">
                            <div className="relative group cursor-pointer">
                                <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-surface-container dark:border-on-surface-variant/20 shadow-inner">
                                    <img
                                        alt="User Profile"
                                        className="h-full w-full object-cover transition-opacity group-hover:opacity-70"
                                        src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
                                </div>
                            </div>
                            <h3 className="font-h3 text-h3 mt-lg dark:text-inverse-on-surface">Rahima Akter</h3>
                            <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant">GI Enthusiast & Storyteller</p>
                            <button className="mt-lg text-primary dark:text-primary-fixed-dim font-label-md hover:underline cursor-pointer">Change Avatar</button>
                        </div>
                    </div>

                    {/* <!-- Settings Form --> */}
                    <div className="lg:col-span-8 space-y-xl">
                        {/* <!-- Personal Info --> */}
                        <div className="bg-white dark:bg-on-surface-variant/10 p-xl rounded-xl border border-outline-variant dark:border-on-surface-variant/50 space-y-xl">
                            <h2 className="font-h3 text-h3 text-primary dark:text-primary-fixed-dim">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                                <div className="space-y-xs">
                                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Full Name</label>
                                    <input
                                        className="w-full px-md py-sm bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-inverse-on-surface"
                                        type="text"
                                        defaultValue="Rahima Akter"
                                    />
                                </div>
                                <div className="space-y-xs">
                                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Email Address</label>
                                    <input
                                        className="w-full px-md py-sm bg-surface-container dark:bg-on-surface-variant/20 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg outline-none text-on-surface-variant dark:text-outline-variant cursor-not-allowed"
                                        type="email"
                                        defaultValue="rahima.akter@example.com"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="space-y-xs">
                                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Short Bio</label>
                                <textarea
                                    className="w-full px-md py-sm bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-inverse-on-surface resize-none"
                                    rows={4}
                                    defaultValue="Exploring the rich heritage of Bangladesh through its GI products. Passionate about Jamdani weaving and Rajshahi Silk."
                                ></textarea>
                            </div>
                        </div>

                        {/* <!-- Security --> */}
                        <div className="bg-white dark:bg-on-surface-variant/10 p-xl rounded-xl border border-outline-variant dark:border-on-surface-variant/50 space-y-xl">
                            <h2 className="font-h3 text-h3 text-primary dark:text-primary-fixed-dim">Security</h2>
                            <div className="space-y-lg">
                                <div className="space-y-xs">
                                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Current Password</label>
                                    <div className="relative">
                                        <input
                                            className="w-full px-md py-sm bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-inverse-on-surface"
                                            type={showCurrent ? "text" : "password"}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            onClick={() => setShowCurrent(!showCurrent)}
                                            className="absolute right-md top-1/2 -translate-y-1/2 text-outline dark:text-on-surface-variant/50 cursor-pointer focus:outline-none"
                                        >
                                            {showCurrent ? <IconEyeClosed size={20} /> : <IconEye size={20} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-xs">
                                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">New Password</label>
                                    <div className="relative">
                                        <input
                                            className="w-full px-md py-sm bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-inverse-on-surface"
                                            type={showNew ? "text" : "password"}
                                            placeholder="Leave blank to keep current"
                                        />
                                        <button
                                            onClick={() => setShowNew(!showNew)}
                                            className="absolute right-md top-1/2 -translate-y-1/2 text-outline dark:text-on-surface-variant/50 cursor-pointer focus:outline-none"
                                        >
                                            {showNew ? <IconEyeClosed size={20} /> : <IconEye size={20} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-md bg-surface-container dark:bg-on-surface-variant/10 rounded-lg border border-outline-variant dark:border-on-surface-variant/30">
                                    <div>
                                        <div className="font-label-md text-label-md dark:text-inverse-on-surface">Two-Factor Authentication</div>
                                        <div className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">Add an extra layer of security to your account</div>
                                    </div>
                                    <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full transition-all"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Danger Zone --> */}
                        <div className="bg-white dark:bg-on-surface-variant/10 p-xl rounded-xl border border-error/20 space-y-md">
                            <h2 className="font-h3 text-h3 text-error">Danger Zone</h2>
                            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">Permanently delete your account and all associated data. This action cannot be undone.</p>
                            <button className="px-lg py-sm border border-error text-error rounded-lg font-label-md text-label-md hover:bg-error/10 transition-all cursor-pointer">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}