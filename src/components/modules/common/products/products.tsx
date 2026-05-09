export default function GIProducts() {
    return (
        <main className="flex-grow w-full max-w-7xl mx-auto px-lg py-2xl">
            {/* Page Header */}
            <div className="mb-3xl">
                <h1 className="font-h1 text-h1 text-on-surface dark:text-inverse-on-surface mb-sm">
                    Geographical Indication Registry
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline-variant">Explore authentic products protected under intellectual property rights, representing <br /> the unique heritage and craftsmanship of Bangladesh.</p>
            </div>
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-md mb-xl bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant p-md rounded-lg shadow-sm transition-colors duration-300">
                <div className="flex flex-wrap md:flex-nowrap gap-sm overflow-x-auto pb-sm sm:pb-0 scrollbar-hide">
                    <button className="whitespace-nowrap flex items-center gap-xs px-md py-sm bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-lg font-label-md">
                        <span className="material-symbols-outlined text-[18px]">filter_list</span> All Categories
                    </button>
                    <button className="whitespace-nowrap flex items-center gap-xs px-md py-sm bg-surface-container dark:bg-on-surface-variant/30 border border-outline-variant dark:border-on-surface-variant text-on-surface-variant dark:text-outline-variant rounded-lg font-label-md hover:bg-surface-container-high transition-all">
                        Region
                    </button>
                    <button className="whitespace-nowrap flex items-center gap-xs px-md py-sm bg-surface-container dark:bg-on-surface-variant/30 border border-outline-variant dark:border-on-surface-variant text-on-surface-variant dark:text-outline-variant rounded-lg font-label-md hover:bg-surface-container-high transition-all">
                        Year Registered
                    </button>
                </div>
                <div className="relative w-full lg:w-[400px]">
                    <span className="material-symbols-outlined absolute left-[14px] top-1/2 -translate-y-1/2 text-on-surface-variant dark:text-outline-variant pointer-events-none text-[20px]">search</span>
                    <input className="w-full pl-[44px] pr-md py-sm bg-surface dark:bg-on-surface/50 border border-outline-variant dark:border-outline-variant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface dark:text-inverse-on-surface text-body-sm font-body-sm placeholder:text-on-surface-variant/50 dark:placeholder:text-gray-300 border border-outline-variant" placeholder="Search GI products..." type="text" />
                </div>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
                {/* Card 1 */}
                <div className="bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant rounded-lg overflow-hidden flex flex-col hover:border-primary dark:hover:border-primary-fixed-dim transition-all hover:shadow-lg group">
                    <div className="h-48 w-full bg-surface-container-highest dark:bg-on-surface-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A detailed close-up shot of Jamdani silk fabric" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKCq5al9_8oMla3fkG9iNLhgleZSZsisJmHjKea_lXNxLzp2kQ3N0ft_puoaW5qIMPugdHVxAhlCyqHUhRT-2akrIxQZIlcBh48UlYu4fYm8HD8OJM9Z4AyYlA2-8laBpix7i2GlGDwLKvUPwUm17MUMoSZsbh-DaixQc7KrCtel9EgzMDIChnL6ec9xXTtS-aTko8DXqv679jMg9AWWN16ZWYhIDb5_A5Ap0NF7DzXehtUNh1F12AmwMVQw65MRt4coyxLhJtnkQ" />
                    </div>
                    <div className="p-md flex-grow flex flex-col">
                        <div className="flex items-center gap-xs mb-xs">
                            <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary text-[10px] px-sm py-[2px] rounded-full font-label-sm">TEXTILES</span>
                        </div>
                        <h3 className="font-h3 text-body-md font-bold text-on-surface dark:text-inverse-on-surface mb-xs">Jamdani Sari</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-2 mb-md">Fine muslin textile produced for centuries in the Narayanganj District.</p>
                        <div className="mt-auto space-y-xs pt-sm border-t border-outline-variant dark:border-on-surface-variant">
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">GI No:</span>
                                <span className="text-primary dark:text-primary-fixed-dim font-bold">GI-01</span>
                            </div>
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">Origin:</span>
                                <span className="text-on-surface dark:text-inverse-on-surface">Dhaka</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-md pt-0">
                        <button className="w-full border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md py-sm rounded-lg hover:bg-primary-fixed dark:hover:bg-primary/20 transition-all flex items-center justify-center gap-xs">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant rounded-lg overflow-hidden flex flex-col hover:border-primary dark:hover:border-primary-fixed-dim transition-all hover:shadow-lg group">
                    <div className="h-48 w-full bg-surface-container-highest dark:bg-on-surface-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Fresh Hilsa fish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrJFvPSMGg_-vXTK6TjG6GjOXU-jcaxU0_u-_EsaE3nWy8vzbj2w2VPWSkoYD-8OupcbG0mJec3Y2hz8zN6Sa2_IkdU1cjPSubp2Z4y3g73p0ehDishnG6qINXhecd--1694QjVw_AwYPRclXOmg0Q13Zeh4XKIoSvO9XDQd1FR4Ug9lS8fVrvqaD4_YfWd6ufeS8toTxoetWzr1uTwIqrJ6ryXT49AsWYNZw8WLI4ADMSC2AygiQ6g4141Enx4xGoe-rapt8LYIY" />
                    </div>
                    <div className="p-md flex-grow flex flex-col">
                        <div className="flex items-center gap-xs mb-xs">
                            <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary text-[10px] px-sm py-[2px] rounded-full font-label-sm">FISH</span>
                        </div>
                        <h3 className="font-h3 text-body-md font-bold text-on-surface dark:text-inverse-on-surface mb-xs">Ilish of Chandpur</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-2 mb-md">The legendary silver fish from the Padma-Meghna estuary.</p>
                        <div className="mt-auto space-y-xs pt-sm border-t border-outline-variant dark:border-on-surface-variant">
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">GI No:</span>
                                <span className="text-primary dark:text-primary-fixed-dim font-bold">GI-02</span>
                            </div>
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">Origin:</span>
                                <span className="text-on-surface dark:text-inverse-on-surface">Chandpur</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-md pt-0">
                        <button className="w-full border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md py-sm rounded-lg hover:bg-primary-fixed dark:hover:bg-primary/20 transition-all flex items-center justify-center gap-xs">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div className="bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant rounded-lg overflow-hidden flex flex-col hover:border-primary dark:hover:border-primary-fixed-dim transition-all hover:shadow-lg group">
                    <div className="h-48 w-full bg-surface-container-highest dark:bg-on-surface-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Khirsapati mangoes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_PIU7_JiCYIfIna3_-RwXSXmp5BdwxizFD2_BtzsZihR02fL8aFc8exj78vr2z6nDU_67FnDVgtszUxfy0OUA_cO61aBlFqYh1ogw4s_-TU0mLa1FbFRtJupZRPzDfy_WdNcYysmqnzQER7FiSyKTDMAq0n31KW-kGGLOYRfc6Gf7hrnQw1vuMz8uqSTg-Lbdx606VsPBPDliDuokc6hnvrLzGugpaJdajNJa3WxFpRgJUQjSw_JcjXqvaW7ch618WJOrqY_JxUU" />
                    </div>
                    <div className="p-md flex-grow flex flex-col">
                        <div className="flex items-center gap-xs mb-xs">
                            <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary text-[10px] px-sm py-[2px] rounded-full font-label-sm">AGRICULTURE</span>
                        </div>
                        <h3 className="font-h3 text-body-md font-bold text-on-surface dark:text-inverse-on-surface mb-xs">Khirsapati Mango</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-2 mb-md">Widely popular mango variety known for its distinctive aroma.</p>
                        <div className="mt-auto space-y-xs pt-sm border-t border-outline-variant dark:border-on-surface-variant">
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">GI No:</span>
                                <span className="text-primary dark:text-primary-fixed-dim font-bold">GI-03</span>
                            </div>
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">Origin:</span>
                                <span className="text-on-surface dark:text-inverse-on-surface">Chapainawabganj</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-md pt-0">
                        <button className="w-full border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md py-sm rounded-lg hover:bg-primary-fixed dark:hover:bg-primary/20 transition-all flex items-center justify-center gap-xs">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Card 4 --> */}
                <div className="bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant rounded-lg overflow-hidden flex flex-col hover:border-primary dark:hover:border-primary-fixed-dim transition-all hover:shadow-lg group">
                    <div className="h-48 w-full bg-surface-container-highest dark:bg-on-surface-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Kalijira rice" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1aMRtAUc2tb9HhmefIkil6z1fHa4AETLlTj2swsXRg414fJriaQTntVMSZFqxsd9YZC7gaDnOX4h6kEraEop4uMSHC3-45b_pGty_bMx6jkrXD9hjO-Z4GVrZTQKQogt3XrIxw9BZtxv0O_gLawRHiR51yDwyAxPp3KUTSk9UcE4hyhH5yjVKibV9gMwJ2KSF3WbwHz6CEoBRezrT4NMpAyWMasZUEpOFIuECabqyxj2naUCEwjhZ-BE11Sg9j8UC1pyfer7O760" />
                    </div>
                    <div className="p-md flex-grow flex flex-col">
                        <div className="flex items-center gap-xs mb-xs">
                            <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary text-[10px] px-sm py-[2px] rounded-full font-label-sm">AGRICULTURE</span>
                        </div>
                        <h3 className="font-h3 text-body-md font-bold text-on-surface dark:text-inverse-on-surface mb-xs">Kalijira Rice</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-2 mb-md">Small-grain aromatic rice known as the 'Prince of Rice'.</p>
                        <div className="mt-auto space-y-xs pt-sm border-t border-outline-variant dark:border-on-surface-variant">
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">GI No:</span>
                                <span className="text-primary dark:text-primary-fixed-dim font-bold">GI-04</span>
                            </div>
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">Origin:</span>
                                <span className="text-on-surface dark:text-inverse-on-surface">Bangladesh</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-md pt-0">
                        <button className="w-full border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md py-sm rounded-lg hover:bg-primary-fixed dark:hover:bg-primary/20 transition-all flex items-center justify-center gap-xs">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Card 5 --> */}
                <div className="bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant rounded-lg overflow-hidden flex flex-col hover:border-primary dark:hover:border-primary-fixed-dim transition-all hover:shadow-lg group">
                    <div className="h-48 w-full bg-surface-container-highest dark:bg-on-surface-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Nakshi Kantha" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK--WXNLXjPr_btmKhy2mSdraDF0agSKiflLF9IT3c075XQZlgVb-4PtkxPBOGt7tTd1u_IJWm5g_QwcHO8XuaDbjmnx3dSkGAA1qFP_-Q_TFDat_5Y2sMdcMoyIhIgrKUAPU5OkudfiiNVRcNrG0mvne6gSeelFrA_XbmKDFoGGPWV1_SLW7GavSjBUEt3d4e1om_xO7htocEO7bADnrAvjHc1rFGNO9pMXXCLpwR12affFdTtiTCHoSoK86KlKevp0yrAVsdsqs" />
                    </div>
                    <div className="p-md flex-grow flex flex-col">
                        <div className="flex items-center gap-xs mb-xs">
                            <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary text-[10px] px-sm py-[2px] rounded-full font-label-sm">HANDICRAFTS</span>
                        </div>
                        <h3 className="font-h3 text-body-md font-bold text-on-surface dark:text-inverse-on-surface mb-xs">Nakshi Kantha</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-2 mb-md">Traditional embroidered quilt reflecting folk art.</p>
                        <div className="mt-auto space-y-xs pt-sm border-t border-outline-variant dark:border-on-surface-variant">
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">GI No:</span>
                                <span className="text-primary dark:text-primary-fixed-dim font-bold">GI-05</span>
                            </div>
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">Origin:</span>
                                <span className="text-on-surface dark:text-inverse-on-surface">Rajshahi</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-md pt-0">
                        <button className="w-full border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md py-sm rounded-lg hover:bg-primary-fixed dark:hover:bg-primary/20 transition-all flex items-center justify-center gap-xs">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Card 6 --> */}
                <div className="bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant rounded-lg overflow-hidden flex flex-col hover:border-primary dark:hover:border-primary-fixed-dim transition-all hover:shadow-lg group">
                    <div className="h-48 w-full bg-surface-container-highest dark:bg-on-surface-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Porabari Chomchom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPPNjLn3zD9qucF4b6biWZH6UCwGOg1tjPSlGpNGWL96cs-xIRVtbCQA-mObgVcMgwB-zNQpHTl1Tk8nunVX7R1NgBGMFZi75wVPHdGjzhStl9HYwvacl0b-lJ-zioV3sub3hx_5U3p5boYEq6U8MwPv_u65Gr6-T-SAWsBZn1izw4ItE7vKK0e7KHmh9cPynaxH5RsTH5tNHFvctAw3-rzWc9lmVxgIUg0yFHC4V75aAlfTRYs4uBvzOOPM8HHAINAliLaymzM3w" />
                    </div>
                    <div className="p-md flex-grow flex flex-col">
                        <div className="flex items-center gap-xs mb-xs">
                            <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary text-[10px] px-sm py-[2px] rounded-full font-label-sm">SWEETS</span>
                        </div>
                        <h3 className="font-h3 text-body-md font-bold text-on-surface dark:text-inverse-on-surface mb-xs">Porabari Chomchom</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-2 mb-md">Centuries-old sweetmeat with unique texture and flavor.</p>
                        <div className="mt-auto space-y-xs pt-sm border-t border-outline-variant dark:border-on-surface-variant">
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">GI No:</span>
                                <span className="text-primary dark:text-primary-fixed-dim font-bold">GI-16</span>
                            </div>
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">Origin:</span>
                                <span className="text-on-surface dark:text-inverse-on-surface">Tangail</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-md pt-0">
                        <button className="w-full border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md py-sm rounded-lg hover:bg-primary-fixed dark:hover:bg-primary/20 transition-all flex items-center justify-center gap-xs">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Card 7 --> */}
                <div className="bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant rounded-lg overflow-hidden flex flex-col hover:border-primary dark:hover:border-primary-fixed-dim transition-all hover:shadow-lg group">
                    <div className="h-48 w-full bg-surface-container-highest dark:bg-on-surface-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Bangladesh Jute" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZOhyNarlaerbGhSECsvg6g_Bzbe-fz4bBBVfvtH5_xvSsVXhFxD-n-Erw6M6zbacW4C1Gm8GcfUNyEDSP3VpMnH0UgtQSscTit5pb9g0WGFe_Us1yy6_bQHzyJPi9IMVuzY4iBVvYt4Fh2N-DH2VqsHYv6n2Ld_0mewpUbWLl4owRMuMgM1EYlkZGiTlY9DEy6XD2eDAD_Jhd412B5mHYXzdpRbuEFFwXvOWV7IuB6mZA7UApsVUdu9jPXiMPRYQ-MsX5GOkmzeE" />
                    </div>
                    <div className="p-md flex-grow flex flex-col">
                        <div className="flex items-center gap-xs mb-xs">
                            <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary text-[10px] px-sm py-[2px] rounded-full font-label-sm">AGRICULTURE</span>
                        </div>
                        <h3 className="font-h3 text-body-md font-bold text-on-surface dark:text-inverse-on-surface mb-xs">Bangladesh Jute</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-2 mb-md">The 'Golden Fiber' of the nation's heritage.</p>
                        <div className="mt-auto space-y-xs pt-sm border-t border-outline-variant dark:border-on-surface-variant">
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">GI No:</span>
                                <span className="text-primary dark:text-primary-fixed-dim font-bold">GI-17</span>
                            </div>
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">Origin:</span>
                                <span className="text-on-surface dark:text-inverse-on-surface">National</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-md pt-0">
                        <button className="w-full border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md py-sm rounded-lg hover:bg-primary-fixed dark:hover:bg-primary/20 transition-all flex items-center justify-center gap-xs">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Card 8 --> */}
                <div className="bg-surface-container-lowest dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant rounded-lg overflow-hidden flex flex-col hover:border-primary dark:hover:border-primary-fixed-dim transition-all hover:shadow-lg group">
                    <div className="h-48 w-full bg-surface-container-highest dark:bg-on-surface-variant/20 overflow-hidden">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dhakai Muslin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKpSaBR77dwUgd8r-8PbHox2FWlDA8ucnpOGzMRglnmQgPFhdYZMMZ8rr-MnEH8jeEKCiOOynxc5Hr5u1Op_j7WUi6V2yZXR4rrIMfAaeWfoF6nbguVLer82ZfPDnUARCRk6SsJImkCbXMhawLA78O8RePDiZXHr_K08ipdfCmwhyBIifuinnX8-IKOHJHFpWWVaiA-OCph5fbVfjNQ-Xfte5x-VgZNqGLflIzFBP3n6mE21JBbMgol_Aui9xdtW2ghQi8ElnGxrY" />
                    </div>
                    <div className="p-md flex-grow flex flex-col">
                        <div className="flex items-center gap-xs mb-xs">
                            <span className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary text-[10px] px-sm py-[2px] rounded-full font-label-sm">TEXTILES</span>
                        </div>
                        <h3 className="font-h3 text-body-md font-bold text-on-surface dark:text-inverse-on-surface mb-xs">Dhakai Muslin</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-2 mb-md">Legendary ultra-fine textile revived through research.</p>
                        <div className="mt-auto space-y-xs pt-sm border-t border-outline-variant dark:border-on-surface-variant">
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">GI No:</span>
                                <span className="text-primary dark:text-primary-fixed-dim font-bold">GI-09</span>
                            </div>
                            <div className="flex justify-between text-label-sm font-label-sm">
                                <span className="text-on-surface-variant dark:text-outline-variant">Origin:</span>
                                <span className="text-on-surface dark:text-inverse-on-surface">Dhaka</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-md pt-0">
                        <button className="w-full border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md py-sm rounded-lg hover:bg-primary-fixed dark:hover:bg-primary/20 transition-all flex items-center justify-center gap-xs">
                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <div className="mt-3xl flex items-center justify-center gap-sm">
                <button className="p-sm rounded-lg border border-outline-variant dark:border-on-surface-variant text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md">1</button>
                <button className="w-10 h-10 rounded-lg border border-outline-variant dark:border-on-surface-variant text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high font-label-md">2</button>
                <button className="w-10 h-10 rounded-lg border border-outline-variant dark:border-on-surface-variant text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high font-label-md">3</button>
                <span className="text-on-surface-variant dark:text-outline-variant px-sm">...</span>
                <button className="w-10 h-10 rounded-lg border border-outline-variant dark:border-on-surface-variant text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high font-label-md">12</button>
                <button className="p-sm rounded-lg border border-outline-variant dark:border-on-surface-variant text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </main>
    );
}