import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SEO, { serviceSchema, breadcrumbSchema } from "@/components/SEO";

const benefits = [
  "Buy-side advisory — target identification, due diligence, and deal execution",
  "Sell-side advisory — preparing businesses for sale and managing competitive processes",
  "Acquisition structuring and negotiation support",
  "Disposal and divestiture advisory",
  "Cross-border M&A transaction support",
  "Post-merger integration planning",
];

const MergersAcquisitions = () => (
  <Layout>
    <SEO
      title="Mergers & Acquisitions — M&A Advisory Services"
      description="Clarity Group provides expert mergers and acquisitions advisory in South Africa. Buy-side and sell-side M&A services for unlisted corporates across Southern Africa, with over 50 deals completed."
      canonical="/services/mergers-and-acquisitions"
      jsonLd={[
        serviceSchema("Mergers & Acquisitions", "Buy-side and sell-side M&A advisory for acquisitions, mergers, and disposals across Southern Africa."),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Mergers & Acquisitions", url: "/services/mergers-and-acquisitions" },
        ]),
      ]}
    />

    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }} />
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>Our Services</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>Mergers &amp; Acquisitions</motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
            Strategic buy-side and sell-side advisory for acquisitions, mergers, and disposals across diverse sectors.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-foreground mb-6">Expert M&amp;A Advisory for Unlisted Businesses</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
              Clarity Group provides comprehensive mergers and acquisitions advisory services to unlisted corporates and entrepreneurs across Southern Africa. Whether you are looking to acquire a business, merge with a strategic partner, or sell your company, our experienced team guides you through every stage of the transaction.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              Our M&A practice spans buy-side advisory — including target identification, valuation, due diligence coordination, and deal structuring — as well as sell-side advisory, where we prepare businesses for sale, manage competitive auction processes, and negotiate optimal outcomes for our clients.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-8">
              With over 50 transactions completed and a combined deal value exceeding R5 billion, Clarity Group has deep experience across sectors including industrials, services, technology, healthcare, financial services, food services, logistics, and property development. Our global network enables us to facilitate cross-border transactions efficiently.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} custom={0} className="text-xl font-display font-semibold text-foreground mb-4">Our M&amp;A Capabilities</motion.h3>
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
              <Link to="/contact">Discuss Your M&amp;A Strategy <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default MergersAcquisitions;
