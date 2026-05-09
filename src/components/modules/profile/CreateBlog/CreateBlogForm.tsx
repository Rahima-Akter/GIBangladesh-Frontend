export default function CreateBlogForm() {
    return (
        <main className="lg:ml-64 flex-1 p-xl bg-background dark:bg-inverse-surface/10">
            <div className="max-w-4xl mx-auto">
                {/* <!-- Header Actions --> */}
                <div className="flex justify-between items-end mb-lg">
                    <div>
                        <h1 className="font-h2 text-h1 text-primary dark:text-primary-fixed-dim">Create New Blog</h1>
                    </div>
                    <div className="flex gap-md">
                        <button className="px-lg py-sm rounded-lg border border-primary dark:border-primary-fixed-dim text-primary dark:text-primary-fixed-dim font-label-md hover:bg-primary/5 dark:hover:bg-primary-fixed-dim/5 transition-all cursor-pointer">
                            Save as Draft
                        </button>
                        <button className="px-lg py-sm rounded-lg bg-primary-container dark:bg-primary-fixed text-white dark:text-on-primary-fixed font-label-md hover:opacity-90 active:scale-95 transition-all cursor-pointer">
                            Publish Post
                        </button>
                    </div>
                </div>
                {/* <!-- Form Card --> */}
                <div className="bg-white dark:bg-on-surface p-xl rounded-xl border border-outline-variant dark:border-on-surface-variant/30 space-y-xl">
                    {/* <!-- Title Input --> */}
                    <div className="space-y-xs">
                        <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Article Title</label>
                        <input className="w-full px-md py-sm bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-body-lg font-body-lg dark:text-inverse-on-surface" placeholder="e.g. The Timeless Art of Jamdani Weaving in Sonargaon" type="text" />
                    </div>
                    {/* <!-- Grid for Media & Category --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                        {/* <!-- Featured Image Selector --> */}
                        <div className="space-y-xs">
                            <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Featured Image</label>
                            <div className="relative group cursor-pointer border-2 border-dashed border-outline-variant dark:border-on-surface-variant/30 rounded-xl overflow-hidden hover:border-primary transition-all aspect-video flex items-center justify-center bg-surface-container-low dark:bg-on-surface-variant/10">
                                <img alt="Jamdani Pattern" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" data-alt="A macro photograph showcasing the intricate, hand-woven geometric patterns of a traditional Jamdani fabric. The soft focus highlights the delicate cotton threads in a palette of indigo blue and off-white. The lighting is soft and natural, emphasizing the artisanal texture and cultural heritage of Bangladeshi weaving." src="https://lh3.googleusercontent.com/aida/ADBb0uglTbiB6BstAbdnKqXzx3Jmn5csg1OAwMaveKX9pMeoVDvIe_4EIXubhfeBY_VxJB68gOy9PQGtt1WligtHEznqKvEhECZm2U7cOk2HOiHid_fpQrzxh9VAix6IT08CoErGlHFfOZxYcsV-tyVG2vYO0NwJ3iIEZvBoBiBAL_1zjJiClgIcHOm5XCbBzTzie2cazJoDZsRv4FxgNGwp4xsWcoH_LRsQ3V135l7RUB6Rn8L8v_CF9UNuNA" />
                                <div className="relative z-10 flex flex-col items-center text-on-surface-variant dark:text-outline-variant group-hover:text-primary dark:group-hover:text-primary-fixed-dim">
                                    <span className="material-symbols-outlined text-3xl" data-icon="add_photo_alternate">add_photo_alternate</span>
                                    <span className="font-label-sm mt-sm">Click to change cover image</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Category & Tags --> */}
                        <div className="flex flex-col gap-xl">
                            <div className="space-y-xs">
                                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">GI Product Category</label>
                                <input className="w-full px-md py-sm bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-inverse-on-surface" placeholder="Add e.g. Agriculture" type="text" />
                            </div>
                            <div className="space-y-xs">
                                <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Tags</label>
                                <input className="w-full px-md py-sm bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-inverse-on-surface" placeholder="Add tags separated by commas" type="text" />
                                <div className="flex flex-wrap gap-xs mt-sm">
                                    <span className="px-sm py-[2px] bg-secondary-container dark:bg-secondary-fixed-dim/20 text-on-secondary-container dark:text-secondary-fixed-dim rounded-full text-label-sm flex items-center gap-xs">
                                        #Traditional <button className="material-symbols-outlined text-[14px] cursor-pointer" data-icon="close">close</button>
                                    </span>
                                    <span className="px-sm py-[2px] bg-secondary-container dark:bg-secondary-fixed-dim/20 text-on-secondary-container dark:text-secondary-fixed-dim rounded-full text-label-sm flex items-center gap-xs">
                                        #GI_Status <button className="material-symbols-outlined text-[14px] cursor-pointer" data-icon="close">close</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Content Editor Placeholder --> */}
                    <div className="space-y-xs">
                        <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Article Content</label>
                        <div className="border border-outline-variant dark:border-on-surface-variant/30 rounded-lg overflow-hidden">
                            <div className="bg-surface-container dark:bg-on-surface-variant/20 border-b border-outline-variant dark:border-on-surface-variant/30 px-md py-sm flex gap-md items-center">
                                <button className="material-symbols-outlined hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer" data-icon="format_bold">format_bold</button>
                                <button className="material-symbols-outlined hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer" data-icon="format_italic">format_italic</button>
                                <button className="material-symbols-outlined hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer" data-icon="format_list_bulleted">format_list_bulleted</button>
                                <button className="material-symbols-outlined hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer" data-icon="link">link</button>
                                <div className="w-[1px] h-4 bg-outline-variant dark:bg-on-surface-variant/30 mx-xs"></div>
                                <button className="material-symbols-outlined hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer" data-icon="format_quote">format_quote</button>
                                <button className="material-symbols-outlined hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer" data-icon="image">image</button>
                            </div>
                            <textarea className="w-full p-md bg-white dark:bg-on-surface-variant/10 border-none focus:ring-0 outline-none resize-none min-h-[400px] text-body-md font-body-md dark:text-inverse-on-surface" placeholder="Start writing your article here..." rows={15}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}