import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SEO, { serviceSchema, breadcrumbSchema } from "@/components/SEO";

const benefits = [
  "Management buy-out (MBO) structuring and advisory",
  "Management buy-in (MBI) facilitation",
  "Leveraged buy-out (LBO) funding and structuring",
  "Vendor-funded and deferred payment structures",
  "Equity and debt funding arrangement",
  "Negotiation support and transaction execution",
];

const ManagementBuyOuts = () => (
  <Layout>
    <SEO
      title="Management Buy-outs — MBO & MBI Advisory"
      description="Clarity Group provides expert management buy-out (MBO) and buy-in (MBI) advisory in South Africa. We structure and fund management-led acquisitions for unlisted businesses across Southern Africa."
      canonical="/services/management-buy-outs"
      jsonLd={[
        serviceSchema("Management Buy-outs", "Structuring and funding management buy-outs and buy-ins across Southern Africa."),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Management Buy-outs", url: "/services/management-buy-outs" },
        ]),
      ]}
    />

    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsla(85, 62%, 40%, 0.3), transparent 50%)" }} />
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(85, 62%, 50%)" }}>Our Services</motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>Management Buy-outs</motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: "hsla(0, 0%, 100%, 0.75)" }}>
            Expert structuring and funding of management buy-outs and buy-ins for business continuity and growth.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }} />
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-foreground mb-6">Management-Led Acquisitions</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
              A management buy-out (MBO) allows existing management to acquire ownership of the business they operate, ensuring continuity, preserving institutional knowledge, and aligning the interests of owners and operators. Clarity Group specialises in structuring and funding these transactions for unlisted businesses across Southern Africa.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              Whether the scenario involves a retiring founder seeking an exit, a corporate disposal of a non-core division, or management seeking to take control of a business they have helped build, we structure deals that work for all parties — management, sellers, and funders.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-8">
              Our expertise extends to leveraged buy-outs (LBOs), management buy-ins (MBIs), and hybrid structures. We arrange the optimal mix of equity, senior debt, and mezzanine financing to fund the transaction while ensuring the business remains financially healthy post-acquisition.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} custom={0} className="text-xl font-display font-semibold text-foreground mb-4">Our MBO Capabilities</motion.h3>
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
              <Link to="/contact">Explore MBO Options <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ManagementBuyOuts;
