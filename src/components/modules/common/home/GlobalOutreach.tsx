export default function GlobalOutreach() {
    return (
        <section className="py-3xl px-lg bg-surface-container-low dark:bg-on-surface-variant/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-2xl">
                    <div className="inline-flex items-center gap-sm px-md py-xs bg-primary-container/20 text-primary-container dark:text-primary-fixed-dim rounded-full mb-md border border-primary-container/30">
                        <span className="material-symbols-outlined text-[18px]">language</span>
                        <span className="text-label-sm font-bold uppercase tracking-wider">Global Outreach</span>
                    </div>
                    <h2 className="font-h2 text-h2 text-on-surface dark:text-inverse-on-surface mb-md">Global Market Expansion</h2>
                    <p className="font-body-md text-on-surface-variant dark:text-outline-variant mx-auto">Empowering local heritage with international visibility, bridging the gap between traditional craftsmanship and the global marketplace.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
                    {/* <!-- Card 1: International Compliance --> */}
                    <div className="bg-surface dark:bg-inverse-surface p-xl rounded-2xl border border-outline-variant dark:border-outline hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[32px]">verified_user</span>
                        </div>
                        <h3 className="text-h3 text-[22px] text-on-surface dark:text-inverse-on-surface mb-sm">International Compliance</h3>
                        <p className="text-body-md text-on-surface-variant dark:text-outline-variant">
                            Ensuring all GI products meet rigorous global trade standards, phytosanitary requirements, and international quality certifications.
                        </p>
                    </div>
                    {/* <!-- Card 2: Direct Export Channels --> */}
                    <div className="bg-surface dark:bg-inverse-surface p-xl rounded-2xl border border-outline-variant dark:border-outline hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[32px]">hub</span>
                        </div>
                        <h3 className="text-h3 text-[22px] text-on-surface dark:text-inverse-on-surface mb-sm">Direct Export Channels</h3>
                        <p className="text-body-md text-on-surface-variant dark:text-outline-variant">
                            Removing middlemen by connecting local artisans directly with global buyers, luxury boutiques, and international retail chains.
                        </p>
                    </div>
                    {/* <!-- Card 3: Foreign Exchange Growth --> */}
                    <div className="bg-surface dark:bg-inverse-surface p-xl rounded-2xl border border-outline-variant dark:border-outline hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[32px]">currency_exchange</span>
                        </div>
                        <h3 className="text-h3 text-[22px] text-on-surface dark:text-inverse-on-surface mb-sm">Foreign Exchange Growth</h3>
                        <p className="text-body-md text-on-surface-variant dark:text-outline-variant">
                            Strengthening the national economy by increasing export revenues and creating sustainable high-value livelihoods for rural communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}