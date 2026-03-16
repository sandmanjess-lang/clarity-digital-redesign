import { motion } from "framer-motion";
import { Target, Briefcase, Scale, Users, Globe, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  { icon: Briefcase, title: "Capital Raising", desc: "Equity and debt fundraising for growth, expansion, and recapitalisation." },
  { icon: Target, title: "Mergers & Acquisitions", desc: "Buy-side and sell-side advisory for acquisitions, mergers, and disposals." },
  { icon: Scale, title: "Valuations", desc: "Independent business valuations for transactions, disputes, and compliance." },
  { icon: Users, title: "BEE Transactions", desc: "Structuring and advising on black economic empowerment transactions." },
  { icon: Globe, title: "Strategic Consulting", desc: "Strategic review, market analysis, and advisory for corporate decision-making." },
  { icon: Shield, title: "Management Buy-outs", desc: "Structuring and funding management buy-outs and buy-ins." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }}
        />
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
              Independent Corporate Finance Advisors
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
              Clarity Group specialises in providing independent, personalised corporate finance advice to unlisted corporates and entrepreneurs throughout Southern Africa.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
      </section>

      {/* About content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-foreground mb-6">
                Our Approach
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
                Clarity Advisors focuses on providing independent, specialised corporate finance advice to unlisted corporates and entrepreneurs. Our range of services includes capital raising, mergers and acquisitions, disposals, BEE transactions, valuations, and strategic consulting.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
                We pride ourselves on providing a personalised approach to our clients, ensuring that senior professionals are directly involved in every engagement. This hands-on model guarantees the highest quality of service and attention to detail.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                Our team brings over 20 years of experience spanning investment banking, private equity, and corporate finance advisory, combined with a global network of institutional and private capital providers.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "R5B+", label: "Transaction Value" },
                { value: "50+", label: "Deals Completed" },
                { value: "Global", label: "Network Reach" },
              ].map((stat, i) => (
                <motion.div key={stat.label} variants={fadeUp} custom={i} className="glass-card p-6 text-center">
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Our Expertise</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-foreground">Services We Offer</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="glass-card p-7">
                <div className="w-11 h-11 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
