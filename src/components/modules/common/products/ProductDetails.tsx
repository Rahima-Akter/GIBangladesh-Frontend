import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";

export default function ProductDetails() {
    return (
        <main className="max-w-7xl mx-auto px-lg py-2xl space-y-3xl">
            {/* <!-- Product Hero Section --> */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-2xl">
                <div className="lg:col-span-7">
                    <div className="aspect-video bg-surface-container dark:bg-surface-container-highest rounded-xl overflow-hidden border border-outline-variant dark:border-on-surface-variant/30">
                        <img alt="Jamdani Saree Close-up" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ki6GDRUoWlhrSotsQupC_LOUDcHDqx_ZDnLBdSIAo4pK9E0MVZgHuToCgBbp9dXd-bjXORJ6CbH2B5GIMJ_iWCNcbZi2r8ghzmt-yJH-lByO-N10Bl1SFS0FHSl8dRhGPxIWbmjw9SoL5ifONeZNN5OBaYGOTZbrldygF0hpMnnONGM8jNQdHGc5Gn9Ebcn44hUODaqm-KJ0cgEwL7jjJX-ReJJmKCeM_8AFFRLnjvRfRNVuLgMsSfP1JfiFuDHdd57DPoup7Vk" />
                    </div>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="flex gap-sm mb-md">
                        <span className="bg-primary-container dark:bg-primary-fixed-dim text-on-primary-container dark:text-on-primary-fixed px-sm py-xs rounded text-label-sm uppercase flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">verified</span> Verified GI
                        </span>
                        <span className="bg-secondary-container dark:bg-secondary-fixed-dim text-on-secondary-container dark:text-on-secondary-fixed px-sm pt-3 rounded text-label-sm uppercase">Heritage Product</span>
                    </div>
                    <h1 className="font-h1 text-h1 text-primary dark:text-primary-fixed-dim mb-sm">Dhakai Jamdani</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline-variant lg:mb-md mb-xl leading-relaxed">
                        A symbol of Bengal's aristocratic heritage, Dhakai Jamdani is the descendant of the ancient fine Muslin, woven with legendary geometric and floral motifs that seem to float upon the fabric.
                    </p>
                    <div className="grid grid-cols-2 gap-sm lg:mb-sm mb-md">
                        <div className="p-md bg-surface-container-lowest dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg shadow-sm">
                            <span className="text-label-sm text-outline dark:text-outline-variant uppercase block mb-xs">Origin District</span>
                            <span className="font-h3 md:text-h3 text-[20px] text-on-surface dark:text-inverse-on-surface">Narayanganj</span>
                        </div>
                        <div className="p-md bg-surface-container-lowest dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg shadow-sm">
                            <span className="text-label-sm text-outline dark:text-outline-variant uppercase block mb-xs">Status</span>
                            <span className="font-h3 md:text-h3 text-[20px] text-primary dark:text-primary-fixed-dim">Authentic</span>
                        </div>
                    </div>
                    <div className="flex gap-md">
                        <button className="flex-1 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container px-3 py-md rounded-lg font-label-md flex items-center justify-center gap-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-md">
                            <span className="material-symbols-outlined"><IconThumbUp /></span>
                            Like
                        </button>
                        <button className="flex-1 border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim px-3 py-md rounded-lg font-label-md flex items-center justify-center gap-sm hover:bg-surface-container-low dark:hover:bg-surface-container-highest active:scale-[0.98] transition-all">
                            <span className="material-symbols-outlined"><IconThumbDown /></span>
                            Dislike
                        </button>
                        <div className="flex gap-sm">
                            <button className="p-md border border-outline-variant dark:border-on-surface-variant/30 text-on-surface-variant dark:text-outline-variant rounded-lg hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-all">
                                <span className="material-symbols-outlined">bookmark</span>
                            </button>
                            <button className="p-md border border-outline-variant dark:border-on-surface-variant/30 text-on-surface-variant dark:text-outline-variant rounded-lg hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-all">
                                <span className="material-symbols-outlined">share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Information & Heritage --> */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-lg">
                {/* <!-- Heritage Description --> */}
                <div className="md:col-span-8 p-xl bg-surface-container-lowest dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-xl shadow-sm">
                    <h2 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim mb-lg">Cultural Significance &amp; History</h2>
                    <div className="space-y-md text-on-surface-variant dark:text-outline-variant font-body-md text-body-md leading-relaxed">
                        <p>Dhakai Jamdani represents the pinnacle of handloom weaving in Bengal, a tradition that flourished under Mughal patronage. In 2013, UNESCO recognized the Traditional Art of Jamdani Weaving as an Intangible Cultural Heritage of Humanity, underscoring its profound cultural value.</p>
                        <p>The name "Jamdani" is of Persian origin; "Jam" meaning flower and "Dani" meaning vase. Each piece is a masterpiece of storytelling through thread, where motifs like the 'Panna Hajar' (thousand emeralds) or 'Dubli Jaal' (floral net) are meticulously hand-crafted without any mechanical assistance.</p>
                        <ul className="list-disc pl-lg space-y-sm mt-md">
                            <li>Legacy of the ancient Muslin, once sought by emperors and royalty worldwide.</li>
                            <li>The 'Discontinuous Weft' technique where patterns are created using individual needles of bamboo or wood.</li>
                            <li>Oral tradition of knowledge passed down through generations of master artisans (Karigars).</li>
                            <li>Deeply rooted in the socio-cultural fabric of the Shitalakshya river banks.</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- GI Info Card --> */}
                <div className="md:col-span-4 space-y-lg">
                    <div className="p-xl bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-xl shadow-md border border-primary dark:border-on-surface-variant/30">
                        <div className="flex items-center gap-md mb-lg">
                            <span className="material-symbols-outlined text-[40px]">history_edu</span>
                            <h3 className="font-h3 text-h3">GI Information</h3>
                        </div>
                        <div className="space-y-md">
                            <div className="flex flex-col border-b border-white/20 pb-sm">
                                <span className="text-label-sm uppercase opacity-70">GI Reg. Number</span>
                                <span className="font-body-lg font-bold">BD-001</span>
                            </div>
                            <div className="flex flex-col border-b border-white/20 pb-sm">
                                <span className="text-label-sm uppercase opacity-70">Registered Year</span>
                                <span className="font-body-lg font-bold">2016</span>
                            </div>
                            <div className="flex flex-col border-b border-white/20 pb-sm">
                                <span className="text-label-sm uppercase opacity-70">Origin Region</span>
                                <span className="font-body-lg font-bold">Narayanganj</span>
                            </div>
                            <div className="flex flex-col border-b border-white/20 pb-sm">
                                <span className="text-label-sm uppercase opacity-70">Product Category</span>
                                <span className="font-body-lg font-bold">Textile</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-label-sm uppercase opacity-70">Verification Status</span>
                                <span className="font-body-lg font-bold flex items-center gap-xs">
                                    <span className="material-symbols-outlined text-[18px]">verified</span> Verified
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Crafting Process Timeline --> */}
            <section className="space-y-lg">
                <h2 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim text-center mb-2xl">The Art of Creation</h2>
                <div className="max-w-4xl mx-auto px-md">
                    <div className="relative">
                        {/* <!-- Vertical Line --> */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-container dark:bg-primary-fixed-dim transform md:-translate-x-1/2"></div>
                        <div className="space-y-xl">
                            {/* <!-- Step 1 --> */}
                            <div className="relative flex items-start md:items-center">
                                {/* <!-- Dot --> */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary dark:bg-primary-fixed-dim rounded-full border-4 border-background dark:border-on-surface z-10 transform -translate-x-1/2"></div>
                                <div className="flex flex-col md:flex-row w-full">
                                    <div className="md:w-1/2 md:pr-xl md:text-right pl-12 md:pl-0">
                                        <span className="text-label-sm text-primary dark:text-primary-fixed-dim font-bold uppercase">Step 1</span>
                                        <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xs">Raw Material Collection</h4>
                                        <p className="text-on-surface-variant dark:text-outline-variant text-body-md">Sourcing the finest counts of cotton and silk threads, traditionally spun to achieve the ethereal lightness characteristic of Dhakai Jamdani.</p>
                                    </div>
                                    <div className="hidden md:block md:w-1/2"></div>
                                </div>
                            </div>
                            {/* <!-- Step 2 --> */}
                            <div className="relative flex items-start md:items-center">
                                {/* <!-- Dot --> */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary dark:bg-primary-fixed-dim rounded-full border-4 border-background dark:border-on-surface z-10 transform -translate-x-1/2"></div>
                                <div className="flex flex-col md:flex-row w-full">
                                    <div className="hidden md:block md:w-1/2"></div>
                                    <div className="md:w-1/2 md:pl-xl pl-12 md:pl-0">
                                        <span className="text-label-sm text-primary dark:text-primary-fixed-dim font-bold uppercase">Step 2</span>
                                        <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xs">Traditional Weaving</h4>
                                        <p className="text-on-surface-variant dark:text-outline-variant text-body-md">Woven on a traditional pit loom where two weavers work in unison, inserting supplementary weft threads using bamboo needles to create patterns.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Step 3 --> */}
                            <div className="relative flex items-start md:items-center">
                                {/* <!-- Dot --> */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary dark:bg-primary-fixed-dim rounded-full border-4 border-background dark:border-on-surface z-10 transform -translate-x-1/2"></div>
                                <div className="flex flex-col md:flex-row w-full">
                                    <div className="md:w-1/2 md:pr-xl md:text-right pl-12 md:pl-0">
                                        <span className="text-label-sm text-primary dark:text-primary-fixed-dim font-bold uppercase">Step 3</span>
                                        <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xs">Pattern Design</h4>
                                        <p className="text-on-surface-variant dark:text-outline-variant text-body-md">Artisans replicate intricate floral and geometric motifs from memory, a skill passed down through generations without any physical drawings or blueprints.</p>
                                    </div>
                                    <div className="hidden md:block md:w-1/2"></div>
                                </div>
                            </div>
                            {/* <!-- Step 4 --> */}
                            <div className="relative flex items-start md:items-center">
                                {/* <!-- Dot --> */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary dark:bg-primary-fixed-dim rounded-full border-4 border-background dark:border-on-surface z-10 transform -translate-x-1/2"></div>
                                <div className="flex flex-col md:flex-row w-full">
                                    <div className="hidden md:block md:w-1/2"></div>
                                    <div className="md:w-1/2 md:pl-xl pl-12 md:pl-0">
                                        <span className="text-label-sm text-primary dark:text-primary-fixed-dim font-bold uppercase">Step 4</span>
                                        <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xs">Final Preparation</h4>
                                        <p className="text-on-surface-variant dark:text-outline-variant text-body-md">Each saree is washed and starched to enhance the motifs before a final verification by the local craft council to ensure GI authenticity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Related Blogs Section --> */}
            <section className="space-y-lg">
                <div className="flex items-center justify-between">
                    <h2 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim">Heritage Stories &amp; Insights</h2>
                    <button className="text-primary dark:text-primary-fixed-dim font-bold flex items-center gap-xs hover:underline">View All Blogs <span className="material-symbols-outlined">arrow_forward</span></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                    {/* <!-- Blog Card 1 --> */}
                    <div className="bg-white dark:bg-on-surface-variant/5 border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                        <div className="h-48 bg-surface-container-high overflow-hidden">
                            <img alt="Blog cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSvYwmdgN4ydevOmFWW1FtSfSNDrKgUsFkYwqUv9PF_49lwxUFAd0S4gBmbAAEWWS50tdoOYfQCgxEgZ2rPpS3mma-Ep9vWLZT3vwaOW_sOUi80Jd9MWEy7HTH4ERp7S_DTLScPCOTQEkDPYPIb3HUq899qA1dSpmDTHz8T2RRiq462CHb8CJoO6tDUv0yt9o0SfRSGa_BlwWLmJ9Q4Hy6EYihs_c93Pdcdioi2Sdf8T2xEpbfokMqxay7ofKL0cIPdD7Wq_0oFto" />
                        </div>
                        <div className="p-lg">
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-sm line-clamp-2">The Hidden Language of Jamdani Motifs</h4>
                            <div className="flex items-center gap-sm mb-md text-label-sm text-on-surface-variant dark:text-outline-variant">
                                <span className="font-bold">Anisur Rahman</span>
                                <span>•</span>
                                <span>May 12, 2024</span>
                            </div>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-3 mb-lg">Discover the symbolic meanings behind the thousands of traditional patterns used in Dhakai Jamdani weaving...</p>
                            <button className="text-primary dark:text-primary-fixed-dim font-label-md flex items-center gap-xs hover:gap-sm transition-all">Read More <span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                        </div>
                    </div>
                    {/* <!-- Blog Card 2 --> */}
                    <div className="bg-white dark:bg-on-surface-variant/5 border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                        <div className="h-48 bg-surface-container-high overflow-hidden">
                            <img alt="Blog cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrbgHOtlU055sQT27k73tuw4H9-_e9-Bkpx8DXs1RUK5yX4OHxOePSVQYKno3EUlkvKEvLrlaX0mZlWSVrxzCo3ctJR2m9qJK8dtqS1lZWCQOAKeGxH2oWVOv_4-gNfngbI2b71guJuv8K6sROH2kB_yZ85wK7HMHSbi5I_c3NcBn5c5QM4O4xLgtzI9WXmfAV9sgX-9fS-T6hXiwAT1LZBKTy-nH559XIq5IZK-1MM9zRc2qEt_KzIfVClp-AzJrRGdbo86i4D_U" />
                        </div>
                        <div className="p-lg">
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-sm line-clamp-2">A Day with the Master Karigars of Sonargaon</h4>
                            <div className="flex items-center gap-sm mb-md text-label-sm text-on-surface-variant dark:text-outline-variant">
                                <span className="font-bold">Farzana Ahmed</span>
                                <span>•</span>
                                <span>April 28, 2024</span>
                            </div>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-3 mb-lg">We spent a day observing the intense focus and rhythmic harmony of the weaving process in Narayanganj...</p>
                            <button className="text-primary dark:text-primary-fixed-dim font-label-md flex items-center gap-xs hover:gap-sm transition-all">Read More <span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                        </div>
                    </div>
                    {/* <!-- Blog Card 3 --> */}
                    <div className="bg-white dark:bg-on-surface-variant/5 border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                        <div className="h-48 bg-surface-container-high overflow-hidden">
                            <img alt="Blog cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDt3_b3JokezBWySpY-IFq7so4L_Zf3H7iNn-LbvHvkS6V-L4kS9flZJKfzh_22NbLkjjDS7O7qp5V1Cgyb5nb-ezqG19wJYxyrPHEvtdr5QDhBupSvL9xmET0cBbBKg6XSy-Tv5LL5UtnaWsStjuxIbInutJxRdXpl-t9y_MhLwHk-xf-pon719n12hZA2-LzNzgsWldny8ls4cmNmZDkwooeoBGgA-uoVhOlG9RJqNWJjLFIO50DYA5SXFG2-31fa1ls7UXzs4s" />
                        </div>
                        <div className="p-lg">
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-sm line-clamp-2">From Mughal Courts to Global Runways</h4>
                            <div className="flex items-center gap-sm mb-md text-label-sm text-on-surface-variant dark:text-outline-variant">
                                <span className="font-bold">Nabil Hossain</span>
                                <span>•</span>
                                <span>March 15, 2024</span>
                            </div>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant line-clamp-3 mb-lg">How the GI certification is helping Dhakai Jamdani reclaim its position as a luxury fabric in modern fashion...</p>
                            <button className="text-primary dark:text-primary-fixed-dim font-label-md flex items-center gap-xs hover:gap-sm transition-all">Read More <span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Community Discussion Section --> */}
            <section className="p-xl bg-surface-container-low dark:bg-on-surface-variant/10 rounded-xl border border-outline-variant dark:border-on-surface-variant/30">
                <div className="flex flex-col gap-lg mb-xl">
                    <div>
                        <h2 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim">Community Voice</h2>
                        <p className="text-on-surface-variant dark:text-outline-variant font-body-md mt-sm">Join 1,200+ enthusiasts discussing the legacy of Dhakai Jamdani.</p>
                    </div>
                    {/* <!-- New Comment Box --> */}
                    <div className="space-y-md">
                        <textarea className="w-full p-md rounded-lg border border-outline-variant dark:border-on-surface-variant/30 bg-white dark:bg-on-surface-variant/10 focus:ring-2 focus:ring-primary dark:focus:ring-primary-fixed-dim outline-none min-h-[100px] text-body-md dark:text-inverse-on-surface" placeholder="Share your thoughts or ask a question about this GI product..."></textarea>
                        <div className="flex justify-end">
                            <button className="bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed px-lg py-sm rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all">Post Comment</button>
                        </div>
                    </div>
                </div>
                <div className="space-y-lg">
                    {/* <!-- Comment 1 --> */}
                    <div className="p-md bg-white dark:bg-on-surface-variant/5 rounded-lg border border-outline-variant dark:border-on-surface-variant/30">
                        <div className="flex items-center gap-md mb-sm">
                            <div className="w-10 h-10 rounded-full bg-secondary-container dark:bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-container dark:text-on-secondary-fixed font-bold">MK</div>
                            <div>
                                <p className="font-label-md text-on-surface dark:text-inverse-on-surface">Maksudul Karim</p>
                                <p className="text-label-sm text-on-surface-variant dark:text-outline-variant">2 days ago</p>
                            </div>
                        </div>
                        <p className="text-body-sm text-on-surface-variant dark:text-outline-variant italic mb-md">"The craftsmanship in this Jamdani is unlike anything I've seen. You can really feel the history in every thread."</p>
                        <div className="flex gap-md border-t border-outline-variant dark:border-on-surface-variant/30 pt-sm"><button className="text-outline dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim font-label-sm flex items-center gap-xs transition-colors">
                            <span className="material-symbols-outlined text-[16px]">reply</span>
                            <span className="text-[11px]">Reply</span>
                        </button>
                            <button className="text-outline dark:text-outline-variant hover:text-error dark:hover:text-error-container font-label-sm flex items-center gap-xs transition-colors">
                                <span className="material-symbols-outlined text-[16px]">delete</span>
                                <span className="text-[11px]">Delete</span>
                            </button></div>
                    </div>
                    <div className="relative md:ml-[60px] ml-8 mt-md">
                        {/* <!-- Connector Line --> */}
                        <div className="absolute md:-left-[36px] -left-[20px] -top-md bottom-1/2 w-0.5 bg-outline-variant dark:bg-on-surface-variant/30"></div>
                        <div className="absolute md:-left-[36px] -left-[20px] bottom-1/2 w-0.5 md:w-[32px] w-[20px] h-0.5 bg-outline-variant dark:bg-on-surface-variant/30"></div>

                        <div className="p-md bg-surface-container-low dark:bg-on-surface-variant/10 rounded-lg border border-outline-variant dark:border-on-surface-variant/30 shadow-sm">
                            <div className="flex items-center gap-md mb-sm">
                                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xs">
                                    HA
                                </div>
                                <div>
                                    <p className="text-label-sm text-on-surface-variant dark:text-outline-variant">1 day ago</p>
                                </div>
                            </div>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant italic mb-md">
                                "Thank you for your appreciation, Maksudul! We are dedicated to ensuring that the authentic legacy of our weavers is preserved through this platform."
                            </p>
                            <div className="flex gap-md border-t border-outline-variant/50 dark:border-on-surface-variant/30/50 pt-sm">
                                <button className="text-outline dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim font-label-sm flex items-center gap-xs transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">reply</span>
                                    <span className="text-[11px]">Reply</span>
                                </button>
                                <button className="text-outline dark:text-outline-variant hover:text-error dark:hover:text-error-container font-label-sm flex items-center gap-xs transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">delete</span>
                                    <span className="text-[11px]">Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Comment 2 --> */}
                    <div className="p-md bg-white dark:bg-on-surface-variant/5 rounded-lg border border-outline-variant dark:border-on-surface-variant/30">
                        <div className="flex items-center gap-md mb-sm">
                            <div className="w-10 h-10 rounded-full bg-tertiary-container dark:bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-container dark:text-on-tertiary-fixed font-bold">SN</div>
                            <div>
                                <p className="font-label-md text-on-surface dark:text-inverse-on-surface">Sumaiya Naz</p>
                                <p className="text-label-sm text-on-surface-variant dark:text-outline-variant">5 days ago</p>
                            </div>
                        </div>
                        <p className="text-body-sm text-on-surface-variant dark:text-outline-variant italic mb-md">"Finally, a platform that respects the GI status! I loved reading about the traditional weaving process."</p>
                        <div className="flex gap-md border-t border-outline-variant dark:border-on-surface-variant/30 pt-sm"><button className="text-outline dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim font-label-sm flex items-center gap-xs transition-colors">
                            <span className="material-symbols-outlined text-[16px]">reply</span>
                            <span className="text-[11px]">Reply</span>
                        </button>
                            <button className="text-outline dark:text-outline-variant hover:text-error dark:hover:text-error-container font-label-sm flex items-center gap-xs transition-colors">
                                <span className="material-symbols-outlined text-[16px]">delete</span>
                                <span className="text-[11px]">Delete</span>
                            </button></div>
                    </div>
                </div>
            </section>
            {/* <!-- Related Products Grid --> */}
            <section className="space-y-lg">
                <div className="flex items-center justify-between">
                    <h2 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim">Other GI Products</h2>
                    <button className="text-primary dark:text-primary-fixed-dim font-bold flex items-center gap-xs hover:underline">View All <span className="material-symbols-outlined">arrow_forward</span></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
                    {/* <!-- Product Card 1 --> */}
                    <div className="bg-white dark:bg-on-surface-variant/5 border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden group hover:shadow-lg transition-all">
                        <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSvYwmdgN4ydevOmFWW1FtSfSNDrKgUsFkYwqUv9PF_49lwxUFAd0S4gBmbAAEWWS50tdoOYfQCgxEgZ2rPpS3mma-Ep9vWLZT3vwaOW_sOUi80Jd9MWEy7HTH4ERp7S_DTLScPCOTQEkDPYPIb3HUq899qA1dSpmDTHz8T2RRiq462CHb8CJoO6tDUv0yt9o0SfRSGa_BlwWLmJ9Q4Hy6EYihs_c93Pdcdioi2Sdf8T2xEpbfokMqxay7ofKL0cIPdD7Wq_0oFto" />
                            <span className="absolute top-md right-md bg-white/90 dark:bg-surface-container-lowest/90 px-sm py-xs rounded text-label-sm font-bold text-primary dark:text-primary-fixed-dim shadow-sm">Verified</span>
                        </div>
                        <div className="p-md">
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xs group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">Padma Hilsa</h4>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mb-md line-clamp-2">Distinctive silvery ilish from the Padma river basin.</p>
                            <button className="w-full py-sm border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md rounded-lg group-hover:bg-primary dark:group-hover:bg-primary-container group-hover:text-on-primary dark:group-hover:text-on-primary-container transition-all">Details</button>
                        </div>
                    </div>
                    {/* <!-- Product Card 2 --> */}
                    <div className="bg-white dark:bg-on-surface-variant/5 border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden group hover:shadow-lg transition-all">
                        <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrbgHOtlU055sQT27k73tuw4H9-_e9-Bkpx8DXs1RUK5yX4OHxOePSVQYKno3EUlkvKEvLrlaX0mZlWSVrxzCo3ctJR2m9qJK8dtqS1lZWCQOAKeGxH2oWVOv_4-gNfngbI2b71guJuv8K6sROH2kB_yZ85wK7HMHSbi5I_c3NcBn5c5QM4O4xLgtzI9WXmfAV9sgX-9fS-T6hXiwAT1LZBKTy-nH559XIq5IZK-1MM9zRc2qEt_KzIfVClp-AzJrRGdbo86i4D_U" />
                        </div>
                        <div className="p-md">
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xs group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">Rajshahi Silk</h4>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mb-md line-clamp-2">Premium mulberry silk known for its luster and strength.</p>
                            <button className="w-full py-sm border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md rounded-lg group-hover:bg-primary dark:group-hover:bg-primary-container group-hover:text-on-primary dark:group-hover:text-on-primary-container transition-all">Details</button>
                        </div>
                    </div>
                    {/* <!-- Product Card 3 --> */}
                    <div className="bg-white dark:bg-on-surface-variant/5 border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden group hover:shadow-lg transition-all">
                        <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDyUfoID77rFtEGVSWSwYrhphEWBRRI5HeuQr8woSf0pncOQooKlX-58VzdKaXJF0nPliLF5y4dlySpEJyCY4thh5q5lcGUtr8Gr304tIDEf6uk995We8B-2ZQEh9_oqLqIbCGvgn443l_-Y3f4YHzH18lk9Z7oYlYc9VfGXd1Pdisp_0ZJ1yJR1ueCFIP-YZ1rugbLMOA-lwQjk9Iz88ke7qS0dflazsp3IY1N2TX_EHnXcCWENQ_7krfaWZtNJ5sKOLVYgRJsGs" />
                        </div>
                        <div className="p-md">
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xs group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">Kalijira Rice</h4>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mb-md line-clamp-2">The "Prince of Rice", tiny aromatic grains from Chalan Beel.</p>
                            <button className="w-full py-sm border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md rounded-lg group-hover:bg-primary dark:group-hover:bg-primary-container group-hover:text-on-primary dark:group-hover:text-on-primary-container transition-all">Details</button>
                        </div>
                    </div>
                    {/* <!-- Product Card 4 --> */}
                    <div className="bg-white dark:bg-on-surface-variant/5 border border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden group hover:shadow-lg transition-all">
                        <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDt3_b3JokezBWySpY-IFq7so4L_Zf3H7iNn-LbvHvkS6V-L4kS9flZJKfzh_22NbLkjjDS7O7qp5V1Cgyb5nb-ezqG19wJYxyrPHEvtdr5QDhBupSvL9xmET0cBbBKg6XSy-Tv5LL5UtnaWsStjuxIbInutJxRdXpl-t9y_MhLwHk-xf-pon719n12hZA2-LzNzgsWldny8ls4cmNmZDkwooeoBGgA-uoVhOlG9RJqNWJjLFIO50DYA5SXFG2-31fa1ls7UXzs4s" />
                        </div>
                        <div className="p-md">
                            <h4 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xs group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">Tangail Handloom</h4>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mb-md line-clamp-2">Traditional cotton handloom with high thread count.</p>
                            <button className="w-full py-sm border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md rounded-lg group-hover:bg-primary dark:group-hover:bg-primary-container group-hover:text-on-primary dark:group-hover:text-on-primary-container transition-all">Details</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}