import { ArrowUpRight, Check, Shield, CreditCard, Banknote, Globe } from 'lucide-react';

const partners = [
    {
        name: "Cashfree Payments",
        description: "Complete payments and banking platform for businesses in India.",
        color: "from-orange-500 to-red-500",
        icon: CreditCard
    },
    {
        name: "Paysprint",
        description: "Next-gen API infrastructure for unified open banking.",
        color: "from-blue-500 to-cyan-500",
        icon: Globe
    },
    {
        name: "Infibeam Avenues",
        description: "Digital payment solutions and enterprise software platforms.",
        color: "from-purple-500 to-pink-500",
        icon: Banknote
    },
    {
        name: "Razorpay",
        description: "Full-stack financial solutions for Indian businesses.",
        color: "from-blue-600 to-indigo-600",
        icon: Shield
    },
    {
        name: "PayMoney",
        description: "Secure and fast digital payment processing services.",
        color: "from-green-500 to-emerald-500",
        icon: Banknote
    }
];

export default function Partner() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Our Strategic Partners
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Collaborating with industry leaders to deliver secure, reliable, and innovative financial solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Gradient Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${partner.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                    <partner.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                                    {partner.name}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {partner.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-muted/30 rounded-2xl border border-border text-center">
                    <h3 className="text-2xl font-bold font-display mb-4">Become a Partner</h3>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        Join our network of industry-leading organizations and help us shape the future of fintech.
                    </p>
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25">
                        Contact for Partnership
                    </button>
                </div>
            </div>
        </div>
    );
}
