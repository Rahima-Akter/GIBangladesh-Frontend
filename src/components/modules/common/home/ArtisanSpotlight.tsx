export default function ArtisanSpotlight() {
    return (
        <section className="py-3xl px-lg bg-surface dark:bg-on-surface transition-colors duration-300">
            <div className="max-w-7xl mx-auto bg-primary dark:bg-primary-container rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">

                {/* Left Content */}
                <div className="flex-1 p-2xl text-on-primary">
                    <h2 className="text-h2 text-white mb-md">Beyond the Product: The People</h2>
                    <p className="text-body-lg text-white/90 mb-xl italic">
                        "This platform gave my family's craft a global voice. We no longer fear copycats; we only look forward to preserving our ancestors' work."
                    </p>
                    <div className="flex items-center gap-md">
                        <img
                            alt="Artisan Profile"
                            className="w-16 h-16 rounded-full border-2 border-white object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPIkMHkxRBEcvmyw3DRkSqTpgBP9ZCGQo1-PNeqjLTCQFNqMhUKPV3fbPWJeymqB_ifL-PMC_ktf4qGtlMbFCHLaEJ7rhXyQE_6bxBA1Rv1vikYJX1KeoI8c93HFdVHSPeEDEz054Xk3xom5nzUDWSp_U0ykhnYnF35v4Y9ndrDD5zmDDmIwiz_mdkH08FaZ2bjK847--HAi1GMVYSvz3qHVuU7c7tK_HljOEqSVHO5hXPieCsWvuC5EOR1onBpjhvImCQ8FcbvwM"
                        />
                        <div>
                            <div className="font-bold text-white">Morsheda Begum</div>
                            <div className="text-label-sm text-white/80">Master Weaver, Sonargaon</div>
                        </div>
                    </div>
                    <div className="mt-2xl">
                        <button className="bg-white text-primary px-xl py-md rounded-lg font-bold hover:bg-surface-bright transition-colors">
                            Read Artisan Stories
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative">
                    <img
                        alt="Artisans at work"
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9u07Kro83RDsGWu9MVA8c3zP2ueRGzrYTgXhHCgi4-VtzSipvu2dKwTPnfUkkz9zKC1OgjdWbvwVaY8o551Ib-gvdnMptyMtD66XxPp6egP7iDqVIXddI5KV9W2jJgeon42hYXLE3Q7nbPXQwDu0K1w3umu0Ymww8eD6sbF71JxzXBev1K0FrDiveFLKST54b50lgT_05vyvihV3IxEMtVliFFUR9diUwvTfTJ6pHZJzNXqHL9UEw-IaLmOBu75XmJC-eTuiaylk"
                    />
                </div>
            </div>
        </section>
    )
}