import { IconLogin2 } from "@tabler/icons-react";
import Link from "next/link";

export default function KnowledgeHub() {
    return (
        <section className="py-3xl px-lg bg-surface-container-lowest dark:bg-on-surface-variant/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex md:flex-row flex-col justify-between items-end mb-2xl">
                    <div>
                        <h2 className="text-h2 text-on-surface dark:text-inverse-on-surface mb-sm">Knowledge Hub</h2>
                        <p className="text-body-md text-on-surface-variant dark:text-outline-variant">Latest updates on GI laws, trade, and heritage.</p>
                    </div>
                    <Link href="/blogs" className="text-primary dark:text-primary-fixed-dim font-bold flex items-center gap-xs hover:underline">
                        View All Stories <span className="material-symbols-outlined"><IconLogin2 /></span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
                    {/* <!-- Blog 1 --> */}
                    <article className="flex flex-col gap-md">
                        <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant dark:border-outline">
                            <img alt="Blog 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8BZusro7OH8UyNr11I53LXvu9UVd_qcajCQf6Jp20bWHTfSdXb5tGBOjLn_OxHM-RflnqmeAwKSvL8utPM_sFsH-0UEs08yGBqRm7Cqk59DNL9dSei8_5taZOabQj1y4ctPwBeuboOn4Ktt4BS3wEOm8JQC03qzO77kumSDs4VkdA1n0slsF3amzR46Js_dxh9YAUkAEV_O9aik2F-52Nv_tVhL10fp82y5BGBx-YD9ZZVn9IWMFnVwe3pZKQG-43WzQYUyKpPo" />
                        </div>
                        <div>
                            <time className="text-label-sm text-on-surface-variant dark:text-outline-variant">April 12, 2024</time>
                            <h3 className="text-h3 text-[20px] text-on-surface dark:text-inverse-on-surface mt-xs hover:text-primary cursor-pointer transition-colors">How GI Protection Boosts Rural Economy</h3>
                        </div>
                    </article>
                    {/* <!-- Blog 2 --> */}
                    <article className="flex flex-col gap-md">
                        <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant dark:border-outline">
                            <img alt="Blog 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGifNQwmtPoxNztQGJIzESVwzv4dsjL25f9aK350Q14IS77vwMhtrz_KAEWxYOqmVWoV6PYhy-FlaMcA009hbbnEuZUtOE__QE2Da_y_Frt3l6k77qRZqOyog0O9qViWRy2air7RJS93KdFx9WFsvt6dFUlyAfV4NxOmvNVoI_TeXLu_w2CsjMoPmfHJFAr1Td2U9OEWEn1C8sqy2Wv0W_wDqgM5-IPPbfEskI_mgsIz4YmgUoN7ZQuhCdYZimi0f-ubGwFmJiR4I" />
                        </div>
                        <div>
                            <time className="text-label-sm text-on-surface-variant dark:text-outline-variant">March 28, 2024</time>
                            <h3 className="text-h3 text-[20px] text-on-surface dark:text-inverse-on-surface mt-xs hover:text-primary cursor-pointer transition-colors">The Future of AI in Artisanal Verification</h3>
                        </div>
                    </article>
                    {/* <!-- Blog 3 --> */}
                    <article className="flex flex-col gap-md">
                        <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant dark:border-outline">
                            <img alt="Blog 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAabXvHC-yyEgwzg7O-3fhnit1TKEKOhc5v4Zn8ZciVsK1SSO1KULG6Eqm1cKdDpTFqe_XfC1lYFxgc_6zAYtXFLG8vOMzJxUg4jsJGhab5ww9uoNun5RPmG58LJMyntIbA8oiZjSdGz6J8ecwx5StV961wX8vG1kzobhws7lnhhx4M-KbE3U5RKmMt2ptObmIo7NrtX3WZgx6WmH9-ZiWPlZQWVXp1YbTY9ll3OD8ZHTeAKi8_c2Uzvb0jQb_q9a5GYwFxtP0MsHo" />
                        </div>
                        <div>
                            <time className="text-label-sm text-on-surface-variant dark:text-outline-variant">March 15, 2024</time>
                            <h3 className="text-h3 text-[20px] text-on-surface dark:text-inverse-on-surface mt-xs hover:text-primary cursor-pointer transition-colors">Protecting the 'Dhakai Muslin' Legacy</h3>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}