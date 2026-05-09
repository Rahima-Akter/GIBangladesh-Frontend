export default function AiTools() {
    return (
        <main className="grow lg:ml-64 p-lg md:p-2xl bg-surface-container-low dark:bg-on-background">
            <div className="max-w-6xl mx-auto">
                {/* <!-- AI Tools Grid --> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
                    {/* <!-- Tool 1: AI Content Generator --> */}
                    <div className="bg-white dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-xl p-lg flex flex-col h-[480px]">
                        <div className="flex items-center gap-md mb-md">
                            <div className="w-10 h-10 bg-primary-container/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">edit_note</span>
                            </div>
                            <h3 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface">AI Content Generator</h3>
                        </div>
                        <div className="space-y-md grow">
                            <div>
                                <label className="block font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant mb-xs">Topic or Title</label>
                                <input className="w-full bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg px-md py-sm text-body-sm focus:ring-primary focus:border-primary outline-none transition-all dark:text-inverse-on-surface" placeholder="Enter content topic..." type="text" />
                            </div>
                            <div>
                                <label className="block font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant mb-xs">Tone Style</label>
                                <select className="w-full bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg px-md py-sm text-body-sm focus:ring-primary focus:border-primary outline-none transition-all dark:text-inverse-on-surface cursor-pointer">
                                    <option>Formal</option>
                                    <option>Short & Punchy</option>
                                    <option>Detailed Analysis</option>
                                </select>
                            </div>
                            <button className="w-full bg-primary text-on-primary dark:bg-primary-fixed dark:text-on-primary-fixed font-bold py-sm rounded-lg flex items-center justify-center gap-sm hover:opacity-90 transition-opacity cursor-pointer">
                                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                                Generate
                            </button>
                            <div className="relative bg-surface-container dark:bg-on-surface-variant/10 rounded-lg p-md h-32 overflow-y-auto border border-dashed border-outline dark:border-on-surface-variant/30">
                                <p className="text-body-sm text-on-surface-variant dark:text-outline-variant">Generated content will appear here...</p>
                                <button className="absolute top-2 right-2 p-xs bg-white dark:bg-on-surface-variant/20 rounded shadow-sm hover:bg-surface-container-high dark:hover:bg-on-surface-variant/40 transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-[18px] text-primary dark:text-primary-fixed-dim">content_copy</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Tool 2: AI Text Rewriter --> */}
                    <div className="bg-white dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-xl p-lg flex flex-col h-[480px]">
                        <div className="flex items-center gap-md mb-md">
                            <div className="w-10 h-10 bg-secondary-container/10 dark:bg-secondary/20 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed">refresh</span>
                            </div>
                            <h3 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface">AI Text Rewriter</h3>
                        </div>
                        <div className="space-y-md flex-grow">
                            <div>
                                <label className="block font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant mb-xs">Original Text</label>
                                <textarea className="w-full bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg px-md py-sm text-body-sm h-24 focus:ring-secondary focus:border-secondary outline-none transition-all dark:text-inverse-on-surface resize-none" placeholder="Paste your text here..."></textarea>
                            </div>
                            <div className="flex gap-md">
                                <div className="flex-grow">
                                    <select className="w-full bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-lg px-md py-sm text-body-sm focus:ring-secondary focus:border-secondary outline-none transition-all dark:text-inverse-on-surface cursor-pointer">
                                        <option>Professional</option>
                                        <option>Simple</option>
                                        <option>Short</option>
                                        <option>Formal</option>
                                    </select>
                                </div>
                                <button className="bg-secondary text-on-secondary dark:bg-secondary-fixed dark:text-on-secondary-fixed font-bold px-lg py-sm rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                                    Rewrite
                                </button>
                            </div>
                            <div className="relative bg-surface-container dark:bg-on-surface-variant/10 rounded-lg p-md h-32 overflow-y-auto border border-dashed border-outline dark:border-on-surface-variant/30">
                                <div className="flex items-center gap-xs mb-xs text-green-600 dark:text-green-400">
                                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                                    <span className="text-[10px] font-bold uppercase">Success</span>
                                </div>
                                <p className="text-body-sm text-on-surface dark:text-inverse-on-surface italic">"The premium Bangladeshi Jamdani is celebrated for its exquisite craftsmanship and historical significance..."</p>
                                <button className="absolute top-2 right-2 p-xs bg-white dark:bg-on-surface-variant/20 rounded shadow-sm cursor-pointer">
                                    <span className="material-symbols-outlined text-[18px] text-secondary dark:text-secondary-fixed">content_copy</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Tool 3: AI Hashtag Generator --> */}
                    <div className="bg-surface-container-lowest dark:bg-inverse-surface border border-outline-variant dark:border-on-surface-variant rounded-xl p-lg flex flex-col h-[480px]">
                        <div className="flex items-center gap-md mb-md">
                            <div className="w-10 h-10 bg-tertiary-container/10 dark:bg-tertiary/20 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-tertiary dark:text-tertiary-fixed-dim">tag</span>
                            </div>
                            <h3 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface text-body-lg">AI Hashtag Generator</h3>
                        </div>
                        <div className="space-y-md flex-grow">
                            <div>
                                <label className="block font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant mb-xs">Topic/Niche</label>
                                <input className="w-full bg-surface dark:bg-on-surface-variant border-outline-variant dark:border-outline rounded-lg px-md py-sm text-body-sm focus:ring-tertiary focus:border-tertiary dark:text-inverse-on-surface" placeholder="e.g. Rajshahi Silk, Nakshi Kantha" type="text" />
                            </div>
                            <button className="w-full bg-tertiary text-on-tertiary dark:bg-tertiary-fixed-dim dark:text-on-tertiary-fixed font-bold py-sm rounded-lg hover:opacity-90 transition-opacity">
                                Generate Hashtags
                            </button>
                            <div className="relative bg-surface-container dark:bg-on-surface-variant/50 rounded-lg p-md h-52 overflow-y-auto border border-dashed border-outline">
                                {/* Loading state mock */}
                                <div className="flex flex-wrap gap-sm">
                                    <span className="bg-white dark:bg-on-surface-variant px-sm py-xs rounded border border-outline-variant text-label-sm text-tertiary dark:text-tertiary-fixed-dim">#GIBangladesh</span>
                                    <span className="bg-white dark:bg-on-surface-variant px-sm py-xs rounded border border-outline-variant text-label-sm text-tertiary dark:text-tertiary-fixed-dim">#SilkOfBengal</span>
                                    <span className="bg-white dark:bg-on-surface-variant px-sm py-xs rounded border border-outline-variant text-label-sm text-tertiary dark:text-tertiary-fixed-dim">#RajshahiHeritage</span>
                                    <span className="bg-white dark:bg-on-surface-variant px-sm py-xs rounded border border-outline-variant text-label-sm text-tertiary dark:text-tertiary-fixed-dim">#AuthenticGI</span>
                                </div>
                                <button className="mt-md w-full border border-tertiary text-tertiary dark:border-tertiary-fixed-dim dark:text-tertiary-fixed-dim py-xs rounded font-bold text-label-sm hover:bg-tertiary/5 transition-colors">
                                    Copy All Hashtags
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Tool 4: AI Chat Assistant --> */}
                    <div className="bg-white dark:bg-on-surface border border-outline-variant dark:border-on-surface-variant/30 rounded-xl p-lg flex flex-col h-[480px]">
                        <div className="flex items-center gap-md mb-md">
                            <div className="w-10 h-10 bg-primary-container/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">forum</span>
                            </div>
                            <h3 className="font-h3 text-h3 text-on-surface dark:text-inverse-on-surface">AI Chat Assistant</h3>
                        </div>
                        <div className="flex-grow flex flex-col overflow-hidden">
                            <div className="flex-grow chat-scroll overflow-y-auto space-y-md mb-md px-xs">
                                <div className="flex gap-sm">
                                    <div className="w-6 h-6 rounded-full bg-primary-container dark:bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-[14px] text-primary dark:text-primary-fixed-dim">smart_toy</span>
                                    </div>
                                    <div className="bg-surface-container dark:bg-on-surface-variant/10 px-md py-sm rounded-xl rounded-tl-none border border-outline-variant dark:border-on-surface-variant/30">
                                        <p className="text-[13px] text-on-surface dark:text-inverse-on-surface">Hello! How can I help you today with your GI product research?</p>
                                    </div>
                                </div>
                                <div className="flex gap-sm justify-end">
                                    <div className="bg-primary text-on-primary dark:bg-primary-fixed dark:text-on-primary-fixed px-md py-sm rounded-xl rounded-tr-none shadow-sm">
                                        <p className="text-[13px]">Tell me about Hilsa fish registration.</p>
                                    </div>
                                </div>
                                {/* <!-- Typing Indicator --> */}
                                <div className="flex gap-sm items-center">
                                    <div className="w-6 h-6 rounded-full bg-primary-container dark:bg-primary-fixed/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-[14px] text-primary dark:text-primary-fixed-dim">smart_toy</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-outline-variant dark:bg-on-surface-variant/30 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-outline-variant dark:bg-on-surface-variant/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-outline-variant dark:bg-on-surface-variant/30 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="relative">
                                    <input className="w-full bg-white dark:bg-on-surface-variant/10 border border-outline-variant dark:border-on-surface-variant/30 rounded-full pl-md pr-[50px] py-sm text-body-sm focus:ring-primary focus:border-primary outline-none transition-all dark:text-inverse-on-surface" placeholder="Type message..." type="text" />
                                    <button className="absolute right-1 top-1 bottom-1 aspect-square bg-primary dark:bg-primary-fixed text-on-primary dark:text-on-primary-fixed rounded-full flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                                        <span className="material-symbols-outlined text-[18px]">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Global Feedback Area --> */}
                <div className="mt-2xl flex flex-wrap gap-md justify-center">
                    <div className="flex items-center gap-sm px-md py-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-lg">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        <span className="text-label-sm">All models are currently online</span>
                    </div>
                    <div className="flex items-center gap-sm px-md py-xs bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg">
                        <span className="material-symbols-outlined text-[18px]">error</span>
                        <span className="text-label-sm">High latency detected in Translation API</span>
                    </div>
                </div>
            </div>
        </main>
    );
}