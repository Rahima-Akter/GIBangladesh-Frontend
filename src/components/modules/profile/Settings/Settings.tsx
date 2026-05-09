"use client";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useState } from "react"

export default function Settings() {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);


    return <main className="lg:ml-64 flex-grow p-xl">
        <div className="max-w-4xl mx-auto">
            <h1 className="font-h1 text-h3 text-on-background dark:text-white mb-sm">Edit Profile</h1>

            <div className="grid grid-cols-12 gap-lg">
                {/* <!-- Profile Picture Upload Card --> */}
                <div className="col-span-12 md:col-span-4">
                    {/* Profile Image Section */}
                    <div className="bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant rounded-xl p-lg flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-md group">
                            <img
                                alt="Profile Avatar"
                                className="w-full h-full rounded-full object-cover border-4 border-surface dark:border-on-surface shadow-sm"
                                src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA"
                            />
                            <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-xs rounded-full border-2 border-surface dark:border-on-surface shadow-md">
                                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                            </button>
                        </div>
                        <h3 className="font-h3 text-body-lg font-bold mb-xs">Profile Image</h3>
                        <p className="font-body-sm text-on-surface-variant mb-md">JPG, GIF, or PNG. Maximum size 800 KB</p>
                        <button className="w-full border border-primary text-primary px-md py-sm rounded-lg font-label-md hover:bg-primary/5 transition-all">Upload New</button>
                    </div>

                    {/* Delete Account Section */}
                    <div className="bg-surface-container dark:bg-on-surface border border-outline-variant rounded-xl p-md mt-5 flex items-center gap-md">
                        <button className="bg-error-container hover:bg-error/10 transition-colors cursor-pointer text-on-error-container p-md rounded-xl">
                            <span className="material-symbols-outlined">delete_forever</span>
                            <h4 className="font-h3 text-[12px] font-bold">Delete Account</h4>
                        </button>
                        <div className="grow">
                            <p className="font-body-sm text-on-surface-variant">Permanently delete your profile and all associated data.</p>
                        </div>
                        {/* <button className="text-error font-label-md hover:underline">Manage</button> */}
                    </div>
                </div>
                {/* <!-- Details Form Card --> */}
                <div className="col-span-12 md:col-span-8">
                    <div className="bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant rounded-xl p-lg">
                        <form className="space-y-lg">
                            {/* <!-- Name & Email Grid --> */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                                <div className="flex flex-col gap-xs">
                                    <label className="font-label-md text-on-surface-variant">Full Name</label>
                                    <input className="bg-surface border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md" type="text" value="Arif Rahman" />
                                </div>
                                <div className="flex flex-col gap-xs">
                                    <label className="font-label-md text-on-surface-variant">Email Address</label>
                                    <input className="bg-surface border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md" type="email" value="arif.r@gibangladesh.com" />
                                </div>
                            </div>
                            {/* <!-- Bio --> */}
                            <div className="flex flex-col gap-xs">
                                <label className="font-label-md text-on-surface-variant">Professional Bio</label>
                                <textarea className="bg-surface border border-outline-variant rounded-lg px-md py-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md resize-none" rows={4}>Digital strategist specializing in Bangladesh's Geographical Indication products. Passionate about bringing traditional heritage to the global SaaS ecosystem.</textarea>
                                <p className="text-right font-label-sm text-outline">142/500 characters</p>
                            </div>
                            <div className="h-[1px] bg-outline-variant w-full my-lg"></div>
                            {/* <!-- password --> */}
                            <div className="space-y-md">
                                <h4 className="font-label-md font-bold text-on-surface uppercase tracking-wider">Password Settings</h4>
                                <div className="flex flex-col gap-xs">
                                    <label className="font-label-md text-on-surface-variant">Current Password</label>

                                    <div className="flex items-center bg-surface border border-outline-variant rounded-lg focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary overflow-hidden relative">

                                        <input
                                            className="grow bg-transparent border-none focus:ring-0 px-md py-sm font-body-md"
                                            placeholder="•••••••••••"
                                            type={showCurrent ? 'text' : 'password'}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-5 top-1/2 -translate-y-1/2"
                                            onClick={() => setShowCurrent(!showCurrent)}
                                        >
                                            {showCurrent ? <IconEyeClosed /> : <IconEye />}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-xs">
                                    <label className="font-label-md text-on-surface-variant">New Password</label>
                                    <div className="flex items-center bg-surface border border-outline-variant rounded-lg focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary overflow-hidden relative">
                                        <input
                                            className="flex-grow bg-transparent border-none focus:ring-0 px-md py-sm font-body-md"
                                            placeholder="•••••••••••"
                                            type={showNew ? 'text' : 'password'}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-5 top-1/2 -translate-y-1/2"
                                            onClick={() => setShowNew(!showNew)}
                                        >
                                            {showNew ? <IconEyeClosed /> : <IconEye />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Actions --> */}
                            <div className="flex justify-end items-center gap-md pt-lg">
                                <button className="text-primary font-label-md px-lg py-sm hover:bg-surface-container-high rounded-lg transition-all" type="button">Cancel</button>
                                <button className="bg-primary text-on-primary px-2xl py-sm rounded-lg font-label-md shadow-sm hover:opacity-90 active:scale-95 transition-all" type="submit">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
}