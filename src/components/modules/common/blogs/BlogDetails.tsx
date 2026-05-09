export default function BlogDetails() {
    return (
        <main className="max-w-7xl mx-auto px-lg py-3xl flex flex-col items-center">
            {/* <!-- Article Header --> */}
            <article className="w-full max-w-5xl">
                <div className="mb-xl">
                    <span className="inline-block bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary px-sm py-xs rounded text-label-sm font-label-sm mb-md uppercase">GI Agriculture</span>
                    <h1 className="font-h1 text-h1 text-on-surface dark:text-inverse-on-surface mb-md">The Future of Jamdani: Preserving Heritage in the Digital Age</h1>
                    <div className="flex items-center gap-md pt-md border-t border-outline-variant dark:border-outline">
                        <img alt="Author" className="w-10 h-10 rounded-full bg-surface-container-highest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5zSptdBY6Gpw0cofv8YjVuDNjJSHrKmwOaGgLLBlCN6UyxAVB-wUvmTs7A0t8n-Y2KTPY3nipSN3AaHkFeZce511S5WXCAdcvCytn6i5zjS4zIeyz9EpxxByBwS_PcTVH_4OgchEXHhYMP6B9emzPCgmwdiyZfyPYK6qKhwsY8qDvddJzM4JHb777eWjJ4yVJoRhj9iNEvgjxMg4Q4IOuOU6R0DRu6MYKTAyAUIyyfS-Pm8cQdYLL39h7xYoF8i8OLmGs2qYHl9s" />
                        <div>
                            <p className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">Ariful Islam</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">Senior Research Analyst • May 24, 2024</p>
                        </div>
                        <div className="ml-auto flex gap-sm">
                            <button className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant p-sm hover:bg-surface-container dark:hover:bg-surface-variant rounded-lg transition-colors">share</button>
                            <button className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant p-sm hover:bg-surface-container dark:hover:bg-surface-variant rounded-lg transition-colors">bookmark</button>
                        </div>
                    </div>
                </div>
                {/* <!-- Hero Image --> */}
                <div className="w-full h-[400px] rounded-xl overflow-hidden mb-2xl bg-surface-container-high dark:bg-surface-container border border-outline-variant dark:border-outline shadow-sm">
                    <img alt="Jamdani Weaving" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl04k2BpPxp43j82Gi7oLKUG4spzlbOP4g2yC3Puo9Jovr1lFwURm-N5mBDO2PY-8YSfpxgqrCPC6RkvIN9eG45I3HFPGGpRjZ1I-nNQOEAWg1R44Rz-2sDqNm0CXGt2QLm3F2BxtXyMHGKHoPTUFh_DO6STWl-gzQL53CmAE2clwOShy3fNTgGNipE7RTeBNjsjw6N-AZDNomRj8h-oHPlUZotDtGrX5YmeRBnQ5cQAyiZuNnnYqw_c6ja3mqaNN6Oi0lo6T0Tsk" />
                </div>
                {/* <!-- Content --> */}
                <div className="prose dark:prose-invert max-w-none">
                    <p className="font-body-lg text-body-lg text-on-surface dark:text-inverse-on-surface leading-relaxed mb-lg">
                        Jamdani weaving is not just a textile method; it is a cultural cornerstone of Bangladesh. As we move deeper into the 21st century, the integration of Geographical Indication (GI) status has become vital for the survival of this ancient craft.
                    </p>
                    <h2 className="font-h2 text-h2 text-on-surface dark:text-inverse-on-surface mt-2xl mb-md">The Impact of GI Status</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant leading-relaxed mb-md">
                        By securing GI status, Bangladeshi Jamdani weavers are gaining protection from counterfeit products that often flood international markets. This legal framework ensures that only products made in the traditional regions of Bangladesh can carry the Jamdani label.
                    </p>
                    <div className="bg-surface-container-low dark:bg-on-surface-variant border-l-4 border-primary dark:border-primary-fixed-dim p-lg my-xl rounded-r-lg">
                        <p className="font-body-md text-body-md text-primary dark:text-primary-fixed-dim italic">
                            "GI protection is not just about trade; it is about dignity. It ensures that the weaver's heritage is respected and that they receive fair compensation."
                        </p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant leading-relaxed mb-md">
                        Our recent research shows that the export value of GI-certified products increased by 15% in the first year of registration. This surplus directly impacts the weaving community, facilitating the adoption of new technologies and the training of the younger generation.
                    </p>
                </div>
                {/* <!-- Tags --> */}
                <div className="flex flex-wrap gap-sm mt-2xl mb-3xl">
                    <span className="px-md py-xs bg-surface-container dark:bg-on-surface-variant text-on-surface-variant dark:text-inverse-on-surface rounded-full text-label-sm font-label-sm">#Jamdani</span>
                    <span className="px-md py-xs bg-surface-container dark:bg-on-surface-variant text-on-surface-variant dark:text-inverse-on-surface rounded-full text-label-sm font-label-sm">#GISystem</span>
                    <span className="px-md py-xs bg-surface-container dark:bg-on-surface-variant text-on-surface-variant dark:text-inverse-on-surface rounded-full text-label-sm font-label-sm">#Heritage</span>
                </div>
                {/* <!-- Comments Section --> */}
                <section className="border-t border-outline-variant dark:border-outline pt-2xl w-full">
                    <h3 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface mb-xl">Discussion (3)</h3>
                    {/* <!-- Comment Input --> */}
                    <div className="mb-2xl">
                        <textarea className="w-full p-md bg-surface-container-lowest dark:bg-on-surface-variant border border-outline-variant dark:border-outline rounded-lg font-body-md text-body-md text-on-surface dark:text-inverse-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Join the discussion..." rows={3}></textarea>
                        <div className="flex justify-end mt-sm">
                            <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">Post Comment</button>
                        </div>
                    </div>
                    {/* <!-- Comment List --> */}
                    <div className="space-y-xl">
                        {/* <!-- Parent Comment --> */}
                        <div className="group">
                            <div className="flex gap-md">
                                <img alt="Jasim Uddin" className="w-10 h-10 rounded-full bg-secondary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrRHW11ztuq71OLimWz6STJGRNjBVD2Vb2h4J4a1uMzQF2cL89L2qDfbggCrakwmNlzQ1AtNSF-SW5IuhzuR-lKDA00qB72qVXwcF230omM_r4qt7xzpfHLnaFHJYQ5_Nbr-JGkEX9JseSE5YFX07LKLc7MBTosGTg54Kff_5nkryAvOxBG0vGsd0KKh8sKF-mVwb8GzalWgpIMssdcHocBenExMOI7eoZ5xEPzl3bLt4DVopOdZp5pV5p7b6WabebZ1u8yLbeB8E" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-sm mb-xs">
                                        <span className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">Jasim Uddin</span>
                                        <span className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm">• 2 hours ago</span>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant mb-sm">Great article! The 15% export value increase is particularly encouraging for local artisans.</p>
                                    <div className="flex items-center gap-md">
                                        <button className="flex items-center gap-xs text-label-sm font-label-sm text-primary dark:text-primary-fixed-dim hover:underline uppercase tracking-tight">
                                            <span className="material-symbols-outlined text-[16px]">reply</span> Reply
                                        </button>
                                        <button className="flex items-center gap-xs text-label-sm font-label-sm text-error hover:underline uppercase tracking-tight">
                                            <span className="material-symbols-outlined text-[16px]">delete</span> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Threaded Reply --> */}
                            <div className="mt-md ml-xl pl-md border-l-2 border-outline-variant dark:border-outline">
                                <div className="flex gap-md">
                                    <img alt="Ariful Islam" className="w-8 h-8 rounded-full bg-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5zSptdBY6Gpw0cofv8YjVuDNjJSHrKmwOaGgLLBlCN6UyxAVB-wUvmTs7A0t8n-Y2KTPY3nipSN3AaHkFeZce511S5WXCAdcvCytn6i5zjS4zIeyz9EpxxByBwS_PcTVH_4OgchEXHhYMP6B9emzPCgmwdiyZfyPYK6qKhwsY8qDvddJzM4JHb777eWjJ4yVJoRhj9iNEvgjxMg4Q4IOuOU6R0DRu6MYKTAyAUIyyfS-Pm8cQdYLL39h7xYoF8i8OLmGs2qYHl9s" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-sm mb-xs">
                                            <span className="font-label-sm text-label-sm text-on-surface dark:text-inverse-on-surface">Ariful Islam (Author)</span>
                                            <span className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm">• 1 hour ago</span>
                                        </div>
                                        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">Thank you, Jasim. We hope this rate will increase even more in the coming years.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Parent Comment 2 --> */}
                        <div className="flex gap-md">
                            <img alt="Nurul Rashid" className="w-10 h-10 rounded-full bg-tertiary-fixed-dim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDyC4WRGn_aBDyn2r_LSw74ygECrh0HF4889zgandplPAR_WmBFIL3KMZXsQ6A1ROWLz_Yigo8khH2AgCuMWByRApsy-EoKNGdkLveX3nxML_bQz_I8r_lSiqKw1KWb3F5MNINLp6VNeqNfv24EQyz2JYU66Sp495Bkuz_O9Gc6kYtkmjiICOvae4e6jPbAAYqKo55t15lyVUH9ISZCHAIvIHzyk52M3Ell5afp4z1gPCD8VagRNCcGE8QQvUHmyID93GWDn2D3L4" />
                            <div className="flex-1">
                                <div className="flex items-center gap-sm mb-xs">
                                    <span className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">Nurul Rashid</span>
                                    <span className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm">• 5 hours ago</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant mb-sm">More awareness about GI products is needed in urban areas. Many people still don't know why GI is important.</p>
                                <div className="flex items-center gap-md">
                                    <button className="flex items-center gap-xs text-label-sm font-label-sm text-primary dark:text-primary-fixed-dim hover:underline uppercase tracking-tight">
                                        <span className="material-symbols-outlined text-[16px]">reply</span> Reply
                                    </button>
                                    <button className="flex items-center gap-xs text-label-sm font-label-sm text-error hover:underline uppercase tracking-tight">
                                        <span className="material-symbols-outlined text-[16px]">delete</span> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Parent Comment 3 --> */}
                        <div className="flex gap-md">
                            <img alt="Sarah Ahmed" className="w-10 h-10 rounded-full bg-primary-fixed-dim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT9DgUrZgUezRa9MTkQj-CYZRwaFVktgkJ4JwPkcunL3ajyxeVSqsC9NxOzVr_h-ECNFWRlJlHK2KV5CRKNOph_iJ1tW2BCdhg2YZIrH6xGFaeUPtRNWDxDW4W1mUpmsRc_I4APDTilS4RTo5Xv5uShddAjuvm6lIxkVt0FdDHhauRUR0zXA63zmhyNcAWAbIM6_r8-B5n9NhvjRb_D2DtfjriVs5rBvrO-p7meXUpWF4jtHoabaBiwicWBN-0Alj9ddf1xYVTBlo" />
                            <div className="flex-1">
                                <div className="flex items-center gap-sm mb-xs">
                                    <span className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">Sarah Ahmed</span>
                                    <span className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm">• 1 day ago</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant mb-sm">The point about dignity is truly touching. A very well-researched piece.</p>
                                <div className="flex items-center gap-md">
                                    <button className="flex items-center gap-xs text-label-sm font-label-sm text-primary dark:text-primary-fixed-dim hover:underline uppercase tracking-tight">
                                        <span className="material-symbols-outlined text-[16px]">reply</span> Reply
                                    </button>
                                    <button className="flex items-center gap-xs text-label-sm font-label-sm text-error hover:underline uppercase tracking-tight">
                                        <span className="material-symbols-outlined text-[16px]">delete</span> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}