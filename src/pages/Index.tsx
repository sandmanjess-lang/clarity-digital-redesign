import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Handshake, BarChart3, Shield, Users, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import SEO, { organizationSchema, websiteSchema, localBusinessSchema } from "@/components/SEO";

const services = [
  {
    icon: Handshake,
    title: "Mergers & Acquisitions",
    description: "Strategic advisory for acquisitions, disposals, and management buy-outs across diverse sectors.",
  },
  {
    icon: TrendingUp,
    title: "Capital Raising",
    description: "Equity and debt capital raising solutions tailored to your business growth objectives.",
  },
  {
    icon: BarChart3,
    title: "Valuations",
    description: "Independent business valuations for transactions, disputes, and regulatory compliance.",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "25+ Years Experience",
    description: "Deep expertise in corporate finance with a proven track record across multiple sectors.",
  },
  {
    icon: Users,
    title: "Direct Senior Access",
    description: "Work directly with senior principals — no handoffs to junior staff.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "International reach through established relationships with global financial institutions.",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Clarity Group is an independent corporate finance advisory firm in Johannesburg, South Africa. We specialise in mergers & acquisitions, capital raising, valuations, BEE transactions, and strategic consulting for unlisted corporates and entrepreneurs across Southern Africa."
        canonical="/"
        jsonLd={[organizationSchema, websiteSchema, localBusinessSchema]}
      />

      {/* Hero */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, hsla(85, 62%, 40%, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(207, 18%, 50%, 0.2) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 py-28 md:py-40 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: "hsl(85, 62%, 50%)" }}
            >
              Corporate Finance Advisory
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6"
              style={{ color: "hsl(0, 0%, 100%)" }}
            >
              Investment &{" "}
              <span className="text-gradient">Corporate Finance</span>{" "}
              Solutions
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{ color: "hsla(0, 0%, 100%, 0.75)" }}
            >
              Clarity Group provides independent, specialised corporate finance advice
              to unlisted corporates and entrepreneurs across Southern Africa.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex gap-4 flex-wrap">
              <Button asChild size="lg" className="gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity border-0">
                <Link to="/about">
                  Discover More <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, hsl(210, 20%, 96%), transparent)" }}
        />
      </section>

      {/* Services */}
      <section className="py-20 md:py-28" aria-labelledby="services-heading">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} id="services-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Corporate Finance Services
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
                className="glass-card p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-5" aria-hidden="true">
                  <service.icon size={22} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clarity */}
      <section className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} id="why-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The Clarity Difference
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
                className="glass-card p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* About summary for SEO/GEO — crawlable rich content */}
      <section className="py-16 md:py-20" aria-labelledby="about-summary-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.h2 variants={fadeUp} custom={0} id="about-summary-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                About Clarity Group
              </motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <motion.p variants={fadeUp} custom={0}>
                Clarity Group is a boutique corporate finance advisory firm headquartered in Illovo, Johannesburg, South Africa. Founded by Don Millar — a qualified Chartered Accountant (CA(SA)) with over 25 years of investment banking experience — the firm provides independent, conflict-free advice to unlisted corporates and entrepreneurs throughout Southern Africa.
              </motion.p>
              <motion.p variants={fadeUp} custom={1}>
                Our core services include <strong className="text-foreground">mergers and acquisitions</strong> (buy-side and sell-side advisory), <strong className="text-foreground">capital raising</strong> (equity and debt), <strong className="text-foreground">independent business valuations</strong>, <strong className="text-foreground">BEE transaction structuring</strong>, <strong className="text-foreground">management buy-outs</strong>, and <strong className="text-foreground">strategic consulting</strong>. We operate across multiple sectors including industrials, services, healthcare, technology, financial services, food services, logistics, and property.
              </motion.p>
              <motion.p variants={fadeUp} custom={2}>
                What sets Clarity Group apart is our senior-led engagement model: clients work directly with experienced principals throughout the entire transaction lifecycle, ensuring the highest quality advice and personalised attention. With a completed transaction value exceeding R5 billion and over 50 deals closed, we have a proven track record of delivering results.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="gradient-hero rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 30% 50%, hsla(85, 62%, 40%, 0.4) 0%, transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl md:text-4xl font-display font-bold mb-4"
                style={{ color: "hsl(0, 0%, 100%)" }}
              >
                Ready to discuss your next transaction?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-lg mb-8 max-w-xl mx-auto"
                style={{ color: "hsla(0, 0%, 100%, 0.75)" }}
              >
                Let our experienced team help you navigate your corporate finance needs with clarity and confidence.
              </motion.p>
              <motion.div variants={fadeUp} custom={2}>
                <Button asChild size="lg" className="gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity border-0">
                  <Link to="/contact">
                    Contact Us <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
