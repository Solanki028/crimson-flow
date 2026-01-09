export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <h1 className="text-3xl font-display font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="mt-8 space-y-6">
                <section>
                    <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
                    <p>
                        By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on NWB Fintech's website for personal,
                        non-commercial transitory viewing only.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
                    <p>
                        The materials on NWB Fintech's website are provided on an 'as is' basis. NWB Fintech makes no warranties, expressed or implied,
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>
            </div>
        </div>
    );
}
