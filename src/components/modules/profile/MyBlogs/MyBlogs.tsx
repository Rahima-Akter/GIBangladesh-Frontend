import Link from "next/link";

export default function MyBlogs() {
    return (
        <main className="flex-1 lg:ml-64 p-lg">
            <div className="max-w-6xl mx-auto">
                {/* <!-- Header Actions --> */}
                <div className="flex flex-row justify-between items-start md:items-center gap-md mb-2xl">
                    <div>
                        <h1 className="font-h1 md:text-h2 text-[20px] text-on-surface dark:text-inverse-on-surface">My authored blogs</h1>
                    </div>
                    <Link href="/profile/create-blog"
                        className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-md text-sm flex items-center gap-sm hover:opacity-90 transition-all shadow-sm whitespace-nowrap cursor-pointer">
                        <span className="material-symbols-outlined">add_circle</span>
                        Create New Blog
                    </Link>
                </div>
                {/* <!-- Stats Overview (Asymmetric Layout) --> */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-lg mb-2xl">
                    <div className="md:col-span-8 bg-surface dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/50 rounded-xl p-lg flex items-center gap-xl">
                        <div className="h-24 w-24 rounded-full overflow-hidden shrink-0 bg-surface-container dark:bg-on-surface-variant/10">
                            <img alt="Author Workspace" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA" />
                        </div>
                        <div>
                            <h3 className="font-h3 text-h3 text-primary dark:text-primary-fixed-dim mb-xs">Your reach is growing!</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant mb-md">Your articles about Jamdani Saree and Rajshahi Silk have gained 15% more traction this week.</p>
                            <div className="flex md:flex-row flex-col gap-md">
                                <div className="md:px-md px-sm py-xs bg-secondary-container dark:bg-secondary-fixed-dim/20 text-on-secondary-container dark:text-secondary-fixed-dim rounded-full font-label-sm text-label-sm whitespace-nowrap text-center">Top Author</div>
                                <div className="md:px-md px-sm py-xs bg-tertiary-fixed dark:bg-tertiary-fixed-dim/20 text-on-tertiary-fixed dark:text-tertiary-fixed-dim rounded-full font-label-sm text-label-sm whitespace-nowrap text-center">12 Active Drafts</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 bg-primary-container dark:bg-[#7f8397] text-on-primary-container dark:text-on-primary-fixed rounded-xl p-lg flex flex-col justify-between">
                        <span className="material-symbols-outlined text-3xl dark:text-white">trending_up</span>
                        <div>
                            <div className="text-h2 font-h2 dark:text-gray-200">24.5k</div>
                            <div className="font-label-md text-label-md opacity-80 dark:text-white">Total Post Views</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Filters & Search --> */}
                <div className="flex flex-wrap items-center justify-between gap-md mb-lg">
                    <div className="flex gap-sm">
                        <button className="px-md py-sm bg-surface-container-high dark:bg-on-surface-variant/20 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md dark:text-inverse-on-surface cursor-pointer hover:font-extrabold transition-all duration-500">All Posts</button>
                        <button className="px-md py-sm bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant dark:text-outline-variant cursor-pointer hover:font-extrabold transition-all duration-500">Published</button>
                        <button className="px-md py-sm bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant dark:text-outline-variant cursor-pointer hover:font-extrabold transition-all duration-500">Drafts</button>
                    </div>
                    <div className="relative min-w-[300px]">
                        <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline dark:text-gray-300">search</span>
                        <input className="w-full bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/50 rounded-lg pl-[44px] pr-md py-sm font-body-sm text-body-sm focus:ring-2 focus:ring-primary/20 outline-none dark:text-inverse-on-surface" placeholder="Search your blogs..." type="text" />
                    </div>
                </div>
                {/* <!-- Bento Grid / List View --> */}
                <div className="space-y-md">
                    {/* <!-- Blog Item 1 --> */}
                    <Link href="#" className="bg-surface dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/50 rounded-xl p-md flex flex-col md:flex-row items-center gap-lg hover:border-primary dark:hover:border-on-surface-variant transition-colors group cursor-pointer">
                        <div className="w-full md:w-32 h-24 bg-surface-container-high dark:bg-on-surface-variant/20 rounded-lg overflow-hidden shrink-0">
                            <div className="w-full h-full bg-surface-variant flex items-center justify-center" data-alt="A macro photograph of intricate Jamdani weaving patterns on fine fabric. The lighting is soft and directional, highlighting the golden threads against a deep navy background. The style is professional and elegant, maintaining a clean light-mode aesthetic with high contrast." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtbF7Z5GHkGyKUiQ3IzwZKDCZ0Xz6HiGVySa9ml_O02zUxys9EIWbqA3XLLCNZpUvKPU6VUlFFZQ0bTXefWs633PQBfycoa81drLCbPaBv1MrehKx4RdBjkU8VxOtdGwP6uFjENeDLv47vdpZ2mqHCweqa2V6ZwAI0qfP1jiikFxQ0nJiPaFIGqheBFP_qEPDcq5KOARsAgNEQej8A0otrrgk918Zyis90nS4TPNuVi1dsT5lKX5A004hicFU4bxd3-UBoLlXwGnw')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-sm mb-xs">
                                <span className="px-xs py-[2px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-label-sm text-[10px] uppercase tracking-tighter">Published</span>
                                <span className="text-outline dark:text-gray-400 font-body-sm text-body-sm">Oct 12, 2024</span>
                            </div>
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">Preserving the Art of Jamdani: A National Heritage</h4>
                            <div className="flex items-center gap-md mt-sm text-outline dark:text-on-surface-variant/50 font-body-sm text-body-sm">
                                <span className="flex items-center gap-xs dark:text-gray-400"><span className="material-symbols-outlined text-[18px]">visibility</span> 1.2k views</span>
                                <span className="flex items-center gap-xs dark:text-gray-400"><span className="material-symbols-outlined text-[18px]">chat_bubble</span> 24 comments</span>
                            </div>
                        </div>
                        <div className="flex gap-sm w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-md py-sm border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md text-primary dark:text-primary-fixed-dim flex items-center justify-center gap-sm hover:bg-surface-container-low dark:hover:bg-on-surface-variant/10 transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-[18px]">edit</span> Edit
                            </button>
                            <button className="flex-1 md:flex-none px-md py-sm border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant dark:text-outline-variant flex items-center justify-center gap-sm hover:bg-surface-container-low dark:hover:bg-on-surface-variant/10 transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-[18px]">open_in_new</span> View
                            </button>
                            <button className="p-sm text-error hover:bg-error/10 rounded-lg transition-all cursor-pointer">
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        </div>
                    </Link>
                    {/* <!-- Blog Item 2 --> */}
                    <div className="bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-xl p-md flex flex-col md:flex-row items-center gap-lg hover:border-primary dark:hover:border-primary-fixed-dim transition-colors group">
                        <div className="w-full md:w-32 h-24 bg-surface-container-high dark:bg-on-surface-variant/20 rounded-lg overflow-hidden shrink-0">
                            <div className="w-full h-full bg-surface-variant flex items-center justify-center" data-alt="Golden jars of pure honey set against a soft blurred background of a sunlit forest. The glass reflects sparkling warm light, conveying a sense of organic purity and natural luxury. The color palette is rich with ambers and earthy tones, grounded by the clean UI structure." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgk6m8q4RGml4-wSWlU5as-KEnY4r4F5AsincrHPoif21eVg3Q4TvUlNROYGD6viYBpZb0j3Mz6tj-6Srtl8dOgFT6LaGXlV5JKZ7CguDEPnxZuMCNWXamBz8S6znSxJHuGKhHMtbxarGRN21tXF2Vseg2xU1kAL89fhNTnhpxEdasKMChJUd2yhjIoBsmwV_kl8F0K_G_t3A-xqwSjTCO7XQCTrfbi01tIMwPvUlfxmn2pqKO8q4ueKU07Rp2YZS51sgmg1Ox1Wk')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-sm mb-xs">
                                <span className="px-xs py-[2px] bg-surface-container-highest dark:bg-on-surface-variant/20 text-on-surface-variant dark:text-outline-variant rounded font-label-sm text-[10px] uppercase tracking-tighter">Draft</span>
                                <span className="text-outline dark:text-on-surface-variant/50 font-body-sm text-body-sm">Last edited 2 hours ago</span>
                            </div>
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">Sundarbans Honey: The Liquid Gold of the Delta</h4>
                            <div className="flex items-center gap-md mt-sm text-outline dark:text-on-surface-variant/50 font-body-sm text-body-sm">
                                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">visibility</span> 0 views</span>
                                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">chat_bubble</span> 0 comments</span>
                            </div>
                        </div>
                        <div className="flex gap-sm w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-md py-sm bg-primary dark:bg-primary-fixed text-on-primary dark:text-on-primary-fixed rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm hover:opacity-90 transition-all shadow-sm cursor-pointer">
                                <span className="material-symbols-outlined text-[18px]">edit</span> Continue Editing
                            </button>
                            <button className="p-sm text-error hover:bg-error/10 rounded-lg transition-all cursor-pointer">
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        </div>
                    </div>
                    {/* Blog Item 3 */}
                    <div className="bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-xl p-md flex flex-col md:flex-row items-center gap-lg hover:border-primary dark:hover:border-primary-fixed-dim transition-colors group">
                        <div className="w-full md:w-32 h-24 bg-surface-container-high dark:bg-on-surface-variant/20 rounded-lg overflow-hidden shrink-0">
                            <div className="w-full h-full bg-surface-variant flex items-center justify-center" data-alt="Lush green tea gardens of Sylhet spanning across rolling hills under a bright clear sky. The landscape is vibrant and serene, captured with a wide-angle lens to show depth. The aesthetic is clean and refreshing, mirroring the high-quality professional design of the GIBangladesh platform." style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWGRh-d9dSQr6eXJzljfV7htAPFXA1C-xKa7QSbZVQv1LdZOl1sNo-JSDS-rUEDVB0jicKTGw06s1vkggBgLPWFpOXVMnRHXAO49I7a2Kgeunj3yG7k5uHZT9ckMRM6eL1b_XrPHzqalYU--GLK4nA3B8z35dftmlAmTN893GZbsTu9oqAJUD2e351sz9vDB-6Gm3tZhtz4KolMmg07gORjHdVmkk8-FxfxmmqxzkcZhFJLX3OpfrBMIEOl9Qt32bKWojtTiXAHDA')",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-sm mb-xs">
                                <span className="px-xs py-[2px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-label-sm text-[10px] uppercase tracking-tighter">Published</span>
                                <span className="text-outline dark:text-on-surface-variant/50 font-body-sm text-body-sm">Sep 28, 2024</span>
                            </div>
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">The Unique Aroma of Sylhet Tea: A GI Journey</h4>
                            <div className="flex items-center gap-md mt-sm text-outline dark:text-on-surface-variant/50 font-body-sm text-body-sm">
                                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">visibility</span> 3.4k views</span>
                                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">chat_bubble</span> 56 comments</span>
                            </div>
                        </div>
                        <div className="flex gap-sm w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-md py-sm border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md text-primary dark:text-primary-fixed-dim flex items-center justify-center gap-sm hover:bg-surface-container-low dark:hover:bg-on-surface-variant/10 transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-[18px]">edit</span> Edit
                            </button>
                            <button className="flex-1 md:flex-none px-md py-sm border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant dark:text-outline-variant flex items-center justify-center gap-sm hover:bg-surface-container-low dark:hover:bg-on-surface-variant/10 transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-[18px]">open_in_new</span> View
                            </button>
                            <button className="p-sm text-error hover:bg-error/10 rounded-lg transition-all cursor-pointer">
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Pagination */}
                <div className="mt-2xl flex items-center justify-center gap-md">
                    <button className="p-sm border border-outline-variant dark:border-on-surface-variant/30 rounded-lg hover:bg-surface-container-low dark:hover:bg-on-surface-variant/10 text-on-surface-variant dark:text-outline-variant disabled:opacity-30 cursor-pointer"
                    // disabled=""
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div className="flex gap-sm">
                        <button className="w-10 h-10 bg-primary dark:bg-primary-fixed text-on-primary dark:text-on-primary-fixed rounded-lg font-label-md text-label-md cursor-pointer">1</button>
                        <button className="w-10 h-10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md hover:bg-surface-container-low dark:hover:bg-on-surface-variant/10 dark:text-inverse-on-surface cursor-pointer">2</button>
                        <button className="w-10 h-10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md hover:bg-surface-container-low dark:hover:bg-on-surface-variant/10 dark:text-inverse-on-surface cursor-pointer">3</button>
                    </div>
                    <button className="p-sm border border-outline-variant dark:border-on-surface-variant/30 rounded-lg hover:bg-surface-container-low dark:hover:bg-on-surface-variant/10 text-on-surface-variant dark:text-outline-variant cursor-pointer">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </main>
    );
}