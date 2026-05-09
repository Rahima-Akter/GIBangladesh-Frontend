export default function Saved() {
    return <main className="lg:ml-64 grow p-xl -mt-2">
        {/* <!-- Tab Navigation & Filters --> */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-xl border-b border-outline-variant">
            <div className="flex gap-lg">
                <button className="pb-md border-b-2 border-primary text-primary font-bold font-label-md text-label-md">All Items</button>
                <button className="pb-md border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">Products</button>
                <button className="pb-md border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">Blogs</button>
            </div>
            <div className="flex items-center gap-sm mb-md">
                <div className="relative">
                    <input className="bg-surface border border-outline-variant rounded-lg px-md py-sm text-body-sm font-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all w-64" placeholder="Search saved items..." type="text" />
                    <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
                </div>
            </div>
        </div>
        {/* <!-- Bento Grid Gallery --> */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
            {/* Blog Post Card */}
            <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden group">
                <div className="h-48 relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-quality editorial photograph of traditional Bangladeshi pottery being shaped on a wheel. The focus is on the clay-covered hands of the potter, highlighting the intricate movement. The lighting is dramatic, high-contrast, and focused on the center of the wheel. The color palette is earthy with deep terracotta and muted blues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh42LC6NeQp0QVGeJfjHxJ9NKIfzseqUz7qETWbgfZvcIJuK_X1etyESqgrHzBNzomZ0UziIJ-ZJG1Lutkkpj4sUw3wi0UoYIxkLkS8kOTu8jGDAwuFcqWHQgORLuZHsHIK26pkNZvPm3omaqg-C1DQBEyEfIahyOIPfNa1e16SyJ1pDWPCzboug0vs5ylsQ1E3Ps_f0sKWC2cCXX93rV0WZ7vXNNWXbTH_aE9Vfea10US0B7vHdogXw1EQulVQZOZZk11eZQ9Eo4" />
                    <button className="absolute top-md right-md bg-white/90 p-sm rounded-full text-primary hover:text-error transition-all">
                        <span className="material-symbols-outlined" data-icon="bookmark" style={{ fontVariationSettings: "FILL" }}>bookmark</span>
                    </button>
                </div>
                <div className="p-lg">
                    <div className="text-label-sm font-label-sm text-primary mb-xs">Culture &amp; Heritage</div>
                    <h4 className="font-body-lg font-bold text-on-background mb-sm leading-tight">Preserving the Clay Artisans of Bijoypur</h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mb-md">Exploring the unique terracotta traditions and the GI status of Bijoypur Pottery.</p>
                    <div className="flex items-center gap-sm">
                        <span className="material-symbols-outlined text-[18px] text-outline" data-icon="schedule">schedule</span>
                        <span className="text-label-sm font-label-sm text-outline">5 min read</span>
                    </div>
                </div>
            </div>
            {/* <!-- Another Product Card --> */}
            <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden group">
                <div className="h-48 relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up high-resolution product shot of Nakshi Kantha, a traditional embroidered quilt from Bangladesh. The image shows the intricate stitching patterns of mythological figures and nature. The lighting is bright and even, showcasing every thread detail. The background is a minimalist light grey, maintaining the professional design aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFr-32nQqQMHWwxwo-OogG5bDE5p1RO_VBtO1nE6pfwOjX0ddDw6YiS1Kzg_-0WTv35poe2ctFuICrvn4TFfGW5nVZAZQaJfINZgwLLekq2bx4L9dQKhBPg1a3LS9tMtHWrFQZSQwEgomPeyqVJgrsDvPXP3cAYSR2szhnA19uVZza5toV_8aDcNWujYXmjiRkOeZJZi4xPJ_-54yCkg1GwMTw8ZQpi3jCYnDnEPIRR0yMY15N9uym8aVEAB-OnE-QtYr13LpEvWk" />
                    <button className="absolute top-md right-md bg-white/90 p-sm rounded-full text-primary hover:text-error transition-all">
                        <span className="material-symbols-outlined" data-icon="bookmark" style={{ fontVariationSettings: 'FILL' }}>bookmark</span>
                    </button>
                </div>
                <div className="p-lg">
                    <h4 className="font-body-lg font-bold text-on-background mb-xs">Nakshi Kantha Quilt</h4>
                    <div className="text-label-sm font-label-sm text-on-surface-variant mb-md">Jessore Region Heritage</div>
                    <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">Tk 12,500</span>
                        <button className="text-primary font-bold hover:underline font-label-md text-label-md">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
}