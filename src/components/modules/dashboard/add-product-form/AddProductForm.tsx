import Image from "next/image";
export default function AddProductForm() {
  return (
    <main className="lg:ml-64 min-h-screen flex flex-col md:p-xl p-5">
      <header className="mb-xl flex items-center justify-between">
        <h2 className="font-h1 text-h2 md:block hidden text-primary dark:text-primary-fixed-dim">
          Add New GI Product
        </h2>

        <div className="flex items-center space-x-md">
          <button className="px-lg py-sm font-label-md text-label-md border border-primary text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim rounded-xl hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors">
            Cancel
          </button>
          <button className="px-lg py-sm font-label-md text-label-md bg-primary text-on-primary rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-md dark:text-gray-300">
            Register Product
          </button>
        </div>
      </header>
      <div className="space-y-lg flex-1">
        <div className="space-y-lg">
          {/* <!-- 1. Media Section --> */}
          <div className="bg-surface-container-lowest dark:bg-surface-container-highest border border-outline-variant dark:border-outline md:p-xl p-lg rounded-xl">
            <div className="flex items-center justify-between mb-lg">
              <h3 className="font-h3 md:text-h3 text-lg text-on-surface dark:text-inverse-on-surface">
                Product Media
              </h3>
              <span className="px-sm py-xs bg-primary-container text-on-primary-container rounded-full text-label-sm font-label-sm uppercase dark:bg-blue-900 dark:text-blue-100">
                Main Photo
              </span>
            </div>
            <div className="border-2 border-dashed border-outline-variant dark:border-outline rounded-xl p-xl flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer group bg-surface-container-low dark:bg-surface-dim">
              <div className="w-16 h-16 bg-surface-container dark:bg-surface-container-highest rounded-full flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-primary-container dark:text-outline-variant text-[32px]">
                  image
                </span>
              </div>
              <h4 className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface">
                Click to upload main product photo
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant mt-xs">
                PNG, JPG or WebP (max. 10MB)
              </p>
            </div>
          </div>
          {/* <!-- 2. Cultural & History --> */}
          <section className="bg-surface-container-lowest dark:bg-surface-container-highest border border-outline-variant dark:border-outline md:p-xl p-lg rounded-xl">
            <h3 className="font-h3 md:text-h3 text-lg text-on-surface dark:text-inverse-on-surface mb-lg">
              Cultural &amp; History
            </h3>
            <div className="space-y-lg">
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Cultural Significance &amp; History
                </label>
                <textarea
                  className="w-full p-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all resize-none dark:text-inverse-on-surface"
                  placeholder="Describe the cultural importance, UNESCO status, or traditional value..."
                  rows={4}
                ></textarea>
              </div>
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Detailed Product Description
                </label>
                <textarea
                  className="w-full p-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all resize-none dark:text-inverse-on-surface"
                  placeholder="Detail the physical characteristics and unique features..."
                  rows={4}
                ></textarea>
              </div>
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Etymology / Meaning
                </label>
                <input
                  className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                  placeholder="e.g. 'Jam' meaning flower and 'Dani' meaning vase"
                  type="text"
                />
              </div>
            </div>
          </section>
          {/* <!-- 3. GI Registry Information --> */}
          <section className="bg-surface-container-lowest dark:bg-surface-container-highest border border-outline-variant dark:border-outline md:p-xl p-lg rounded-xl">
            <h3 className="font-h3 md:text-h3 text-lg text-on-surface dark:text-inverse-on-surface mb-lg">
              GI Registry Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  GI Registration Number
                </label>
                <input
                  className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                  placeholder="e.g. BD-001"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Registered Year
                </label>
                <input
                  className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                  placeholder="e.g. 2016"
                  type="number"
                />
              </div>
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Origin District / Region
                </label>
                <input
                  className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                  placeholder="e.g. Narayanganj"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Product Category
                </label>
                <select className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all appearance-none cursor-pointer dark:text-inverse-on-surface">
                  <option value="textile">Textile</option>
                  <option value="food">Food</option>
                  <option value="craft">Craft</option>
                  <option value="agriculture">Agricultural</option>
                </select>
              </div>
              <div className="flex flex-col space-y-xs md:col-span-2">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Verification Status
                </label>
                <select className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all appearance-none cursor-pointer dark:text-inverse-on-surface">
                  <option value="verified">Verified</option>
                  <option value="unverified">Unverified</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
          </section>
          {/* <!-- 4. Status & Heritage Labels --> */}
          <section className="bg-surface-container-lowest dark:bg-surface-container-highest border border-outline-variant dark:border-outline md:p-xl p-lg rounded-xl">
            <h3 className="font-h3 md:text-h3 text-lg text-on-surface dark:text-inverse-on-surface mb-lg">
              Status &amp; Heritage Labels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Heritage Tag
                </label>
                <input
                  className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                  placeholder="e.g. Heritage Product"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  GI Badge Label
                </label>
                <input
                  className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                  placeholder="e.g. Verified GI"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                  Authenticity Status
                </label>
                <input
                  className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                  placeholder="e.g. Authentic"
                  type="text"
                />
              </div>
            </div>
          </section>
          {/* <!-- 5. The Art of Creation (Crafting Process) --> */}
          <section className="bg-surface-container-lowest dark:bg-surface-container-highest border border-outline-variant dark:border-outline md:p-xl p-lg rounded-xl">
            <h3 className="font-h3 md:text-h3 text-lg text-on-surface dark:text-inverse-on-surface mb-lg">
              The Art of Creation (Crafting Process)
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
              {/* <!-- Step 1 --> */}
              <div className="p-md bg-surface-container-low dark:bg-surface-container rounded-xl border border-outline-variant dark:border-outline">
                <span className="text-label-sm font-label-sm text-primary dark:text-primary-fixed-dim uppercase mb-sm block">
                  Step 1
                </span>
                <div className="space-y-md">
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                      Step Title
                    </label>
                    <input
                      className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                      placeholder="e.g. Raw Material Collection"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                      Step Description
                    </label>
                    <textarea
                      className="w-full p-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all resize-none dark:text-inverse-on-surface"
                      placeholder="Explain the process involved in this step..."
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* <!-- Step 2 --> */}
              <div className="p-md bg-surface-container-low dark:bg-surface-container rounded-xl border border-outline-variant dark:border-outline">
                <span className="text-label-sm font-label-sm text-primary dark:text-primary-fixed-dim uppercase mb-sm block">
                  Step 2
                </span>
                <div className="space-y-md">
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                      Step Title
                    </label>
                    <input
                      className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                      placeholder="e.g. Traditional Weaving"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                      Step Description
                    </label>
                    <textarea
                      className="w-full p-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all resize-none dark:text-inverse-on-surface"
                      placeholder="Explain the process involved in this step..."
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* <!-- Step 3 --> */}
              <div className="p-md bg-surface-container-low dark:bg-surface-container rounded-xl border border-outline-variant dark:border-outline">
                <span className="text-label-sm font-label-sm text-primary dark:text-primary-fixed-dim uppercase mb-sm block">
                  Step 3
                </span>
                <div className="space-y-md">
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                      Step Title
                    </label>
                    <input
                      className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                      placeholder="e.g. Pattern Design"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                      Step Description
                    </label>
                    <textarea
                      className="w-full p-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all resize-none dark:text-inverse-on-surface"
                      placeholder="Explain the process involved in this step..."
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* <!-- Step 4 --> */}
              <div className="p-md bg-surface-container-low dark:bg-surface-container rounded-xl border border-outline-variant dark:border-outline">
                <span className="text-label-sm font-label-sm text-primary dark:text-primary-fixed-dim uppercase mb-sm block">
                  Step 4
                </span>
                <div className="space-y-md">
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                      Step Title
                    </label>
                    <input
                      className="w-full h-12 px-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all dark:text-inverse-on-surface"
                      placeholder="e.g. Final Preparation"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">
                      Step Description
                    </label>
                    <textarea
                      className="w-full p-md bg-white dark:bg-surface-dim border border-outline-variant dark:border-outline rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all resize-none dark:text-inverse-on-surface"
                      placeholder="Explain the process involved in this step..."
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- 6. Bottom Information Cards --> */}
          <div className="flex flex-col lg:flex-row gap-lg">
            {/* <!-- Heritage Detail --> */}
            <div className="flex-1 bg-primary-container text-on-primary-container p-xl rounded-xl relative overflow-hidden h-[300px] shadow-lg dark:bg-blue-900 dark:text-blue-100">
              <div className="relative z-10 flex flex-col h-full">
                <span className="material-symbols-outlined mb-sm text-[40px]">
                  auto_awesome
                </span>
                <h3 className="font-h3 text-h3 mb-md leading-tight dark:text-white">
                  Heritage Detail
                </h3>
                <p className="font-body-md text-body-md opacity-90">
                  Capturing the soul of traditional craftsmanship ensures its
                  story lives on forever in the digital registry.
                </p>
                <div className="mt-auto flex items-center space-x-sm">
                  <span className="material-symbols-outlined">info</span>
                  <span className="font-label-sm text-label-sm dark:text-gray-400">
                    Fields matched with Heritage Detail View.
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 z-0 opacity-20">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ki6GDRUoWlhrSotsQupC_LOUDcHDqx_ZDnLBdSIAo4pK9E0MVZgHuToCgBbp9dXd-bjXORJ6CbH2B5GIMJ_iWCNcbZi2r8ghzmt-yJH-lByO-N10Bl1SFS0FHSl8dRhGPxIWbmjw9SoL5ifONeZNN5OBaYGOTZbrldygF0hpMnnONGM8jNQdHGc5Gn9Ebcn44hUODaqm-KJ0cgEwL7jjJX-ReJJmKCeM_8AFFRLnjvRfRNVuLgMsSfP1JfiFuDHdd57DPoup7Vk"
                />
              </div>
            </div>
            {/* <!-- Submission Readiness --> */}
            <div className="flex-1 bg-surface-container-lowest dark:bg-surface-container-highest border border-outline-variant dark:border-outline p-xl rounded-xl flex flex-col justify-center">
              <h4 className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface mb-md">
                Submission Readiness
              </h4>
              <div className="space-y-md">
                <div className="flex items-center justify-between">
                  <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
                    Registration Progress
                  </span>
                  <span className="font-label-sm text-label-sm text-primary dark:text-primary-fixed-dim">
                    0%
                  </span>
                </div>
                <div className="w-full bg-surface-container dark:bg-surface-dim h-2 rounded-full overflow-hidden">
                  <div className="bg-primary w-[5%] h-full rounded-full"></div>
                </div>
                {/* <p className="text-body-sm text-on-surface-variant dark:text-outline-variant italic">Complete the "Cultural &amp; History" and "GI Registry Information" sections to begin validation.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
