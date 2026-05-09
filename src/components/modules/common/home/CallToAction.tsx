export default function CallToAction() {
    return (
        <section className="py-3xl px-lg bg-surface-container-highest dark:bg-on-surface-variant/10 transition-colors duration-300">
            <div className="mx-auto text-center">
                <h2 className="text-h1 text-on-surface dark:text-inverse-on-surface mb-md">Ready to join the ecosystem?</h2>
                <p className="text-body-lg text-on-surface-variant dark:text-outline-variant mb-xl">
                    Whether you are a producer, an exporter, or a heritage lover,<br /> GIBangladesh provides the tools you need to connect with authenticity.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-md">
                    <button className="bg-primary dark:bg-primary-fixed-dim text-on-primary dark:text-on-primary-fixed px-3xl py-md rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    )
}