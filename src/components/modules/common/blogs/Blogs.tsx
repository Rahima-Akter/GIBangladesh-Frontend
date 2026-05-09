export default function Blogs() {
    return (
        <main className="max-w-7xl mx-auto px-lg py-2xl">
            {/* <!-- Header Section --> */}
            <header className="mb-2xl">
                <h1 className="font-h1 text-h1 text-primary dark:text-white mb-sm">Insights from Bangladesh</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-zinc-400">Discover the stories, traditions, and technological advancements<br /> behind Bangladesh's Geographical Indication (GI) products.</p>
            </header>
            {/* <!-- Blog Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                {/* <!-- Blog Card 1 --> */}
                <article className="bg-surface-container-lowest dark:bg-zinc-900 border border-outline-variant dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col group hover:border-primary dark:hover:border-zinc-600 transition-all shadow-sm">
                    <div className="aspect-video relative overflow-hidden">
                        <img alt="Jamdani Weaving" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDt-4trk2XHmX1YHdgEj3FGafj_qhQcE9Co3qhiIA3sQsykbySZ2oe4ML2V3WM3N1EP2Uw-NeGt_l4vQbodASB10iK2sYHsZCcUuLdjB7sfSKHGZWKOpw0_94buHmDMo4mjUecrrgh5C6e_S6qB9_4PE9ie4rapsm9NzhenkTdFNh579LXKX4ej6-Ycc-Q8RbcmUJuqOhlD-MMxj30bmERJbqSAgM2iOzcyXvBMi8adP7ZC_B6tY4r0cV0_y8vL5_KZ06KDP4phsk" />
                        <div className="absolute top-md left-md">
                            <span className="bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-sm px-sm py-xs rounded text-primary dark:text-zinc-300 font-label-sm text-label-sm border border-outline-variant dark:border-zinc-700">Heritage</span>
                        </div>
                    </div>
                    <div className="p-lg flex flex-col flex-grow">
                        <div className="flex items-center gap-sm mb-sm text-on-surface-variant dark:text-zinc-400 font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            <span>May 12, 2024</span>
                            <span>•</span>
                            <span>5 min read</span>
                        </div>
                        <h3 className="font-h3 text-h3 text-primary dark:text-zinc-100 mb-md line-clamp-2">The Golden Thread: Preserving the Legacy of Jamdani Muslin</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-zinc-400 mb-xl line-clamp-3">Exploring the revival of the ancient weaving techniques that made Bengal's muslin famous across the globe and its status as a GI protected product.</p>
                        <div className="mt-auto flex items-center justify-between border-t border-outline-variant dark:border-zinc-800 pt-md">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xs">RS</div>
                                <span className="font-label-md text-label-md font-bold text-on-surface dark:text-zinc-300">Rahat Salim</span>
                            </div>
                            <span className="material-symbols-outlined text-primary dark:text-zinc-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </article>
                {/* <!-- Blog Card 2 --> */}
                <article className="bg-surface-container-lowest dark:bg-zinc-900 border border-outline-variant dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col group hover:border-primary dark:hover:border-zinc-600 transition-all shadow-sm">
                    <div className="aspect-video relative overflow-hidden">
                        <img alt="Rajshahi Silk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZgbYu_30mr2l3CLM4O6OJWwIvp0l6QU6GMGC_QBOa9DURdK-PiJbOwtIaDYUTCeX9w7wh2MvfIdMlPLHA6CcRdwP9ItDUsx8n7ZIxou8qTTk9LPWLwqCqheecAjYRqnWjAJxvuc64VijDkxfY0NVe7mdmArfddjNR3fnCchucEtvXWvkDOf70TnfC0MBAQL6qjHyjDMkfoPl99sPeAvvJOuGeO-ernAgw11Bzi8Qx_uM89Q01rb9lpWuw_vG9PSZKCeYu2_L_Gdo" />
                        <div className="absolute top-md left-md">
                            <span className="bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-sm px-sm py-xs rounded text-primary dark:text-zinc-300 font-label-sm text-label-sm border border-outline-variant dark:border-zinc-700">Economy</span>
                        </div>
                    </div>
                    <div className="p-lg flex flex-col flex-grow">
                        <div className="flex items-center gap-sm mb-sm text-on-surface-variant dark:text-zinc-400 font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            <span>May 10, 2024</span>
                            <span>•</span>
                            <span>4 min read</span>
                        </div>
                        <h3 className="font-h3 text-h3 text-primary dark:text-zinc-100 mb-md line-clamp-2">Silk Roads: Rajshahi's Journey to Global Recognition</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-zinc-400 mb-xl line-clamp-3">How the silk industry of Rajshahi is leveraging digital platforms to reach international markets while maintaining its authentic quality.</p>
                        <div className="mt-auto flex items-center justify-between border-t border-outline-variant dark:border-zinc-800 pt-md">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">NF</div>
                                <span className="font-label-md text-label-md font-bold text-on-surface dark:text-zinc-300">Nusrat Farhana</span>
                            </div>
                            <span className="material-symbols-outlined text-primary dark:text-zinc-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </article>
                {/* <!-- Blog Card 3 --> */}
                <article className="bg-surface-container-lowest dark:bg-zinc-900 border border-outline-variant dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col group hover:border-primary dark:hover:border-zinc-600 transition-all shadow-sm">
                    <div className="aspect-video relative overflow-hidden">
                        <img alt="Nakshi Kantha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtUxiLeBlV_jqQcTOc37LRozyvcT1m3b6EUPXRIRz8d7KyIca77ibuc0Y9FVXF4GCNykxZQNwTbA-Jbc4xh_TdbcyCFb6mQGxJm29m7F7CxSwveTPONJ8xj5PdDFvl0ztu1cKjfPK0YLKLgdxN27a5OImrr-Kr7YQFMcrXgKdH-ijOU4ycubgmF8KguVrpi_xLvfq_TMWzDl_WfHEfI1Enf3Y5nkksr4K0sMYDiLCqJabVwqyPJQdYcamC6ylg6WoyoM_UKxYDDOU" />
                        <div className="absolute top-md left-md">
                            <span className="bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-sm px-sm py-xs rounded text-primary dark:text-zinc-300 font-label-sm text-label-sm border border-outline-variant dark:border-zinc-700">Art</span>
                        </div>
                    </div>
                    <div className="p-lg flex flex-col flex-grow">
                        <div className="flex items-center gap-sm mb-sm text-on-surface-variant dark:text-zinc-400 font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            <span>May 08, 2024</span>
                            <span>•</span>
                            <span>7 min read</span>
                        </div>
                        <h3 className="font-h3 text-h3 text-primary dark:text-zinc-100 mb-md line-clamp-2">Stitching Stories: The Narrative Power of Nakshi Kantha</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-zinc-400 mb-xl line-clamp-3">The cultural significance of embroidered quilts and why the GI tag is crucial for protecting the identity of rural female artisans.</p>
                        <div className="mt-auto flex items-center justify-between border-t border-outline-variant dark:border-zinc-800 pt-md">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center font-bold text-xs">MK</div>
                                <span className="font-label-md text-label-md font-bold text-on-surface dark:text-zinc-300">Moin Khan</span>
                            </div>
                            <span className="material-symbols-outlined text-primary dark:text-zinc-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </article>
                {/* <!-- Blog Card 4 --> */}
                <article className="bg-surface-container-lowest dark:bg-zinc-900 border border-outline-variant dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col group hover:border-primary dark:hover:border-zinc-600 transition-all shadow-sm">
                    <div className="aspect-video relative overflow-hidden">
                        <img alt="Hilsa Fish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjzXsEnfBSjHMMt-JUNljgRobEftOzJO1CAQrqaf0dvutSQq58QT9k8OsqsPRkgB4V9p0CzqaN6jcpdU8ilIaYUrti-a-RPJn_2yxO6-RS-rjTR4EcrdF_hjO9E5aR6MK7qzFJP6ocOohyuPdP3rtSI8tbEyruCslaHh5dOlUATIssqX0tJC_3YACmhB_vjVCcTbR3dZvWvZS5iV-VQ0xWpyt5nBzMiDtOX1FEA62ppDF23olE3SkzT1g68U1G0CZiVokdmCGk6eo" />
                        <div className="absolute top-md left-md">
                            <span className="bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-sm px-sm py-xs rounded text-primary dark:text-zinc-300 font-label-sm text-label-sm border border-outline-variant dark:border-zinc-700">Agriculture</span>
                        </div>
                    </div>
                    <div className="p-lg flex flex-col flex-grow">
                        <div className="flex items-center gap-sm mb-sm text-on-surface-variant dark:text-zinc-400 font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            <span>May 05, 2024</span>
                            <span>•</span>
                            <span>6 min read</span>
                        </div>
                        <h3 className="font-h3 text-h3 text-primary dark:text-zinc-100 mb-md line-clamp-2">Ilish: The Silver of Bangladesh’s Rivers and its GI Status</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-zinc-400 mb-xl line-clamp-3">Understanding the ecological and economic importance of the Hilsa fish and how GI branding helps in sustainable fishing practices.</p>
                        <div className="mt-auto flex items-center justify-between border-t border-outline-variant dark:border-zinc-800 pt-md">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">AS</div>
                                <span className="font-label-md text-label-md font-bold text-on-surface dark:text-zinc-300">Anika Sen</span>
                            </div>
                            <span className="material-symbols-outlined text-primary dark:text-zinc-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </article>
                {/* <!-- Blog Card 5 --> */}
                <article className="bg-surface-container-lowest dark:bg-zinc-900 border border-outline-variant dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col group hover:border-primary dark:hover:border-zinc-600 transition-all shadow-sm">
                    <div className="aspect-video relative overflow-hidden">
                        <img alt="Fazli Mango" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zNrPZzrJld0BRFdYF4zpNJWXWqhR1BYwowMPJaG_Wjq5-rFfLSIjqcxdTBrLLTfoGWiIZW93d1EoezAaSqnDfAYo6D7GrQUZYbgkokSeS9EIaVK45pJ8p5tdXOMzQgvb01Fxq4Fwy5uQO6TzowClP7gAf-R_z2qi6Y8kugSXQnD9Co274x_IBXd93lD8RxryBPdd0-nqHi1dVfTf1PIPwGltZ0UuGkA_oLi3CEtleDBb1wc1RdpU5awLV-VReBLQYfQz2ccI9_M" />
                        <div className="absolute top-md left-md">
                            <span className="bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-sm px-sm py-xs rounded text-primary dark:text-zinc-300 font-label-sm text-label-sm border border-outline-variant dark:border-zinc-700">Trade</span>
                        </div>
                    </div>
                    <div className="p-lg flex flex-col flex-grow">
                        <div className="flex items-center gap-sm mb-sm text-on-surface-variant dark:text-zinc-400 font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            <span>May 02, 2024</span>
                            <span>•</span>
                            <span>5 min read</span>
                        </div>
                        <h3 className="font-h3 text-h3 text-primary dark:text-zinc-100 mb-md line-clamp-2">Sweet Exports: Why Fazli Mango is a Global Contender</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-zinc-400 mb-xl line-clamp-3">A deep dive into the export potential of Fazli Mangoes and how GI certification is opening doors to European and Middle Eastern markets.</p>
                        <div className="mt-auto flex items-center justify-between border-t border-outline-variant dark:border-zinc-800 pt-md">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs">TM</div>
                                <span className="font-label-md text-label-md font-bold text-on-surface dark:text-zinc-300">Tanvir Mahtab</span>
                            </div>
                            <span className="material-symbols-outlined text-primary dark:text-zinc-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </article>
                {/* <!-- Blog Card 6 --> */}
                <article className="bg-surface-container-lowest dark:bg-zinc-900 border border-outline-variant dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col group hover:border-primary dark:hover:border-zinc-600 transition-all shadow-sm">
                    <div className="aspect-video relative overflow-hidden">
                        <img alt="Tangail Saree" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA91KZsTHB5mo3A99VebXVpsvE1-8e0ODleb9CxyzmBd6L9mmg3ZgmMxbOhkZDcxtzaTuYPRf4tmJyRBXGnQ7FfCGZs_YpcYyHnzrI2QxJ_bsW7QOfMkjlP9ESS25EuUuh0Lc9My9Mj6sLmMHAAlgYw338Hr--yIqJPE4H4SawjuhTO4ygCj5Tlg8lt0gLICV-nxG91O1VuR0RI1PhLW3ES8EGv0ApraywxnXXeB6vYn-5aWD8wGUJYFBmGHin8dF1S-pg15Pe4-eg" />
                        <div className="absolute top-md left-md">
                            <span className="bg-surface/90 dark:bg-zinc-900/90 backdrop-blur-sm px-sm py-xs rounded text-primary dark:text-zinc-300 font-label-sm text-label-sm border border-outline-variant dark:border-zinc-700">Policy</span>
                        </div>
                    </div>
                    <div className="p-lg flex flex-col flex-grow">
                        <div className="flex items-center gap-sm mb-sm text-on-surface-variant dark:text-zinc-400 font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                            <span>April 28, 2024</span>
                            <span>•</span>
                            <span>8 min read</span>
                        </div>
                        <h3 className="font-h3 text-h3 text-primary dark:text-zinc-100 mb-md line-clamp-2">Legal Frontiers: Strengthening GI Laws in South Asia</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-zinc-400 mb-xl line-clamp-3">An analytical look at how Bangladesh is updating its intellectual property framework to protect its growing list of GI products.</p>
                        <div className="mt-auto flex items-center justify-between border-t border-outline-variant dark:border-zinc-800 pt-md">
                            <div className="flex items-center gap-sm">
                                <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-white font-bold text-xs">JD</div>
                                <span className="font-label-md text-label-md font-bold text-on-surface dark:text-zinc-300">Jaria Daisy</span>
                            </div>
                            <span className="material-symbols-outlined text-primary dark:text-zinc-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </article>
            </div>
            {/* <!-- Pagination --> */}
            <div className="mt-3xl flex justify-center items-center gap-sm">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant dark:border-zinc-800 text-on-surface-variant dark:text-zinc-400 hover:bg-surface-container-high dark:hover:bg-zinc-800 transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold shadow-md">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant dark:border-zinc-800 text-on-surface-variant dark:text-zinc-400 hover:bg-surface-container-high dark:hover:bg-zinc-800 transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant dark:border-zinc-800 text-on-surface-variant dark:text-zinc-400 hover:bg-surface-container-high dark:hover:bg-zinc-800 transition-colors">3</button>
                <span className="px-sm text-on-surface-variant dark:text-zinc-500">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant dark:border-zinc-800 text-on-surface-variant dark:text-zinc-400 hover:bg-surface-container-high dark:hover:bg-zinc-800 transition-colors">12</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant dark:border-zinc-800 text-on-surface-variant dark:text-zinc-400 hover:bg-surface-container-high dark:hover:bg-zinc-800 transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </main>
    )
}