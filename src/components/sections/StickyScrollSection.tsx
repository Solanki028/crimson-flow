import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, BarChart3, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Unified Banking Experience',
    description: 'Seamlessly integrate all banking operations into a single, intuitive platform. Streamline workflows and enhance customer satisfaction.',
    highlights: ['Single dashboard', 'Unified workflows', 'Enhanced UX'],
  },
  {
    icon: Shield,
    title: 'Advanced Risk Management',
    description: 'Comprehensive risk assessment and fraud prevention powered by AI. Protect your institution and customers with intelligent monitoring.',
    highlights: ['AI-powered detection', 'Real-time alerts', 'Risk scoring'],
  },
  {
    icon: BarChart3,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business. Our cloud-native platform handles millions of transactions while maintaining performance.',
    highlights: ['Cloud-native', 'Auto-scaling', '99.9% uptime'],
  },
];

export const StickyScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

  return (
    <section ref={containerRef} className="relative bg-white py-20 lg:py-0">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:min-h-[300vh]">
          {/* Left: Scrolling Content */}
          <div className="space-y-32 lg:space-y-0 py-20 lg:py-32">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-20 lg:mb-0 lg:h-screen lg:flex lg:flex-col lg:justify-center"
            >
              {/* <span className="text-blue-600 font-semibold mb-4 block text-sm tracking-wider uppercase">WHY NWB</span> */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Powering the Future of{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Finance</span>
              </h2>
              <div className="mb-6">
                <img
                  src="/stats-visuals.png"
                  alt="NWB Platform Dashboard"
                  className="w-full max-w-md h-auto rounded-xl shadow-lg border border-border"
                />
              </div>
              <p className="text-lg text-muted-foreground max-w-xl">
                Our platform combines cutting-edge technology with battle-tested reliability
                to deliver the infrastructure your business needs.
              </p>
            </motion.div>

            {/* Feature Blocks */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="lg:h-screen lg:flex lg:flex-col lg:justify-center"
              >
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky Dashboard Mockup */}
          <div className="hidden lg:block relative">
            <div className="sticky top-0 h-screen flex items-center py-20">
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative w-full"
              >
                {/* Enhanced Banking Dashboard Mockup */}
                <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="flex-1 bg-background rounded-lg px-4 py-1.5 text-xs text-muted-foreground border border-border flex items-center gap-2">
                        <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        dashboard.NWB.com
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">Banking Dashboard</h3>
                        <p className="text-sm text-muted-foreground">Real-time transaction monitoring</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-muted-foreground">Live</span>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: 'Total Volume', value: '₹2.4M', change: '+12.5%', trend: 'up' },
                        { label: 'Transactions', value: '14,582', change: '+8.2%', trend: 'up' },
                        { label: 'Success Rate', value: '99.8%', change: '+0.3%', trend: 'up' },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-card rounded-xl p-4 shadow-sm border border-border"
                        >
                          <div className="text-xs text-muted-foreground mb-2">{stat.label}</div>
                          <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-semibold text-green-600">{stat.change}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="bg-card rounded-xl p-5 shadow-sm border border-border mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-foreground">Transaction Volume</div>
                        <div className="text-xs text-muted-foreground">Last 7 days</div>
                      </div>
                      <div className="h-40 flex items-end justify-between gap-2">
                        {[65, 75, 55, 85, 70, 90, 80].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 flex flex-col items-center gap-2"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <div
                              className="w-full rounded-t-lg bg-gradient-to-t from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-colors cursor-pointer"
                              style={{ height: `${height}%` }}
                            />
                            <div className="text-[10px] text-muted-foreground font-medium">
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="bg-card rounded-xl p-5 shadow-sm border border-border">
                      <div className="text-sm font-semibold text-foreground mb-4">Recent Activity</div>
                      <div className="space-y-3">
                        {[
                          { type: 'UPI', amount: '₹1,245', status: 'completed', time: '2m ago' },
                          { type: 'Card', amount: '₹890', status: 'completed', time: '5m ago' },
                          { type: 'Transfer', amount: '₹2,340', status: 'processing', time: '8m ago' },
                        ].map((tx, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className="flex items-center justify-between py-2 border-b border-border last:border-0"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                                }`}>
                                {tx.status === 'completed' ? (
                                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4 text-yellow-600 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                  </svg>
                                )}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-foreground">{tx.type} Payment</div>
                                <div className="text-xs text-muted-foreground">{tx.time}</div>
                              </div>
                            </div>
                            <div className="text-sm font-semibold text-foreground">{tx.amount}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-primary/20 blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl bg-secondary/20 blur-2xl"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Dashboard Preview */}
          <div className="lg:hidden mt-12">
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-background space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Volume', value: '₹2.4M' },
                    { label: 'Txns', value: '14K' },
                    { label: 'Rate', value: '99.8%' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-card p-3 rounded-xl shadow-sm border border-border text-center">
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-sm font-bold text-foreground mt-1">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
                  <div className="h-32 flex items-end justify-between gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-secondary"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};