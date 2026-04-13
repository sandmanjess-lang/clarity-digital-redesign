import { motion } from "framer-motion";
import { Target, Briefcase, Scale, Users, Globe, Shield, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import SEO, { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  { icon: Briefcase, title: "Capital Raising", desc: "Equity and debt fundraising for growth, expansion, and recapitalisation." },
  { icon: Target, title: "Mergers & Acquisitions", desc: "Buy-side and sell-side advisory for acquisitions, mergers, and disposals." },
  { icon: Scale, title: "Valuations", desc: "Independent business valuations for transactions, disputes, and compliance." },
  { icon: Users, title: "BEE Transactions", desc: "Structuring and advising on black economic empowerment transactions." },
  { icon: Globe, title: "Strategic Consulting", desc: "Strategic review, market analysis, and advisory for corporate decision-making." },
  { icon: Shield, title: "Management Buy-outs", desc: "Structuring and funding management buy-outs and buy-ins." },
];

const faqs = [
  {
    question: "What is Clarity Group?",
    answer: "Clarity Group is an independent corporate finance advisory firm based in Illovo, Johannesburg, South Africa. Founded by Don Millar, the firm provides specialised corporate finance advice to unlisted corporates and entrepreneurs across Southern Africa, covering mergers & acquisitions, capital raising, valuations, BEE transactions, management buy-outs, and strategic consulting.",
  },
  {
    question: "What corporate finance services does Clarity Group offer?",
    answer: "Clarity Group offers a comprehensive suite of corporate finance services: mergers and acquisitions (buy-side and sell-side advisory), equity and debt capital raising, independent business valuations, BEE transaction structuring and advisory, management buy-outs and buy-ins, and strategic consulting including market analysis and corporate strategy reviews.",
  },
  {
    question: "Who does Clarity Group work with?",
    answer: "Clarity Group primarily works with unlisted corporates, entrepreneurs, and owner-managed businesses across Southern Africa. Our clients span multiple sectors including industrials, services, healthcare, technology, financial services, food services, logistics, and property development.",
  },
  {
    question: "What makes Clarity Group different from other corporate finance advisors?",
    answer: "Clarity Group differentiates itself through a senior-led engagement model where clients work directly with experienced principals — not junior staff. With over 25 years of investment banking experience, a completed transaction value exceeding R5 billion, and over 50 deals closed, we offer deep expertise combined with personalised, conflict-free advice.",
  },
  {
    question: "Where is Clarity Group located?",
    answer: "Clarity Group is headquartered in Illovo, Johannesburg, Gauteng, South Africa. We serve clients throughout Southern Africa and have an established global network of institutional and private capital providers for cross-border transactions.",
  },
  {
    question: "How can I contact Clarity Group for a corporate finance engagement?",
    answer: "You can reach Clarity Group by phone at +27 83 450 5566, by email at info@claritygroup.co.za, or visit our office in Illovo, Johannesburg. Our office hours are Monday to Friday, 08:00 to 17:00 SAST.",
  },
  {
    question: "Does Clarity Group handle BEE transactions in South Africa?",
    answer: "Yes, BEE (Black Economic Empowerment) transaction structuring and advisory is one of Clarity Group's core services. We have extensive experience structuring BEE deals across various sectors, helping companies meet their transformation objectives while maximising value for all stakeholders.",
  },
  {
    question: "What is Clarity Group's track record?",
    answer: "Clarity Group has completed over 50 transactions with a combined value exceeding R5 billion. Our track record spans diverse sectors and deal types including acquisitions, disposals, capital raises, BEE transactions, management buy-outs, and valuations.",
  },
];

const servicesJsonLd = services.map((s) =>
  serviceSchema(s.title, s.desc)
);

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us — Corporate Finance Advisory Services"
        description="Learn about Clarity Group, an independent corporate finance advisory firm in Johannesburg, South Africa. Services include M&A, capital raising, valuations, BEE transactions, and strategic consulting."
        canonical="/about"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
          faqSchema(faqs),
          ...servicesJsonLd,
        ]}
      />

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
      <section className="py-20" aria-labelledby="approach-heading">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} id="approach-heading" className="text-3xl font-display font-bold text-foreground mb-6">
                Our Approach
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
                Clarity Advisors focuses on providing independent, specialised corporate finance advice to unlisted corporates and entrepreneurs. Our range of services includes capital raising, mergers and acquisitions, disposals, BEE transactions, valuations, and strategic consulting.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
                We pride ourselves on providing a personalised approach to our clients, ensuring that senior professionals are directly involved in every engagement. This hands-on model guarantees the highest quality of service and attention to detail.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                Our team brings over 25 years of experience spanning investment banking, private equity, and corporate finance advisory, combined with a global network of institutional and private capital providers.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[
                { value: "25+", label: "Years Experience" },
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
      <section className="py-20 bg-muted/30" aria-labelledby="services-heading">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Our Expertise</motion.p>
            <motion.h2 variants={fadeUp} custom={1} id="services-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground">Services We Offer</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.article key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="glass-card p-7">
                <div className="w-11 h-11 rounded-lg gradient-accent flex items-center justify-center mb-4" aria-hidden="true">
                  <s.icon size={20} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for GEO / AI Search */}
      <section className="py-20 md:py-28" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <motion.p variants={fadeUp} custom={0} className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
                Common Questions
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} id="faq-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Frequently Asked Questions
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border rounded-xl">
                    <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
