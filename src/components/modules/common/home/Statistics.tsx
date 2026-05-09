export default function Statistics() {
    return (
        <section className="py-2xl mt-8 px-lg bg-surface-container-lowest dark:bg-on-surface-variant/5 border-y border-outline-variant dark:border-on-surface-variant/20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
                    <div className="text-center">
                        <div className="text-h1 text-primary dark:text-primary-fixed-dim mb-xs">31</div>
                        <div className="text-label-md font-medium text-on-surface-variant dark:text-outline-variant">Total GI Products</div>
                    </div>
                    <div className="text-center">
                        <div className="text-h1 text-primary dark:text-primary-fixed-dim mb-xs">500K+</div>
                        <div className="text-label-md font-medium text-on-surface-variant dark:text-outline-variant">Artisans Empowered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-h1 text-primary dark:text-primary-fixed-dim mb-xs">24%</div>
                        <div className="text-label-md font-medium text-on-surface-variant dark:text-outline-variant">Export Growth</div>
                    </div>
                    <div className="text-center">
                        <div className="text-h1 text-primary dark:text-primary-fixed-dim mb-xs">45</div>
                        <div className="text-label-md font-medium text-on-surface-variant dark:text-outline-variant">Global Markets Reach</div>
                    </div>
                </div>
            </div>
        </section>
    );
}