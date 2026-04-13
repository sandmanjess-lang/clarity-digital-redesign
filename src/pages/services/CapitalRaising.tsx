import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SEO, { serviceSchema, breadcrumbSchema } from "@/components/SEO";

const benefits = [
  "Equity fundraising from institutional and private investors",
  "Debt capital raising and refinancing solutions",
  "Mezzanine and hybrid capital structuring",
  "Growth capital for expansion and acquisitions",
  "Recapitalisation and balance sheet optimisation",
  "Access to a global network of capital providers",
];

const CapitalRaising = () => (
  <Layout>
    <SEO
      title="Capital Raising — Equity & Debt Fundraising Advisory"
      description="Clarity Group provides expert capital raising advisory services in South Africa. We help unlisted corporates raise equity and debt capital for growth, expansion, recapitalisation, and acquisitions across Southern Africa."
      canonical="/services/capital-raising"
      jsonLd={[
        serviceSchema("Capital Raising", "Equity and debt fundraising advisory for growth, expansion, and recapitalisation across Southern Africa."),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Capital Raising", url: "/services/capital-raising" },
        ]),
      ]}
    />

    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }} />
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>Our Services</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>Capital Raising</motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
            Expert equity and debt fundraising advisory to fuel your business growth, expansion, and recapitalisation.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-foreground mb-6">Raising Capital for Growth and Transformation</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
              Whether you are seeking equity investment from institutional or private investors, arranging debt facilities, or structuring mezzanine and hybrid capital solutions, Clarity Group provides end-to-end capital raising advisory tailored to your business needs. We have an established track record of raising capital across diverse sectors including industrials, technology, healthcare, financial services, logistics, and property.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              Our approach begins with a thorough understanding of your business, its capital requirements, and strategic objectives. We then identify the most appropriate capital structure and connect you with our extensive network of local and international capital providers — including private equity funds, development finance institutions, commercial banks, and family offices.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-8">
              With over 25 years of investment banking experience and a completed transaction value exceeding R5 billion, Clarity Group brings deep expertise and credibility to every capital raising mandate. Our senior-led model ensures that experienced principals manage every aspect of the fundraising process.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} custom={0} className="text-xl font-display font-semibold text-foreground mb-4">What We Offer</motion.h3>
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
              <Link to="/contact">Discuss Your Capital Needs <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CapitalRaising;
