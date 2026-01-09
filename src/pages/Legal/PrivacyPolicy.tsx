export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <h1 className="text-3xl font-display font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="mt-8 space-y-6">
                <section>
                    <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                    <p>
                        Welcome to NWB Fintech. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">2. Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        Identity Data, Contact Data, Technical Data, and Usage Data.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        Where we need to perform the contract we are about to enter into or have entered into with you.
                    </p>
                </section>
            </div>
        </div>
    );
}
