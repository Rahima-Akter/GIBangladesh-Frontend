export default function Saved() {
    return <main className="lg:ml-64 grow p-xl -mt-2">
        {/* <!-- Tab Navigation & Filters --> */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-2xl">
            <div>
                <h1 className="font-h1 md:text-h2 text-[20px] text-on-surface dark:text-inverse-on-surface">Your Collection</h1>
            </div>
            <div className="flex bg-surface-container dark:bg-on-surface-variant/10 p-1 rounded-xl border border-outline-variant dark:border-on-surface-variant/30">
                <button className="px-md py-sm bg-white dark:bg-on-surface text-primary dark:text-primary-fixed-dim rounded-lg font-label-md text-label-md shadow-sm transition-all cursor-pointer">All Saved</button>
                <button className="px-md py-sm text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-all cursor-pointer">Products</button>
                <button className="px-md py-sm text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-all cursor-pointer">Stories</button>
            </div>
        </div>
        {/* <!-- Filter & Search --> */}
        <div className="flex flex-wrap items-center justify-between gap-md mb-lg">
            <div className="flex gap-sm">
                <div className="px-md py-sm bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant dark:text-outline-variant flex items-center gap-sm cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">filter_list</span>
                    Filter
                </div>
                <div className="px-md py-sm bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-lg font-label-md text-label-md text-on-surface-variant dark:text-outline-variant flex items-center gap-sm cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">sort</span>
                    Recently Added
                </div>
            </div>
            <div className="relative min-w-[260px]">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline dark:text-on-gray-400">search</span>
                <input className="w-full bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/50 rounded-lg pl-[44px] pr-md py-sm font-body-sm text-body-sm focus:ring-2 focus:ring-primary/20 outline-none dark:text-inverse-on-surface" placeholder="Search collection..." type="text" />
            </div>
        </div>
        {/* <!-- Bento Grid Gallery --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {/* <!-- Product Card 1 --> */}
            <div className="bg-surface dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/50 rounded-xl overflow-hidden group hover:border-primary dark:hover:border-on-surface-variant transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                    <img alt="Rajshahi Silk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A close-up shot of fine Rajshahi Silk fabric with a soft golden sheen. The texture is smooth and luxurious, draped elegantly to show its lightweight quality. The lighting is warm and cinematic, highlighting the natural richness of the silk." src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA" />
                    <button className="absolute top-md right-md p-sm bg-white/90 dark:bg-on-surface/90 backdrop-blur-sm rounded-full text-primary dark:text-primary-fixed-dim shadow-sm hover:scale-110 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined fill-1" data-icon="bookmark">bookmark</span>
                    </button>
                </div>
                <div className="p-md">
                    <div className="text-label-sm font-label-sm text-on-surface-variant dark:text-outline-variant uppercase tracking-tighter mb-xs">Clothing & Textile</div>
                    <h3 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-sm">Premium Rajshahi Silk Saree</h3>
                    <div className="flex items-center justify-between">
                        <span className="font-h3 text-primary dark:text-primary-fixed-dim">৳ 12,500</span>
                        <button className="px-md py-xs bg-primary-container dark:bg-primary-fixed text-white dark:text-on-primary-fixed rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all cursor-pointer">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- Product Card 2 --> */}
            <div className="bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden group hover:border-primary dark:hover:border-primary-fixed-dim transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                    <img alt="Natore Kanchagolla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro shot of Natore's famous Kanchagolla, a traditional Bangladeshi sweet made from pure milk solids. The texture is soft and grainy, presented in an artisanal clay bowl. The lighting is soft and appetizing, focusing on the delicacy's authentic quality." src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA" />
                    <button className="absolute top-md right-md p-sm bg-white/90 dark:bg-on-surface/90 backdrop-blur-sm rounded-full text-primary dark:text-primary-fixed-dim shadow-sm hover:scale-110 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined fill-1" data-icon="bookmark">bookmark</span>
                    </button>
                </div>
                <div className="p-md">
                    <div className="text-label-sm font-label-sm text-on-surface-variant dark:text-outline-variant uppercase tracking-tighter mb-xs">Sweets & Dairy</div>
                    <h3 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-sm">Authentic Natore Kanchagolla</h3>
                    <div className="flex items-center justify-between">
                        <span className="font-h3 text-primary dark:text-primary-fixed-dim">৳ 850 /kg</span>
                        <button className="px-md py-xs bg-primary-container dark:bg-primary-fixed text-white dark:text-on-primary-fixed rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all cursor-pointer">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- Story Card --> */}
            <div className="bg-surface dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden group hover:border-primary dark:hover:border-primary-fixed-dim transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                    <img alt="Sitalpati Weaving" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An elderly artisan's hands carefully weaving a Sitalpati mat, showcasing the intricate geometric patterns. The natural cane strips reflect soft daylight, emphasizing the patience and skill involved in this traditional craft. The atmosphere is one of deep heritage and focused artistry." src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA" />
                    <button className="absolute top-md right-md p-sm bg-white/90 dark:bg-on-surface/90 backdrop-blur-sm rounded-full text-primary dark:text-primary-fixed-dim shadow-sm hover:scale-110 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined fill-1" data-icon="bookmark">bookmark</span>
                    </button>
                </div>
                <div className="p-md">
                    <div className="text-label-sm font-label-sm text-on-surface-variant dark:text-outline-variant uppercase tracking-tighter mb-xs">Heritage Story</div>
                    <h3 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-sm">The Cooling Touch of Sitalpati: Sylhet's Green Legacy</h3>
                    <div className="flex items-center justify-between">
                        <span className="font-body-sm text-on-surface-variant dark:text-outline-variant">8 min read</span>
                        <button className="px-md py-xs border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim rounded-lg font-label-sm text-label-sm hover:bg-primary/5 dark:hover:bg-primary-fixed-dim/5 transition-all cursor-pointer">
                            Read Article
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
}