import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SEO, { serviceSchema, breadcrumbSchema } from "@/components/SEO";

const benefits = [
  "Independent business valuations for M&A transactions",
  "Valuations for shareholder disputes and litigation support",
  "Regulatory and compliance valuations (IFRS, Companies Act)",
  "Fair value assessments for BEE transactions",
  "Portfolio and investment valuations",
  "Goodwill and intangible asset valuations",
];

const Valuations = () => (
  <Layout>
    <SEO
      title="Valuations — Independent Business Valuation Services"
      description="Clarity Group provides independent business valuations in South Africa for transactions, disputes, compliance, and BEE structuring. Expert valuation advisory for unlisted corporates across Southern Africa."
      canonical="/services/valuations"
      jsonLd={[
        serviceSchema("Valuations", "Independent business valuations for transactions, disputes, and regulatory compliance across Southern Africa."),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Valuations", url: "/services/valuations" },
        ]),
      ]}
    />

    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }} />
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>Our Services</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>Valuations</motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
            Independent, credible business valuations for transactions, disputes, and regulatory compliance.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-foreground mb-6">Trusted Independent Valuations</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
              Accurate and defensible business valuations are essential for informed decision-making. Clarity Group provides independent valuation services that meet the highest professional standards, whether for transactions, shareholder disputes, regulatory compliance, or strategic planning.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              Our valuation methodology draws on internationally recognised approaches — including discounted cash flow (DCF), comparable company analysis, and precedent transaction analysis — applied with deep knowledge of South African markets and industry dynamics.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-8">
              As independent advisors with no conflicts of interest, our valuations are trusted by boards, shareholders, courts, and regulators. We have extensive experience across industrials, services, technology, healthcare, property, and financial services sectors.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} custom={0} className="text-xl font-display font-semibold text-foreground mb-4">Valuation Services</motion.h3>
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
              <Link to="/contact">Request a Valuation <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Valuations;
