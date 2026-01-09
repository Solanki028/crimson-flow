export default function CookiePolicy() {
    return (
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <h1 className="text-3xl font-display font-bold mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="mt-8 space-y-6">
                <section>
                    <h2 className="text-xl font-semibold mb-3">1. What Are Cookies</h2>
                    <p>
                        Cookies are small text files that are placed on your computer or mobile device by websites that you visit.
                        They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">2. How We Use Cookies</h2>
                    <p>
                        We use cookies to understand how you use our website and to improve your experience.
                        This includes personalizing content and ads, providing social media features and analyzing our traffic.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">3. Managing Cookies</h2>
                    <p>
                        Most web browsers allow some control of most cookies through the browser settings.
                        To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
                    </p>
                </section>
            </div>
        </div>
    );
}
