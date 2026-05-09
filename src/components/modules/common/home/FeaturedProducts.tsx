export default function FeaturedProducts() {
    return (
        <section className="py-3xl px-lg bg-surface dark:bg-on-surface transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-2xl">
                    <h2 className="font-h2 text-h2 text-on-surface dark:text-inverse-on-surface mb-md">National Treasures</h2>
                    <p className="font-body-md text-on-surface-variant dark:text-outline-variant mx-auto">Discover the authentic flavors, textures, and crafts that define Bangladesh’s geographical identity.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
                    {/* <!-- Product 1 --> */}
                    <div className="group bg-surface-container-lowest dark:bg-inverse-surface rounded-xl overflow-hidden border border-outline-variant dark:border-outline hover:shadow-xl transition-all">
                        <div className="aspect-square overflow-hidden">
                            <img alt="Jamdani Saree" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhHADSU7Lk3JvVlrMYMHsInc2zEvvG1zpqi7rJhKXa70yx_ML-TAHKE7xpj2ZcInpZSNHyLnzLIWpFTCHOdoWxxrut5ZoMMQZ6gwQPyJREID56W6gQ4FCEnQBRkguRXFSWs4SgsFS9vVbGqa_Uxl2GVze17bNl7bVycCqa1N5etRvK3wIYGh-JGW4xMoprCIFqdK9_g22QrN1r35MEqytfNhV8gBmP0WxoioW6JCnDpQuw9LSEWr9rvKX0EPUubhcjTYdbOCwTCVk" />
                        </div>
                        <div className="p-md">
                            <span className="text-label-sm font-bold text-primary dark:text-primary-fixed-dim uppercase tracking-wider">Textiles</span>
                            <h3 className="text-h3 text-[20px] text-on-surface dark:text-inverse-on-surface mt-xs">Jamdani Saree</h3>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mt-sm">Ethereal hand-woven muslin, a masterpiece of ancient craftsmanship.</p>
                        </div>
                    </div>
                    {/* <!-- Product 2 --> */}
                    <div className="group bg-surface-container-lowest dark:bg-inverse-surface rounded-xl overflow-hidden border border-outline-variant dark:border-outline hover:shadow-xl transition-all">
                        <div className="aspect-square overflow-hidden">
                            <img alt="Hilsa Fish" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3G-J9Zv98bogpQW5lj575LImt5Lx6poeguNVIawDMwcDc4UNgA5SG4XFdm-oNKT97uuRGFhhXWLtYM-nzB8S4pjyJYdaakzNguilWKK2qcYR8WQenII2BtoXP6AO-cWmNlbS4FR_M8Wg67gWSPyFBu6tZHzobQjBLR6963hMa8fugtqsofcNYJRCAur8eFNCtduRHcLoDZhg_7wIgDHmpEy8ZdiC_Sp9bq6kcPPRmM9SPXPavtoVkWlaCUDbeO_L7L0yM1XaY1T0" />
                        </div>
                        <div className="p-md">
                            <span className="text-label-sm font-bold text-primary dark:text-primary-fixed-dim uppercase tracking-wider">Marine</span>
                            <h3 className="text-h3 text-[20px] text-on-surface dark:text-inverse-on-surface mt-xs">Ilish (Hilsa)</h3>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mt-sm">The legendary king of fish, harvested from the Padma-Meghna delta.</p>
                        </div>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div className="group bg-surface-container-lowest dark:bg-inverse-surface rounded-xl overflow-hidden border border-outline-variant dark:border-outline hover:shadow-xl transition-all">
                        <div className="aspect-square overflow-hidden">
                            <img alt="Rajshahi Silk" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS8drZzy-I6qwshUhdRg4P28NKDM3P86_u_WxddOc17mLj5Uun34P9N1peAP8ZG9Iqxh85cUM9_1IOsV1ooe8raJLzapFG2usvfij0QaVSpFAFBKkq8EcWFeXzFRBNbfDikg9gIBH5J7GgbbgXUboYQ-1LbysKTfHdo3O2RiCwPDU11SfTjIDiquK5vEh_2kKUEqZtVoucdSAjGUBr0qeoF44K29WcpvfKVypkk2Mdayg28EOUHepFfIBVU2YGt7qTgGSFzAOxBl4" />
                        </div>
                        <div className="p-md">
                            <span className="text-label-sm font-bold text-primary dark:text-primary-fixed-dim uppercase tracking-wider">Textiles</span>
                            <h3 className="text-h3 text-[20px] text-on-surface dark:text-inverse-on-surface mt-xs">Rajshahi Silk</h3>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mt-sm">Pure, lustrous silk produced with centuries-old sericulture techniques.</p>
                        </div>
                    </div>
                    {/* <!-- Product 4 --> */}
                    <div className="group bg-surface-container-lowest dark:bg-inverse-surface rounded-xl overflow-hidden border border-outline-variant dark:border-outline hover:shadow-xl transition-all">
                        <div className="aspect-square overflow-hidden">
                            <img alt="Fazli Mango" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9KTeRs9HSYDO3NRs1PyBYmJdutSKzZgMEu5ilHi-T1j4NcgukkmRm8DtbXCYtIZLg1GXhCgTFo2ZzZuMOYpApuiYpt2lhF9PaUERBsueZqq4GMHyNB_x8hv1gElHxHiuYM6llNSeX0FKk7Zwod1CoCGdqyb16Kt98-iC4mTdCfXL5QOF6ChH1cux_UydnRplfFPiaIAGbIkvCMatot8lc6BPBv6Zxz0pFZdIpzSzrhycKVhJReuBUb7Z5LmOyJUHCeQxZhMv-RUQ" />
                        </div>
                        <div className="p-md">
                            <span className="text-label-sm font-bold text-primary dark:text-primary-fixed-dim uppercase tracking-wider">Agriculture</span>
                            <h3 className="text-h3 text-[20px] text-on-surface dark:text-inverse-on-surface mt-xs">Fazli Mango</h3>
                            <p className="text-body-sm text-on-surface-variant dark:text-outline-variant mt-sm">The giant of mangoes, known for its sweet pulp and distinct aroma.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}