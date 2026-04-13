import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SEO, { serviceSchema, breadcrumbSchema } from "@/components/SEO";

const benefits = [
  "BEE ownership transaction structuring and advisory",
  "Employee share ownership plans (ESOPs)",
  "Community and broad-based trust structures",
  "BEE funding and financing solutions",
  "Scorecard optimisation and compliance strategy",
  "Independent BEE valuations and fairness opinions",
];

const BeeTransactions = () => (
  <Layout>
    <SEO
      title="BEE Transactions — Black Economic Empowerment Advisory"
      description="Clarity Group provides expert BEE transaction structuring and advisory in South Africa. We help companies meet transformation objectives through ownership transactions, ESOPs, trust structures, and BEE compliance strategies."
      canonical="/services/bee-transactions"
      jsonLd={[
        serviceSchema("BEE Transactions", "Structuring and advising on black economic empowerment transactions across Southern Africa."),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "BEE Transactions", url: "/services/bee-transactions" },
        ]),
      ]}
    />

    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }} />
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>Our Services</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>BEE Transactions</motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
            Expert structuring and advisory for black economic empowerment transactions that deliver lasting value.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-foreground mb-6">Strategic BEE Transaction Advisory</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
              Black Economic Empowerment (BEE) is a critical component of the South African business landscape. Clarity Group has extensive experience structuring BEE transactions that meet transformation objectives while maximising value for all stakeholders — existing shareholders, BEE partners, and the business itself.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              We advise on the full spectrum of BEE ownership structures, from direct equity participation and employee share ownership plans (ESOPs) to broad-based community trusts. Our approach ensures that BEE deals are commercially sustainable, properly funded, and aligned with long-term business strategy.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-8">
              Our team combines deep corporate finance expertise with a thorough understanding of BEE legislation, codes of good practice, and sector-specific scorecards. We help clients navigate the complexities of B-BBEE compliance while creating genuine, sustainable empowerment outcomes.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} custom={0} className="text-xl font-display font-semibold text-foreground mb-4">Our BEE Services</motion.h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {benefits.map((b, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Button asChild size="lg" className="gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity border-0">
              <Link to="/contact">Discuss BEE Solutions <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default BeeTransactions;
