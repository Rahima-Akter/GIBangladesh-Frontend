export default function Hero() {
    return (
        <section className="relative bg-surface dark:bg-on-surface pt-5 px-lg overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-2xl">
                <div className="flex-1 text-left animate-in fade-in slide-in-from-left duration-700">
                    <h1 className="md:font-h1 font-h2 text-[52px] leading-[1.1] font-extrabold text-on-surface dark:text-inverse-on-surface mb-md">
                        Securing the Pride of <br />
                        <span className="text-primary dark:text-primary-fixed-dim">Bengal's Heritage.</span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline-variant mb-xl">
                        Protecting Bangladesh's unique Geographical Indication products through AI-powered authentication, global supply chain transparency, and artisan empowerment.
                    </p>
                    <div className="flex gap-md">
                        <button className="bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed px-5 py-md rounded-lg font-label-md text-label-md hover:shadow-lg transition-all flex items-center gap-sm cursor-pointer">
                            Explore Registry
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim px-5 py-md rounded-lg font-label-md text-label-md hover:bg-surface-container-low dark:hover:bg-on-surface-variant/20 transition-all cursor-pointer">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="flex-1 w-full relative">
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-outline-variant dark:border-outline">
                        <img alt="Bangladesh GI Heritage" className="w-full lg:h-[420px] md:h-[480px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChmaXh2AQ4Jy_3sQOTI7-7p9NyqU6qUDCfnlXVpqt-W-0p5A_uhiFDF8WB3tNVZQlV7a-Ard3iDr7D69rget3KsjFlVhNl6L9d7-FYfz2G8TNoiI4QhV0YWRpRSKyBlGPY2eQnAtjFlFnSV7iywQ0GO1BNMqYwmHdNTR_HbmCxpfh_ijCoQANmHi41nIe05Ko9Tl1SSDdB_jeUl-34wT-1r5LvkZf2EKAe-OoOOemDE0agU9F9olxa2wo-Fus4zWJWmiDsehLUAYU" />
                    </div>
                    <div className="absolute -bottom-md -left-md bg-white dark:bg-inverse-surface p-md rounded-xl shadow-2xl border border-outline-variant dark:border-outline flex items-center gap-md">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">verified</span>
                        </div>
                        <div>
                            <div className="text-label-sm font-bold text-on-surface-variant dark:text-outline-variant uppercase">Certified Items</div>
                            <div className="text-h3 font-bold text-on-surface dark:text-inverse-on-surface">31+ GI Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}